import { ExtractedContentWhereInput } from "./ExtractedContentWhereInput";
import { ExtractedContentOrderByInput } from "./ExtractedContentOrderByInput";

export type ExtractedContentFindManyArgs = {
  where?: ExtractedContentWhereInput;
  orderBy?: Array<ExtractedContentOrderByInput>;
  skip?: number;
  take?: number;
};
