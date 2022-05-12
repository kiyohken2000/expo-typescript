import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, HomeScreenNavigationProp } from '../../types/types';
import Button from '../../components/Button';
import { colors, fontSize } from '../../theme';
import ScreenTemplate from '../../components/ScreenTemplate';
import { UserDataContext } from '../../contexts/UserDataContext';
import { Restart } from '../../utils/restart';
import moment from 'moment';
import { storage } from '../../utils/storage';

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const { userData } = useContext(UserDataContext)
  const [date, setDate] = useState('')

  useEffect(() => {
    console.log(userData)
    loadStorage()
  }, [])

  const onButtonPress = () => {
    navigation.navigate('Details')
  }

  const goModal = () => {
    navigation.navigate('ModalStack', {
      screen: 'Post',
      params: {from: 'Home'}
    })
  }

  const onSavePress = () => {
    saveStorage()
    loadStorage()
  }

  const onRemovePress = () => {
    removeStorage()
    loadStorage()
  }

  const saveStorage = async() => {
    const now = moment().format("YYYY-MM-DD HH:mm:ssZ")
    await storage.save({
      key: 'date',
      data: {
        'date': now
      }
    })
  }

  const loadStorage = async() => {
    try {
      const { date } = await storage.load({key: 'date'})
      setDate(date)
    } catch (e) {
      setDate('empty')
    }
  }

  const removeStorage = async() => {
    await storage.remove({ key: 'date' })
  }

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text>{userData.userName}</Text>
        <Text>{date}</Text>
        <View style={styles.buttonContainer}>
          <Button
            label='go detail!'
            color={colors.lightPurple}
            fontSize={fontSize.large}
            onPress={() => onButtonPress()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label='go modal'
            color={colors.purple}
            fontSize={fontSize.large}
            onPress={() => goModal()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label='App Reload'
            color={colors.pink}
            fontSize={fontSize.large}
            onPress={() => Restart()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label='Save Date'
            color={colors.chocolate}
            fontSize={fontSize.large}
            onPress={() => onSavePress()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            label='Remove Date'
            color={colors.navy}
            fontSize={fontSize.large}
            onPress={() => onRemovePress()}
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
