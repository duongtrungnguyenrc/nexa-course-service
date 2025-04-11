export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  status: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
}
