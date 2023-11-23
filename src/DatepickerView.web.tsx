import * as React from "react";

import { DatepickerViewProps } from "./Datepicker.types";

export default function DatepickerView(props: DatepickerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
