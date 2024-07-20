import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PdfServiceBase } from "./base/pdf.service.base";

@Injectable()
export class PdfService extends PdfServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
