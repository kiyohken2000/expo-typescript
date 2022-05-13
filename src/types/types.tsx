/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, CompositeNavigationProp } from '@react-navigation/native';
import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Profile: undefined;
  Favorite: {item: any};
  Post: {from: string};
  Print: undefined;
  Read: undefined;
  Write: undefined;
  History: undefined;
  ReadWrite: undefined;
  HomeRoot: undefined;
  ModalStack: { screen: string; params: { from: any; }; };
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'HomeTab'>,
  StackNavigationProp<RootStackParamList>
>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  HomeTab: undefined;
  ProfileTab: undefined;
  ReadWriteTab: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  StackScreenProps<RootStackParamList>
>;
