import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import { useState } from 'react'
import BottomSheet  from './bottom_scheet.js'
function App() {
  return (
    <div>
    <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
    />
     <BottomSheet />
  </div>
  )
}

export default App;
