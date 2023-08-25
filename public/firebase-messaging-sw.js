importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyBpDPFDrHhWedhoGaFZi1fHGfGsUoUi73U',
  authDomain: 'nekura-send-event.firebaseapp.com',
  projectId: 'nekura-send-event',
  storageBucket: 'nekura-send-event.appspot.com',
  messagingSenderId: '105611480239',
  appId: '1:105611480239:web:26a94f142564ddc64a985a',
  measurementId: 'G-WRS5S398N0',
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
});
