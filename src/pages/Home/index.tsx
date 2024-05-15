export default function Home() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
        placeholder="Enter prompt"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}
