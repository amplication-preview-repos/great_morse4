import { InputJsonValue } from "../../types";
import { ExtractedContentUpdateManyWithoutPdfsInput } from "./ExtractedContentUpdateManyWithoutPdfsInput";

export type PdfUpdateInput = {
  uploadDate?: Date | null;
  fileName?: string | null;
  status?: "Option1" | null;
  metadata?: InputJsonValue;
  extractedContents?: ExtractedContentUpdateManyWithoutPdfsInput;
};
