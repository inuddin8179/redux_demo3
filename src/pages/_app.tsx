import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { makeStore } from '../lib/store/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { useRef } from 'react';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  const storeRef = useRef(makeStore());
  const persistor = persistStore(storeRef.current);

  return (
    <Provider store={storeRef.current}>
        <PersistGate persistor={persistor}>
                  <Component {...pageProps} />
            </PersistGate>
    
    </Provider>
  );
}

export default MyApp;
