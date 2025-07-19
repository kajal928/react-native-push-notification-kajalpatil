
# React Native Push Notification App

This is a basic React Native application that integrates Firebase Cloud Messaging (FCM) to enable push notifications.

## 🔧 Features
- Firebase Cloud Messaging (FCM) integration
- Push notifications in:
  - Foreground
  - Background
  - Killed state
- Java native module for Android

## 📱 Technologies Used
- React Native
- Firebase Cloud Messaging
- @react-native-firebase/messaging
- Android SDK

## 🚀 Getting Started

### 1. Firebase Setup
- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project
- Register Android app (provide package name)
- Download `google-services.json` and place it inside:  
  `android/app/google-services.json`

### 2. Install Dependencies
```bash
npm install
npx react-native run-android
```

### 3. Trigger Notifications
- Go to Firebase Console → Cloud Messaging → New Notification
- Test push notifications directly from Firebase

## 📷 Demo

> [Demo video link](https://drive.google.com/drive/folders/1g_wnlwahU6eygOaaewLWTwPPZFeFFo5C?usp=sharing)

## 📁 Folder Structure

```
/android
/app
  - google-services.json
App.js
```

## 🔗 GitHub Repository

> https://github.com/kajal928/react-native-push-notification-kajalpatil

## ✍️ Author

**Kajal Patil**

---

> 📌 For internship assignment submission
