import { useState } from 'react';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

function App() {
  const [status, setStatus] = useState('');
  const [token, setToken] = useState('');

  const firebaseApp = initializeApp({
    apiKey: 'AIzaSyBpDPFDrHhWedhoGaFZi1fHGfGsUoUi73U',
    authDomain: 'nekura-send-event.firebaseapp.com',
    projectId: 'nekura-send-event',
    storageBucket: 'nekura-send-event.appspot.com',
    messagingSenderId: '105611480239',
    appId: '1:105611480239:web:26a94f142564ddc64a985a',
    measurementId: 'G-WRS5S398N0',
  });
  const messaging = getMessaging(firebaseApp);
  const getFCMToken = () => {
    getToken(messaging).then((currentToken) => {
      if (currentToken) {
        setStatus('許可');
        setToken(currentToken);
      } else {
        setStatus('未登録');
      }
    });
  };

  return (
    <>
      <div>{status}</div>
      <br />
      <div>{token}</div>
      <br />
      <button type="button" onClick={getFCMToken}>
        トークン取得
      </button>
    </>
  );
}

export default App;
