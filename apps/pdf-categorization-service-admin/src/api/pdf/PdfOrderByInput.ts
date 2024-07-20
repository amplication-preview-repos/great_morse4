import { SortOrder } from "../../util/SortOrder";

export type PdfOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
  fileName?: SortOrder;
  status?: SortOrder;
  metadata?: SortOrder;
};
