import { Pdf as TPdf } from "../api/pdf/Pdf";

export const PDF_TITLE_FIELD = "fileName";

export const PdfTitle = (record: TPdf): string => {
  return record.fileName?.toString() || String(record.id);
};
