import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/types';
import ScreenTemplate from '../../components/ScreenTemplate';
import axios from 'axios';
import RenderItem from './RenderItem';
import Loading from '../../components/Loading';

export type ProfileProps = StackScreenProps<RootStackParamList, 'Profile'>;

interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Profile() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async() => {
    try {
      setIsLoading(true)
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(data)
    } catch(e) {
      console.log('error', e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ScreenTemplate>
      {!isLoading?
        <ScrollView style={styles.container}>
          {data.map((item: Item, i) => {
            return <RenderItem key={item.id} item={item} />
          })}
        </ScrollView>
        :
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      }
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
