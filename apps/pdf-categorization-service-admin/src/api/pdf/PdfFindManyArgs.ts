import { PdfWhereInput } from "./PdfWhereInput";
import { PdfOrderByInput } from "./PdfOrderByInput";

export type PdfFindManyArgs = {
  where?: PdfWhereInput;
  orderBy?: Array<PdfOrderByInput>;
  skip?: number;
  take?: number;
};
