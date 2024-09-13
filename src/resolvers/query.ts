import { prisma } from "../database";

// Define types for the query arguments
interface Args {
  id?: string;
}

const Query = {
  enrollment: (_parent: unknown, _args: Args) => {
    return prisma.student.findMany({
      where: { enrolled: true },
    });
  },
  student: (_parent: unknown, args: Args) => {
    return prisma.student.findFirst({
      where: { id: Number(args.id) },
    });
  },
  students: (_parent: unknown, _args: Args) => {
    return prisma.student.findMany({});
  },
  departments: (_parent: unknown, _args: Args) => {
    return prisma.department.findMany({});
  },
  department: (_parent: unknown, args: Args) => {
    return prisma.department.findFirst({
      where: { id: Number(args.id) },
    });
  },
  courses: (_parent: unknown, _args: Args) => {
    return prisma.course.findMany({});
  },
  course: (_parent: unknown, args: Args) => {
    return prisma.course.findFirst({
      where: { id: Number(args.id) },
    });
  },

  courseByCode: (_parent: unknown, args: { code: string }) => {
    try {
      // Find the course by its code
      const course = prisma.course.findUnique({
        where: { code: args.code },
        include: {
          teacher: true, // Include teacher information if needed
        },
      });

      return course;
    } catch (error) {
      console.error("Error finding course by code:", error);
      throw new Error("Failed to find course.");
    }
  },

  teachers: (_parent: unknown, _args: Args) => {
    return prisma.teacher.findMany({});
  },
  teacher: (_parent: unknown, args: Args) => {
    return prisma.teacher.findFirst({
      where: { id: Number(args.id) },
    });
  },
};

export { Query };
