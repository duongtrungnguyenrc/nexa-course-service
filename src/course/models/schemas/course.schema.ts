import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Course } from '../interfaces';

@Schema({ collection: 'course', timestamps: true })
export class CourseDocument extends Document<string> implements Course {
  @Prop()
  title: string;

  @Prop()
  slug: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop()
  price: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  authorId: string;
}

export const CourseSchema = SchemaFactory.createForClass(CourseDocument);
