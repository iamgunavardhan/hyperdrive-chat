import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

interface ChatWindowProps {
  messages: { text: string; sender: 'user' | 'bot' }[];
  isTyping: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isTyping }) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col p-4 h-[70vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} message={msg.text} isUser={msg.sender === 'user'} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={endRef} />
    </div>
  );
};

export default ChatWindow;