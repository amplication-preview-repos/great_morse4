import { InputJsonValue } from "../../types";
import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type ExtractedContentUpdateInput = {
  pageNumber?: number | null;
  contentType?: "Option1" | null;
  content?: InputJsonValue;
  pdf?: PdfWhereUniqueInput | null;
};
