import { useColorScheme } from 'react-native'
import { getAppTheme } from '../themes/theme'

export default function () {
  const theme = useColorScheme()

  const isDrak = theme === 'dark'
  return mergeTheme(isDrak, getAppTheme())
}

const mergeTheme = (isDrak: boolean, theme: ReturnType<typeof getAppTheme>) => {
  type ColorsKey =
    | keyof typeof theme.default.Colors
    | keyof typeof theme.dark.Colors

  const primaryTheme = isDrak ? theme.dark : theme.default
  const secondaryTheme = isDrak ? theme.default : theme.dark

  const mergedColor: { [key in ColorsKey]: string } = {
    ...primaryTheme.Colors,
    ...secondaryTheme.Colors,
  } as any

  // 返回 主题颜色，以及所以颜色在业务代码中使用....
  return {
    ...primaryTheme,
    Colors: mergedColor,
    isDrak,
  }
}
