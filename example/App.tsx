import { DatepickerView } from "objet-datepicker";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [date, setDate] = useState(new Date("2021-01-01"));

  return (
    <View style={styles.container}>
      <Text>{date.toISOString()}</Text>
      <DatepickerView
        style={{ width: 300, height: 500 }}
        date={date}
        ios={{ backgroundColor: "#262626", cornerRadius: 10 }}
        web={{
          captionLayout: "dropdown-buttons",
          styles: {
            dropdown: { backgroundColor: "red" },
          },
          modifiersStyles: { selected: { backgroundColor: "red" } },
        }}
        onChange={(e) => setDate(e.value)}
      />

      <Button
        onPress={() => {
          setDate(new Date("1993-08-08"));
        }}
        title="Change date"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
