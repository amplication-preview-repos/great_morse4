import { Module } from "@nestjs/common";
import { PdfModuleBase } from "./base/pdf.module.base";
import { PdfService } from "./pdf.service";
import { PdfController } from "./pdf.controller";
import { PdfResolver } from "./pdf.resolver";

@Module({
  imports: [PdfModuleBase],
  controllers: [PdfController],
  providers: [PdfService, PdfResolver],
  exports: [PdfService],
})
export class PdfModule {}
