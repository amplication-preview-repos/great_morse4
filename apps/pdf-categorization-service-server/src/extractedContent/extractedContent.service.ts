import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExtractedContentServiceBase } from "./base/extractedContent.service.base";

@Injectable()
export class ExtractedContentService extends ExtractedContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
