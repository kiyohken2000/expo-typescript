import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { fontSize } from "../../theme";
import { useNavigation } from "@react-navigation/native";

export default function RenderItem(props: any) {
  const { userId, id, title, body } = props.item
  const navigation = useNavigation()

  const onButtonPress = () => {
    navigation.navigate('Favorite', {item: props.item})
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onButtonPress()}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </TouchableOpacity>
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