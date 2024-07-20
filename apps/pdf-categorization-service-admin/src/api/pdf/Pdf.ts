import { JsonValue } from "type-fest";
import { ExtractedContent } from "../extractedContent/ExtractedContent";

export type Pdf = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  uploadDate: Date | null;
  fileName: string | null;
  status?: "Option1" | null;
  metadata: JsonValue;
  extractedContents?: Array<ExtractedContent>;
};
