import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PDF_TITLE_FIELD } from "../pdf/PdfTitle";

export const ExtractedContentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="PageNumber" source="pageNumber" />
        <TextField label="ContentType" source="contentType" />
        <TextField label="Content" source="content" />
        <ReferenceField label="PDF" source="pdf.id" reference="Pdf">
          <TextField source={PDF_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
