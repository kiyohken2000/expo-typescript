import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function Post() {
  const route = useRoute()
  const { from } = route.params

  useEffect(() => {
    console.log(from)
  }, [])

  return (
    <View style={styles.container}>
      <Text>Post</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
