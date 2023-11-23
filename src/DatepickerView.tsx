import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

import { DatepickerViewProps, NativeDatepickerProps } from "./Datepicker.types";

const NativeDatepickerView = requireNativeViewManager<
  NativeDatepickerProps & { style: ViewProps["style"] }
>("Datepicker");

export default function DatepickerView({
  date,
  onChange,
  web,
  ios,
  ...props
}: DatepickerViewProps & ViewProps) {
  return (
    <View {...props}>
      <NativeDatepickerView
        date={date.toISOString()}
        {...ios}
        onValueChanged={(event) => {
          onChange?.({ value: new Date(event.nativeEvent.value) });
        }}
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
}
