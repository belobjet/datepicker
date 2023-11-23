import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import { DatepickerViewProps } from "./Datepicker.types";

const NativeView: React.ComponentType<DatepickerViewProps> =
  requireNativeViewManager("Datepicker");

export default function DatepickerView(props: DatepickerViewProps) {
  return <NativeView {...props} />;
}
