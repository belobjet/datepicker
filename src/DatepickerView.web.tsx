import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./calendar.css";

import { DatepickerViewProps } from "./Datepicker.types";

export default function DatepickerView(props: DatepickerViewProps) {
  return (
    <DayPicker
      {...props.web}
      mode="single"
      fromYear={1900}
      toDate={new Date()}
      selected={props.date}
      onSelect={(date) => {
        if (date != null) {
          props.onChange?.({ value: date });
        }
      }}
    />
  );
}
