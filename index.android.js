import { NativeModules } from 'react-native'

const { RNFirebaseTestLab } = NativeModules

export const isTestDevice = () => RNFirebaseTestLab.isTestDevice()

export default RNFirebaseTestLab
