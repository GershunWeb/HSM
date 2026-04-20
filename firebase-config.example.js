// Создайте проект в Firebase (https://console.firebase.google.com/)
// В разделе Realtime Database создайте базу и выберите режим тестирования (или настройте правила доступа).
// Скопируйте конфигурацию проекта и сохраните в файле firebase-config.js в корне сайта, пример ниже:

// Пример: создайте файл firebase-config.js со следующим содержимым и замените значения на ваши
window.FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// После добавления этого файла в корень сайта, скрипт на doctor.html автоматически инициализирует
// Firebase Realtime Database и переключит сигналинг WebRTC с localStorage на Realtime Database.

// ВНИМАНИЕ: для продакшена настройте безопасные правила Realtime Database вместо тестовых. До настройки
// правил можно использовать тестовые правила для быстрой проверки:
// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
