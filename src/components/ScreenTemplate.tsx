import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { colors } from "../theme";
import { StatusBar } from 'expo-status-bar';

export default function ScreenTemplate(props: any) {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        {props.children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
})