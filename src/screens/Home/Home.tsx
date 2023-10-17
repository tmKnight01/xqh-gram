import { View, Text, StyleSheet } from 'react-native'
import { Layout, Colors, FontSizes } from '@/themes'
import useAppTheme from '@/hooks/useAppTheme'
import Container from '@/components/Container'

function Home() {
  const { Colors, NavigationTheme } = useAppTheme()

  return (
    <Container
      style={{ ...Layout.rowCenter, backgroundColor: Colors.background }}
    >
      <Text style={[{ color: Colors.primaryLight, fontSize: FontSizes.h1 }]}>
        Welcome!
      </Text>
    </Container>
  )
}

export default Home
