# 🏋️ ARC Gym Partner Finder

The **ARC Gym Partner Finder** is a **React Native mobile application** designed to help **SDSU students** find compatible **gym buddies** at the **Aztec Recreation Center (ARC)**. The app offers a **matching system**, **in-app chat**, **Google Calendar integration**, and **accountability streak tracking** to enhance the **fitness experience on campus**.

---

## 🚀 **Features**

- 🔍 **Find Gym Buddies:** Match with students based on:
  - **Workout Preferences:** Weights, Cardio, HIIT, etc.
  - **Fitness Level:** Beginner, Intermediate, Advanced
  - **Availability:** Sync with **Google Calendar**
  
- 💬 **In-App Chat:** Coordinate workout sessions with real-time messaging.

- 📅 **Google Calendar Integration:** Schedule workouts and **sync availability**.

- 🔥 **Accountability Streaks:** Track gym attendance and maintain fitness goals.

- 📲 **Cross-Platform Support:** Works on **iOS** and **Android** using **React Native**.

---

## 🛠️ **Tech Stack**

### **Frontend:**
- **React Native**: Cross-platform mobile development
- **Expo CLI**: Simplified development and testing

### **Backend:**
- **Firebase Authentication**: SDSU email verification
- **Firebase Firestore**: Real-time database
- **Firebase Cloud Messaging (FCM)**: Push notifications
- **Google Calendar API**: Availability syncing

### **Additional Tools:**
- **React Navigation**: For smooth screen transitions
- **React Native Gesture Handler**: Enhanced touch interactions
- **Google APIs**: For calendar and scheduling integrations

---

## 📂 **Project Structure**

```plaintext
arc-gym-partner/
├─ src/
│   ├─ assets/             # Images, icons, and fonts
│   ├─ components/         # Reusable UI components
│   ├─ context/            # Auth and state management
│   ├─ navigation/         # React Navigation setup
│   ├─ screens/            # App screens (Login, Profile, Chat, Calendar)
│   ├─ services/           # Firebase and API integrations
│   ├─ utils/              # Helper functions
│   └─ App.js              # App entry point
├─ .gitignore
├─ app.json
├─ package.json
└─ README.md
