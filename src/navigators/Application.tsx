import { PageName } from '../config/PageName'
import useAppTheme from '../hooks/useAppTheme'
import { Home } from '../screens'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Application = () => {
  const { NavigationTheme } = useAppTheme()
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator>
        <Stack.Screen name={PageName.HomeTab} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Application
