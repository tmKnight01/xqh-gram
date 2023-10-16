import { View, Text, StyleSheet } from 'react-native'
import { Layout, Colors, FontSizes } from '../../themes'
import useAppTheme from '../../hooks/useAppTheme'


function Home() {
   const  {Colors}  = useAppTheme()

  return (
    <View style={[{ ...Layout.rowCenter,...Layout.fill }]}>
      <Text style={[{ color: Colors.typography, fontSize: FontSizes.h1 }]}>
        Welcome!
      </Text>
    </View>
  )
}

export default Home
