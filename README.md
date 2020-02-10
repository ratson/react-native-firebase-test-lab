# react-native-firebase-test-lab

Check if the app is running on Firebase test device.

## Installation

`npm install react-native-firebase-test-lab --save`

or

`yarn add react-native-firebase-test-lab`


Auto-Linking is supported on react-native v0.60.0 and above.

### For react-native 0.59.x or below

`react-native link react-native-firebase-test-lab`

## Usage

<!-- eslint-disable strict -->

```js
import { isTestDevice } from 'react-native-firebase-test-lab';

if (await isTestDevice()) {
  console.log("Running on test device")
}
```
