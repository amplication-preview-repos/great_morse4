import * as graphql from "@nestjs/graphql";
import { ExtractedContentResolverBase } from "./base/extractedContent.resolver.base";
import { ExtractedContent } from "./base/ExtractedContent";
import { ExtractedContentService } from "./extractedContent.service";

@graphql.Resolver(() => ExtractedContent)
export class ExtractedContentResolver extends ExtractedContentResolverBase {
  constructor(protected readonly service: ExtractedContentService) {
    super(service);
  }
}
