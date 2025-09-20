import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const colors = {
    pink: "#FFB6C1",
    lightGreen: "#90EE90",
    lightBlue: "#ADD8E6",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Color Changer</Text>
      <View style={[styles.colorDisplay, { backgroundColor: backgroundColor }]}>
        <Text style={styles.colorText}>Current Color</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: colors.pink }]}
          onPress={() => setBackgroundColor(colors.pink)}
        >
          <Text style={styles.buttonText}>Pink</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: colors.lightGreen }]}
          onPress={() => setBackgroundColor(colors.lightGreen)}
        >
          <Text style={styles.buttonText}>Light Green</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: colors.lightBlue }]}
          onPress={() => setBackgroundColor(colors.lightBlue)}
        >
          <Text style={styles.buttonText}>Light Blue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  colorDisplay: {
    width: 200,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  colorText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
  },
  colorButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
});
