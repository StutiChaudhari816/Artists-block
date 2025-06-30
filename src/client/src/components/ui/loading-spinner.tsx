export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 text-center">
        <div className="animate-spin w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-lg font-semibold text-gray-800">Generating creative inspiration...</p>
      </div>
    </div>
  );
}
