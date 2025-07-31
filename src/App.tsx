import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import { sendMessageApi } from './utils/mockApi';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (msg: string) => {
    setMessages(prev => [...prev, { text: msg, sender: 'user' }]);
    setIsTyping(true);

    const reply = await sendMessageApi(msg);
    setMessages(prev => [...prev, { text: reply, sender: 'bot' }]);
    setIsTyping(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center my-6">🤖 Hyperdrive Chat</h1>
        <ChatWindow messages={messages} isTyping={isTyping} />
        <MessageInput onSend={handleSend} disabled={isTyping} />
      </div>
    </div>
  );
};

export default App;