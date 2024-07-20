import { Module } from "@nestjs/common";
import { ExtractedContentModuleBase } from "./base/extractedContent.module.base";
import { ExtractedContentService } from "./extractedContent.service";
import { ExtractedContentController } from "./extractedContent.controller";
import { ExtractedContentResolver } from "./extractedContent.resolver";

@Module({
  imports: [ExtractedContentModuleBase],
  controllers: [ExtractedContentController],
  providers: [ExtractedContentService, ExtractedContentResolver],
  exports: [ExtractedContentService],
})
export class ExtractedContentModule {}
