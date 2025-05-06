import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

import { ELessonSectionType } from "@lesson/enums";
import { LessonSection } from "../interfaces";

@Schema()
export class LessonSectionDocument extends Document<string> implements LessonSection {
  @Prop({ type: Types.ObjectId, ref: "lesson" })
  lessonId: string;

  @Prop({ required: true, enum: ELessonSectionType })
  type: ELessonSectionType;

  @Prop({ required: true })
  orderNumber: number;

  @Prop({ required: true })
  content: string;
}

export const LessonSectionSchema = SchemaFactory.createForClass(LessonSectionDocument);
