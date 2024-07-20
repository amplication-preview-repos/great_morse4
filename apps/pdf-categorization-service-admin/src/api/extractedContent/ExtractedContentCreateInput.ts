import { InputJsonValue } from "../../types";
import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type ExtractedContentCreateInput = {
  pageNumber?: number | null;
  contentType?: "Option1" | null;
  content?: InputJsonValue;
  pdf?: PdfWhereUniqueInput | null;
};
