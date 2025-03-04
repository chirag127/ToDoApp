# ToDo App

A simple and intuitive mobile ToDo application built with React Native. download from https://ln5.sync.com/dl/62fd5f220#hbim8ptz-7uw4h9ej-c8ysfz73-3qui7ezs

## Features

-   Add new tasks
-   Delete tasks with confirmation
-   Persistent storage using AsyncStorage
-   Clean and responsive UI
-   Input validation

## Setup

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the application:

```bash
npx react-native run-android
# or
npx react-native run-ios
```

## Dependencies

-   React Native
-   @react-native-async-storage/async-storage

## Contributing

Feel free to submit issues and enhancement requests.

## License

MIT License

To build an APK of your **Expo** app, follow these steps:

---

### **🔹 Step 1: Install Expo CLI (if not installed)**

If you haven't already, install **Expo CLI**:

```sh
npm install -g expo-cli
```

---

### **🔹 Step 2: Set Up EAS (Expo Application Services)**

Expo no longer supports **`expo build:android`**, so you need to use **EAS Build**.

1️⃣ **Login to Expo**

```sh
expo login
```

(If you don’t have an Expo account, create one at [https://expo.dev/](https://expo.dev/))

2️⃣ **Initialize EAS**
Run the following command inside your project folder:

```sh
npx expo install eas-cli
eas build:configure
```

This will generate an `eas.json` file.

---

### **🔹 Step 3: Build APK**

Run:

```sh
eas build --profile preview --platform android
```

👉 This will build an APK (not an AAB) that you can directly install on your phone.

🚀 **After the build is complete, Expo will give you a download link!**

---

### **🔹 Step 4: Install APK on Your Device**

Once the build is finished, download the APK and install it on your Android phone.

---

### **Alternative: Build Locally (Without EAS Cloud)**

If you want to generate an APK locally, you’ll need to eject from Expo and build manually:

```sh
expo prebuild
```

Then open the project in **Android Studio** and build an APK from there.

---

### **Want to Publish to Play Store?**

If you need an **AAB file** for the Play Store, run:

```sh
eas build --profile production --platform android
```

Then, upload the `.aab` file to the Google Play Console.

---

Do you want help with **Play Store deployment** or custom branding (app icon, splash screen)? 🚀
