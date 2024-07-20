import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PdfService } from "./pdf.service";
import { PdfControllerBase } from "./base/pdf.controller.base";

@swagger.ApiTags("pdfs")
@common.Controller("pdfs")
export class PdfController extends PdfControllerBase {
  constructor(protected readonly service: PdfService) {
    super(service);
  }
}
