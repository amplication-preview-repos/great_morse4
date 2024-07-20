import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PDF_TITLE_FIELD } from "./PdfTitle";

export const PdfShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UploadDate" source="uploadDate" />
        <TextField label="FileName" source="fileName" />
        <TextField label="Status" source="status" />
        <TextField label="Metadata" source="metadata" />
        <ReferenceManyField
          reference="ExtractedContent"
          target="pdfId"
          label="ExtractedContents"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="PageNumber" source="pageNumber" />
            <TextField label="ContentType" source="contentType" />
            <TextField label="Content" source="content" />
            <ReferenceField label="PDF" source="pdf.id" reference="Pdf">
              <TextField source={PDF_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
