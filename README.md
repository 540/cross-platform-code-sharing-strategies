# Cross platform code sharing strategies

## Requirements

- node (>= 12)
- yarn
- watchman
- iOS
    - Xcode
- Android
    - Java Development Kit (>= 8)
    - Android Studio (Android SDK, Android SDK Platform, Performance (Intel ® HAXM), Android Virtual Device)
    - Android SDK Platform

(https://reactnative.dev/docs/environment-setup)

## Run examples
For each project example:

- `yarn install`: installs dependencies
- `yarn web`: runs the app on localhost in development mode 
- `yarn mobile`: starts mobile bundler
- `yarn android`: installs & runs app on android
- `yarn ios`: installs & runs app on iOS
- `yarn test`: runs tests


## Shared logic and view

### [Shared code with RNWeb](https://github.com/540/cross-platform-code-sharing-strategies/tree/master/shared-code-with-uikit-bridge)
[React Native Web](https://necolas.github.io/react-native-web/) is a compatibility layer between React DOM and React Native. It allows you to build ios, android and web apps from React Native api and components.

<img width="550" alt="Screenshot 2022-03-07 at 08 14 05" src="https://user-images.githubusercontent.com/25979923/156986747-8d43b0d1-db25-4838-be09-52987fc714d9.png">

### [Shared code wiith UIKit bridge](https://github.com/540/cross-platform-code-sharing-strategies/tree/master/shared-code-with-uikit-bridge)
Another option is to define a custom UIkit that works as a bridge and create an implementation for each platform.


<img width="550" alt="Screenshot 2022-03-07 at 08 14 57" src="https://user-images.githubusercontent.com/25979923/156986829-d0a795b9-68e0-4f1e-b37b-83a6c79f2805.png">

## Shared logic, different view

### [Isolated fronts shared core](https://github.com/540/cross-platform-code-sharing-strategies/tree/master/isolated-fronts-shared-core)
In this example, we shared the core written in JS and each platform implements his own view.  

<img width="550" alt="Screenshot 2022-03-07 at 08 16 33" src="https://user-images.githubusercontent.com/25979923/156987051-afde38bd-fa06-49e3-9d62-12093551e008.png">
