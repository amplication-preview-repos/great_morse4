import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type ExtractedContentWhereInput = {
  id?: StringFilter;
  pageNumber?: IntNullableFilter;
  contentType?: "Option1";
  content?: JsonFilter;
  pdf?: PdfWhereUniqueInput;
};
