import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { PdfTitle } from "../pdf/PdfTitle";

export const ExtractedContentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="PageNumber" source="pageNumber" />
        <SelectInput
          source="contentType"
          label="ContentType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <ReferenceInput source="pdf.id" reference="Pdf" label="PDF">
          <SelectInput optionText={PdfTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
