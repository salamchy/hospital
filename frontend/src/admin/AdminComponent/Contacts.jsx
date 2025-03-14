
import { useGetMessagesQuery } from "../../features/api/contactApi";

const Contacts = () => {
  // Fetch messages
  const { data: messages, error, isLoading } = useGetMessagesQuery();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">User Messages</h2>

      {/* Loading State */}
      {isLoading && <p className="text-gray-500">Loading messages...</p>}

      {/* Error Handling */}
      {error && <p className="text-red-500">Failed to fetch messages.</p>}

      {/* Messages List */}
      {messages && messages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((message) => (
            <div key={message._id} className="p-4 border rounded-lg shadow-lg bg-white">
              <h3 className="text-lg font-semibold text-gray-700">{message.name}</h3>
              <p className="text-sm text-gray-500">{message.email}</p>
              <p className="mt-2 font-medium text-gray-800">Subject: {message.subject}</p>
              <p className="mt-2 text-gray-600">{message.message}</p>
              <p className="mt-2 text-xs text-gray-400">
                {new Date(message.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        !isLoading && <p className="text-gray-500">No messages found.</p>
      )}
    </div>
  );
};

export default Contacts;
