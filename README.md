# CS 402 Final Project - Team 6

## Contributors

- [Elijah Meldrim](EliMeldrim)
- [Gunnar Vittrup](gvittrup)
- [Patrick Santana](PatrickSantanaDev)
- [Onur Keles](OnurKeles4)

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [expo-cli](https://docs.expo.dev/more/expo-cli/)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- ["@expo/vector-icons": "^13.0.0"],
- ["@expo/webpack-config": "^19.0.0"],
- ["@react-navigation/bottom-tabs": "^6.5.11"],
- ["@react-navigation/stack": "^6.3.20"],
- ["expo": "^49.0.21"],
- ["expo-linear-gradient": "~12.1.2"],
- ["expo-status-bar": "~1.6.0"],
- ["react": "18.2.0"],
- ["react-dom": "18.2.0"],
- ["react-native": "0.72.6"],
- ["react-native-paper": "4.9.2"],
- ["react-native-snap-carousel": "^3.9.1"],
- ["react-native-web": "~0.19.6"],
- ["react-navigation-stack": "^2.10.4"]

### Using scripts from console

The template already has scripts to execute the project calling a specific environment defined into the package.json file. Keep in mind that if you are going to create new `envs` you have to define the script to build the project properly.

To define which env you want to use, just keep the structure `yarn [platform]: [environment]`

DEV: `npx expo start`

ANDROID: `npx expo start -a`

iOS: `npx expo start -i`

#### Android

A map associating builds with env files is already defined in `app/build.gradle` you can modify or add environments if needed.

For multiple enviroments to work you would need to change `-keep class [YOUR_PACKAGE_NAME].BuildConfig { *; }` on `proguard-rules.pro` file.

#### iOS

The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

To create a new scheme:

- In the Xcode menu, go to Product > Scheme > Edit Scheme
- Click Duplicate Scheme on the bottom
- Give it a proper name on the top left. For instance: "qa"
- Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

  Expand the "Build" tab on the left menu

  - Click "Pre-actions", and under the plus sign select "New Run Script Action"
  - Where it says "Type a script or drag a script file", type: `echo ".env.qa" > /tmp/envfile` replacing `.env.qa` with your file.

- Also, you will need to select the executable for the new schema:

  Expand the "Run" tab on the left menu

  - Under the "Executable" dropdown select the ".app" you would like to use for that schema

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

# How to use it

Users are inteded to use the app as a social media platform for recommending, finding, and choosing movies. Users can add friends and see suggestions provided by them, find new movies based on genre, or recommend movies to their friends. Users can also rate movies and add them to a list of movies they liked.
