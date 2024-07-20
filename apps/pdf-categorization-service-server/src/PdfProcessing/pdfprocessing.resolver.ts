import * as graphql from "@nestjs/graphql";
import { PdfProcessingService } from "./pdfprocessing.service";

export class PdfProcessingResolver {
  constructor(protected readonly service: PdfProcessingService) {}

  @graphql.Mutation(() => String)
  async ExtractContent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ExtractContent(args);
  }

  @graphql.Mutation(() => String)
  async ParsePdf(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ParsePdf(args);
  }

  @graphql.Mutation(() => String)
  async UploadPdf(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadPdf(args);
  }
}
