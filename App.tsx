import React from 'react';


import Application from '@/navigators/Application';
import {SafeAreaProvider} from 'react-native-safe-area-context';


function App() {
  
  return (
    <>
     
      <SafeAreaProvider>
         <Application/>
      </SafeAreaProvider>
    </>
  );
}



export default App;
