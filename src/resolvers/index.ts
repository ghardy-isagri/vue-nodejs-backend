import { prisma } from "../database";
import { Query } from "./query";
import { Mutation } from "./mutation";

// Define types for resolvers
interface Parent {
  id: string;
  email?: string;
  fullName?: string;
  enrolled?: boolean;
  dept?: string;
  code?: string;
  title?: string;
  description?: string;
}

interface Context {
  prisma: typeof prisma;
}

interface Args {
  [key: string]: any;
}

const Student = {
  id: (parent: Parent) => parent.id,
  email: (parent: Parent) => parent.email,
  fullName: (parent: Parent) => parent.fullName,
  enrolled: (parent: Parent) => parent.enrolled,
  dept: (parent: Parent, _args: Args, context: Context) => {
    return context.prisma.department.findFirst({
      where: { id: parent.dept },
    });
  },
};

const Department = {
  id: (parent: Parent) => parent.id,
  name: (parent: Parent) => parent.fullName,
  description: (parent: Parent) => parent.description,
  students: (parent: Parent, _args: Args, context: Context) => {
    return context.prisma.department.findUnique({
      where: { id: parent.id },
    }).students();
  },
  courses: (parent: Parent, _args: Args, context: Context) => {
    return context.prisma.department.findUnique({
      where: { id: parent.id },
    }).courses();
  },
};

const Teacher = {
  id: (parent: Parent) => parent.id,
  email: (parent: Parent) => parent.email,
  fullName: (parent: Parent) => parent.fullName,
  courses: (parent: Parent, _args: Args, context: Context) => {
    return context.prisma.teacher.findUnique({
      where: { id: parent.id },
    }).courses();
  },
};

const Course = {
  id: (parent: Parent) => parent.id,
  code: (parent: Parent) => parent.code,
  title: (parent: Parent) => parent.title,
  description: (parent: Parent) => parent.description,
  teacher: (parent: Parent, _args: Args, context: Context) => {
    return context.prisma.course.findUnique({
      where: { id: parent.id },
    }).teacher();
  },
  dept: (parent: Parent, _args: Args, context: Context) => {
    return context.prisma.course.findUnique({
      where: { id: parent.id },
    }).dept();
  },
};

export const resolvers = {
  Student,
  Department,
  Teacher,
  Course,
  Query,
  Mutation,
};
