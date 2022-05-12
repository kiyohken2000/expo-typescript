import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "../theme";

export default function Button(props: any) {
  const { label, onPress, color, fontSize, disable, loading } = props

  if(disable) {
    return (
      <View
        style={[styles.container, { backgroundColor: color, opacity: 0.2 }]}
      >
        <Text
          style={[styles.label, {fontSize: fontSize}]}
        >
          {label}
        </Text>
      </View>
    )
  }

  if(loading) {
    return (
      <View
        style={[styles.container, { backgroundColor: color }]}
      >
        <ActivityIndicator size="small" color={colors.white} />
      </View>
    )
  }

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