import { InputJsonValue } from "../../types";
import { ExtractedContentCreateNestedManyWithoutPdfsInput } from "./ExtractedContentCreateNestedManyWithoutPdfsInput";

export type PdfCreateInput = {
  uploadDate?: Date | null;
  fileName?: string | null;
  status?: "Option1" | null;
  metadata?: InputJsonValue;
  extractedContents?: ExtractedContentCreateNestedManyWithoutPdfsInput;
};
