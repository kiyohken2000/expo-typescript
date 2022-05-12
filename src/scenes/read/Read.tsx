import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import Button from '../../components/Button';
import { colors, fontSize } from '../../theme';

export type ReadProps = StackScreenProps<RootStackParamList, 'Read'>;

export default function Read() {
  const navigation = useNavigation()

  const goHistory = () => {
    navigation.navigate('History')
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          label='Go History'
          color={colors.purple}
          fontSize={fontSize.large}
          onPress={() =>goHistory()}
        />
      </View>
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
  buttonContainer: {
    width: '70%',
    paddingVertical: 10
  }
});
