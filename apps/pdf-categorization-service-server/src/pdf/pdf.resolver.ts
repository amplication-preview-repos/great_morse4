import * as graphql from "@nestjs/graphql";
import { PdfResolverBase } from "./base/pdf.resolver.base";
import { Pdf } from "./base/Pdf";
import { PdfService } from "./pdf.service";

@graphql.Resolver(() => Pdf)
export class PdfResolver extends PdfResolverBase {
  constructor(protected readonly service: PdfService) {
    super(service);
  }
}
