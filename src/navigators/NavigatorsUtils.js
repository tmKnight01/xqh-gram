import { PageName } from '../config/PageName'
import { createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export const navigate = (name, parpams) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, parpams)
  }
}
