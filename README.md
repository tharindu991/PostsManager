# PostsManagerApp

### Setup

```
yarn install
cd ios
pod install
cd..
yarn android
yarn ios
```

### Unit Tests using Jest

```
yarn test
```

### End to end tests using Detox + Jest (tested only in Android)

Steps :

1. Go to package.json file, Replace "Pixel_3_XL_API_27" with your emulator name.

2. Install the detox command line tool globally in your machine

```
npm install -g detox-cli
```

3. Build a debug apk using

```
detox build -c android.emu.debug
```

4. Run e2e testing on android

```
detox test -c android.emu.debug
```
