import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../theme";

export default function Button(props: any) {
  const { label, onPress, color, fontSize } = props

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color}]}
      onPress={onPress}
    >
      <Text
        style={[styles.label, {fontSize: fontSize}]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    borderRadius: 5
  },
  label: {
    color: colors.white
  }
})