import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import Button from '../../components/Button';
import { colors, fontSize } from '../../theme';
import ScreenTemplate from '../../components/ScreenTemplate';

export type WriteProps = StackScreenProps<RootStackParamList, 'Write'>;

export default function Write() {
  const navigation = useNavigation()

  const goHistory = () => {
    navigation.navigate('History')
  }

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            label='Go History'
            color={colors.purple}
            fontSize={fontSize.large}
            disable={false}
            loading={false}
            onPress={() =>goHistory()}
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
