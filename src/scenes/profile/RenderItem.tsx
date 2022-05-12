import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fontSize } from "../../theme";

export default function RenderItem(props: any) {
  const { userId, id, title, body } = props.item

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: fontSize.large
  },
  body: {
    fontSize: fontSize.small
  }
})