import { ICourse } from './../models/course.model';

export const coursesMock: ICourse[] = [
  {
    id: 1,
    name: 'Video Course 1. Name tag',
    description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.`,
    length: 184,
    date: new Date('01/15/2023'),
  },
  {
    id: 2,
    name: 'Video Course 2. Name tag',
    description: `Learn about where you can find course descriptions...`,
    length: 150,
    date: new Date('11/01/2022'),
    topRated: true,
  },
  {
    id: 3,
    name: 'Video Course 3. Name tag',
    description: `Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit`,
    length: 68,
    date: new Date('12/05/2022'),
    topRated: false,
  },
];
