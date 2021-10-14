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


## Shared code with RNWeb
<img width="600" alt="Screenshot 2021-10-14 at 10 26 44" src="https://user-images.githubusercontent.com/25979923/137280253-6ca6dfcd-cc28-4292-97e5-1bf48b193f66.png">

## Shared code with UIKit
<img width="600" alt="Screenshot 2021-10-14 at 10 26 52" src="https://user-images.githubusercontent.com/25979923/137280263-1a86efd6-4387-4c34-8133-8058eb001f1d.png">

## Isolated fronts with shared core
<img width="600" alt="Screenshot 2021-10-14 at 10 27 01" src="https://user-images.githubusercontent.com/25979923/137280266-adc7acbf-31c6-4986-8055-65d32b5ec0d8.png">
