import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Datepicker.web.ts
// and on native platforms to Datepicker.ts
import DatepickerModule from './DatepickerModule';
import DatepickerView from './DatepickerView';
import { ChangeEventPayload, DatepickerViewProps } from './Datepicker.types';

// Get the native constant value.
export const PI = DatepickerModule.PI;

export function hello(): string {
  return DatepickerModule.hello();
}

export async function setValueAsync(value: string) {
  return await DatepickerModule.setValueAsync(value);
}

const emitter = new EventEmitter(DatepickerModule ?? NativeModulesProxy.Datepicker);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { DatepickerView, DatepickerViewProps, ChangeEventPayload };
