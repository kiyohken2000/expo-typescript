import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import Button from '../../components/Button';
import { colors, fontSize } from '../../theme';
import ScreenTemplate from '../../components/ScreenTemplate';

export type PostProps = StackScreenProps<RootStackParamList, 'Post'>;

export default function Post() {
  const route = useRoute<RouteProp<RootStackParamList, 'Post'>>()
  const navigation = useNavigation()
  const { from } = route.params

  useEffect(() => {
    console.log(from)
  }, [])

  const goPrint = () => {
    navigation.navigate('Print')
  }

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            label='Go Print'
            color={colors.purple}
            fontSize={fontSize.large}
            onPress={() => goPrint()}
          />
        </View>
      </View>
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '70%',
    paddingVertical: 10
  }
});
