import { Injectable } from "@nestjs/common";

@Injectable()
export class PdfProcessingService {
  constructor() {}
  async ExtractContent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ParsePdf(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadPdf(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
