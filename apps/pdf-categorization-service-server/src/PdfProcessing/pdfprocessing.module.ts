import { Module } from "@nestjs/common";
import { PdfProcessingService } from "./pdfprocessing.service";
import { PdfProcessingController } from "./pdfprocessing.controller";
import { PdfProcessingResolver } from "./pdfprocessing.resolver";

@Module({
  controllers: [PdfProcessingController],
  providers: [PdfProcessingService, PdfProcessingResolver],
  exports: [PdfProcessingService],
})
export class PdfProcessingModule {}
