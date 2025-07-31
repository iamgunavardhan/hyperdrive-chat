import React from 'react';

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isUser }) => {
  return (
    <div
      className={`max-w-xs px-4 py-2 rounded-lg mb-2 whitespace-pre-wrap break-words ${
        isUser
          ? 'self-end bg-blue-500 text-white'
          : 'self-start bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
      }`}
    >
      {message}
    </div>
  );
};

export default MessageBubble;
