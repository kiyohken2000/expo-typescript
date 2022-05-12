import React, { useContext } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import ScreenTemplate from '../../components/ScreenTemplate';
import { useRoute, RouteProp, useFocusEffect } from '@react-navigation/native';
import { HomeTitleContext } from '../../contexts/HomeTitleContext';
import { fontSize } from '../../theme';

export type FavoriteProps = StackScreenProps<RootStackParamList, 'Favorite'>;

export default function Favorite() {
  const route = useRoute<RouteProp<RootStackParamList, 'Favorite'>>()
  const { userId, id, title, body } = route.params.item
  const { setTitle } = useContext(HomeTitleContext)

  useFocusEffect(() => {
    setTitle(id)
  });

  return (
    <ScreenTemplate>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </ScrollView>
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  title: {
    fontSize: fontSize.xLarge
  },
  body: {
    fontSize: fontSize.small
  }
});
