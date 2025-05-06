export interface Lesson {
  _id: string;
  title: string;
  slug: string;
  description: string;
  orderNumber: number;
  createdAt: Date;
  updatedAt: Date;
  courseId: string;
}
