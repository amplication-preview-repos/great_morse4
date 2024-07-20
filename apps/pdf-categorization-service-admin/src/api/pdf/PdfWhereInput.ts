import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ExtractedContentListRelationFilter } from "../extractedContent/ExtractedContentListRelationFilter";

export type PdfWhereInput = {
  id?: StringFilter;
  uploadDate?: DateTimeNullableFilter;
  fileName?: StringNullableFilter;
  status?: "Option1";
  metadata?: JsonFilter;
  extractedContents?: ExtractedContentListRelationFilter;
};
