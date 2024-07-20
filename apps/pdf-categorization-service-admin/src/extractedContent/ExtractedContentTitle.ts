import { ExtractedContent as TExtractedContent } from "../api/extractedContent/ExtractedContent";

export const EXTRACTEDCONTENT_TITLE_FIELD = "id";

export const ExtractedContentTitle = (record: TExtractedContent): string => {
  return record.id?.toString() || String(record.id);
};
