import { useState, useContext } from 'react';
import { MessageContext } from './MessageContext';

function ContactPage() {
  const [message, setMessage] = useState('');
  const { addMessage } = useContext(MessageContext); // Menghapus 'messages'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      addMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Kontak Kami</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 rounded border"
          placeholder="Tulis pesan Anda..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
