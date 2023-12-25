// MessageCounter.js
import { useContext } from 'react';
import { MessageContext } from './MessageContext';

function MessageCounter() {
  const { messages } = useContext(MessageContext);

  return (
    <div className="p-4">
      <p>Jumlah Pesan yang Telah Dikirim: {messages.length}</p>
    </div>
  );
}

export default MessageCounter;
