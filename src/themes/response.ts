/*
 重写styleSheet.create函数 
 实现React-native响应式布局
*/

import {
  Dimensions,
  StyleSheet,
  StatusBar,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const { height: deviceHeight } = Dimensions.get('screen')

const statusHeight = StatusBar.currentHeight as number

const guidelineBaseWidth = 414
const guidelineBaseHeight = 896

const screenHeightIncludeNavBar = deviceHeight - statusHeight

const scale = (size: number) => (screenWidth / guidelineBaseWidth) * size

const cacheSize = {} as any

const maserateScale = (size: number, factor = 0.5) => {
  if (cacheSize[`${size}_${factor}`]) return cacheSize[`${size}_${factor}`]

  const newSize = size + (scale(size) - size) * factor
  cacheSize[`${size}_${factor}`] = newSize
  return newSize
}

type NamedStyles<T> = {
  [P in keyof T]:
    | ViewStyle
    | TextStyle
    | ImageStyle
    | { skipResponsive?: boolean }
}

export const XStyleSheet = {
  ...StyleSheet,
  create: <T extends NamedStyles<T> | NamedStyles<any>>(
    styles: T | NamedStyles<T>,
    skipResponsive: boolean,
  ) => {
    return StyleSheet.create(
      objectMap(styles, (value: any) => {
        if (skipResponsive || value.skipResponsive) return value
        return {}
      }),
    )
  },
}

const objectMap = (object: Record<string, unknown>, mapFn: Function) =>
  Object.keys(object).reduce((result: any, currentKey) => {
    result[currentKey] = mapFn(object[currentKey])

    return result
  }, {})

const checkForResponsive = (object: any) => {
  const heightProperties = [
    'height',
    'paddingTop',
    'paddingBottom',
    'marginTop',
    'marginBottom',
    'paddingVertical',
    'marginVertical',
    'top',
    'bottom',
    'minHeight',
    'maxHeight',
    'borderTopWidth',
    'borderBottomWidth',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ]
  const widthProperties = [
    'width',
    'paddingLeft',
    'paddingRight',
    'marginLeft',
    'marginRight',
    'paddingHorizontal',
    'marginHorizontal',
    'left',
    'right',
    'minWidth',
    'maxWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
  ]
  const fontProperties = ['fontSize', 'lineHeight']

  const newResult = Object.keys(object).reduce((result: any, currentKey) => {
    if (typeof object[currentKey] === 'number') {
      if (
        currentKey.includes('flex') ||
        currentKey.includes('opacity') ||
        currentKey.includes('elevation') ||
        currentKey.includes('shdowOpacity')
      ) {
      }
    } else {
      result[currentKey] = object[currentKey]
    }
    return result
  }, {})
}
