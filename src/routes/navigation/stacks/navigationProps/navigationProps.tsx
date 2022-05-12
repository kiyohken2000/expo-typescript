import { colors } from "../../../../theme"
import type { StackNavigationOptions } from '@react-navigation/stack';

const headerTintColor = 'white'
const fontSize = 18
const headerMode = 'float'

const navigationProps: StackNavigationOptions = {
  headerTintColor: headerTintColor,
  headerStyle: { 
    backgroundColor: colors.darkPurple
  },
  headerTitleStyle: { fontSize: fontSize },
  headerMode: headerMode
}

export { navigationProps }