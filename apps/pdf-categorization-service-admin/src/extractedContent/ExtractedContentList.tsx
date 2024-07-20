import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PDF_TITLE_FIELD } from "../pdf/PdfTitle";

export const ExtractedContentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ExtractedContents"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
