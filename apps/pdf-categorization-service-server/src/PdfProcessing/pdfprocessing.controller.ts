import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PdfProcessingService } from "./pdfprocessing.service";

@swagger.ApiTags("pdfProcessings")
@common.Controller("pdfProcessings")
export class PdfProcessingController {
  constructor(protected readonly service: PdfProcessingService) {}

  @common.Post("/extract-content")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ExtractContent(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ExtractContent(body);
      }

  @common.Post("/parse-pdf")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ParsePdf(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ParsePdf(body);
      }

  @common.Post("/upload-pdf")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadPdf(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UploadPdf(body);
      }
}
