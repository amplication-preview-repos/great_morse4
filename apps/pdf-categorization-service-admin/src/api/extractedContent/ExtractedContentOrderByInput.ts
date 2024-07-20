import { SortOrder } from "../../util/SortOrder";

export type ExtractedContentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  pageNumber?: SortOrder;
  contentType?: SortOrder;
  content?: SortOrder;
  pdfId?: SortOrder;
};
