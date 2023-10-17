/*
封装增强型View  默认沉浸式，支持跟随主题动态变化 

*/
import { useMemo } from 'react'
import {
  View,
  StatusBar,
  ViewStyle,
  StyleSheet,
  StatusBarProps,
} from 'react-native'
import { SafeAreaView, Edge } from 'react-native-safe-area-context'
import Animated, { FadeIn } from 'react-native-reanimated'
import { Layout } from '@/themes'
import useAppTheme from '@/hooks/useAppTheme'

interface ContainerProps {
  children: React.ReactNode
  style?: ViewStyle
  disableTop?: boolean // 顶部是否处理异型屏幕
  disableBottom?: boolean
  statusBatProps?: StatusBarProps
  useFading?: boolean // 进入进出是否淡入淡出
  contianerStyle?: ViewStyle
  safeAreaStyle?: ViewStyle
  safeAreaColor?: string
}

const Container = ({
  children,
  style,
  disableTop = false,
  disableBottom = true,
  statusBatProps,
  useFading = false,
  contianerStyle,
  safeAreaStyle,
  safeAreaColor,
}: ContainerProps) => {
  const { Colors, isDrak } = useAppTheme()
  const safeEdges = useMemo<ReadonlyArray<Edge>>(() => {
    if (!disableTop && !disableBottom) {
      return ['top', 'bottom', 'left', 'right']
    } else if (!disableTop) {
      return ['top', 'left', 'right']
    } else if (!disableBottom) {
      return ['bottom']
    } else {
      return ['left', 'right']
    }
  }, [disableTop, disableBottom])
  return (
    <SafeAreaView
      edges={safeEdges}
      style={[
        Layout.fill,
        safeAreaStyle,
        {
          backgroundColor:
            safeAreaColor ||
            style?.backgroundColor ||
            contianerStyle?.backgroundColor,
        },
      ]}
    >
      <Animated.View
        entering={useFading ? FadeIn : undefined}
        style={[Layout.fill, { backgroundColor: Colors.background }]}
      >
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
          {...statusBatProps}
        />
        <View
          style={[Layout.fill, { backgroundColor: Colors.background }, style]}
        >
          {children}
        </View>
      </Animated.View>
    </SafeAreaView>
  )
}

const st = StyleSheet.create({})

export default Container
