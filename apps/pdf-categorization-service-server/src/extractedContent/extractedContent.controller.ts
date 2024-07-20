import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExtractedContentService } from "./extractedContent.service";
import { ExtractedContentControllerBase } from "./base/extractedContent.controller.base";

@swagger.ApiTags("extractedContents")
@common.Controller("extractedContents")
export class ExtractedContentController extends ExtractedContentControllerBase {
  constructor(protected readonly service: ExtractedContentService) {
    super(service);
  }
}
