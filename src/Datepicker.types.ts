import type { DayPickerProps } from "react-day-picker";

export type ChangeEventPayload = {
  value: Date;
};

export type DatepickerViewProps = {
  date: Date;
  onChange?: (event: ChangeEventPayload) => void;

  /// web props
  web?: Pick<
    DayPickerProps,
    | "className"
    | "classNames"
    | "modifiersClassNames"
    | "style"
    | "styles"
    | "modifiersStyles"
    | "captionLayout"
  >;

  ios?: Pick<NativeDatepickerProps, "cornerRadius" | "backgroundColor">;
};

export type NativeChangeEventPayload = {
  nativeEvent: {
    value: string;
  };
};

export type NativeDatepickerProps = {
  date: string;
  backgroundColor?: string;
  cornerRadius?: number;
  onValueChanged?: (event: NativeChangeEventPayload) => void;
};
