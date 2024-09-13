import { prisma } from "../database";

// Define types for the arguments
interface RegisterStudentArgs {
  email: string;
  fullName: string;
  deptId?: number;
}

interface EnrollArgs {
  id: string;
}

interface CourseCreateWithoutTeacherInput {
    code: string;
    title: string;
    description?: string;
  }
  
  interface CreateTeacherArgs {
    data: {
      email: string;
      fullName: string;
      courses: Array<CourseCreateWithoutTeacherInput>;
    };
  }

interface CreateCourseArgs {
  code: string;
  title: string;
  teacherEmail?: number;
}

interface CreateDepartmentArgs {
  name: string;
  description: string;
}

const Mutation = {
  registerStudent: (_parent: unknown, args: RegisterStudentArgs) => {
    return prisma.student.create({
      data: {
        email: args.email,
        fullName: args.fullName,
        dept: args.deptId
          ? {
              connect: { id: args.deptId },
            }
          : undefined,
      },
    });
  },

  enroll: (_parent: unknown, args: EnrollArgs) => {
    return prisma.student.update({
      where: { id: Number(args.id) },
      data: {
        enrolled: true,
      },
    });
  },

  createTeacher: async (_parent: unknown, args: CreateTeacherArgs) => {
    try {
      // Log incoming args for debugging
      console.log('Creating teacher with data:', args);

      const newTeacher = await prisma.teacher.create({
        data: {
          email: args.data.email,
          fullName: args.data.fullName,
          courses: {
            create: args.data.courses.map(course => ({
              code: course.code,
              title: course.title,
              description: course.description || "", // Default empty string if description is not provided
            })),
          },
        },
        include: {
          courses: true, // Include courses in the response
        },
      });

      return newTeacher;
    } catch (error) {
      console.error("Error creating teacher:", error);
      throw new Error("Failed to create teacher.");
    }
  },

  createCourse: async (_parent: unknown, args: CreateCourseArgs) => {
    try {
      const newCourse = await prisma.course.create({
        data: {
          code: args.code,
          title: args.title,
          teacher: args.teacherEmail
            ? {
                connect: { id: args.teacherEmail },
              }
            : null,
        },
      });

      return newCourse;
    } catch (error) {
      console.error("Error creating course: ", error);
      throw new Error("Failed to create course.");
    }
  },
  createDepartment: async (_parent: unknown, args: CreateDepartmentArgs) => {
    try {
      // Log incoming args for debugging
      console.log('Creating department with data:', args);

      // Create the department
      const newDepartment = await prisma.department.create({
        data: {
          name: args.name,  // Ensure this is not null or undefined
          description: args.description || "",  // Default empty string if description is not provided
        },
      });

      return newDepartment;
    } catch (error) {
      console.error("Error creating department:", error);
      throw new Error("Failed to create department.");
    }
  },
};

export { Mutation };
