import { ICourse } from './../models/course.model';

export const coursesMock: ICourse[] = [
  {
    id: '1',
    title: 'Video Course 1. Name tag',
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    duration: 15,
    creationDate: new Date('01/01/2022'),
  },
  {
    id: '2',
    title: 'Video Course 2. Name tag',
    description: `Learn about where you can find course descriptions...`,
    duration: 30,
    creationDate: new Date('02/02/2022'),
  },
];
