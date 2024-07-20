import { JsonValue } from "type-fest";
import { Pdf } from "../pdf/Pdf";

export type ExtractedContent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  pageNumber: number | null;
  contentType?: "Option1" | null;
  content: JsonValue;
  pdf?: Pdf | null;
};
