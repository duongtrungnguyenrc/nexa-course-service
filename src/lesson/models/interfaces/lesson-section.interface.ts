import { ELessonSectionType } from "@lesson/enums";

export interface LessonSection {
  _id: string;
  type: ELessonSectionType;
  orderNumber: number;
  content: string;
  lessonId: string;
}
