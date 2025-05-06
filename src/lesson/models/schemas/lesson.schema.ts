import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Lesson } from "../interfaces";

@Schema({ collection: "lesson", timestamps: true })
export class LessonDocument extends Document<string> implements Lesson {
  @Prop({ required: true })
  courseId: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop()
  description: string;

  @Prop()
  orderNumber: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const LessonSchema = SchemaFactory.createForClass(LessonDocument);
