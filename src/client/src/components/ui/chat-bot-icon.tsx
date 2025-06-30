interface ChatBotIconProps {
  bgColor: string;
}

export function ChatBotIcon({ bgColor }: ChatBotIconProps) {
  return (
    <div className="w-20 h-20 poetry-bg border-4 border-gray-800 rounded-lg mx-auto flex items-center justify-center mb-6 relative text-[#0c0a09] bg-[#bef3e7]">
      <div className="flex items-center">
        <div className="w-3 h-3 bg-gray-800 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
      </div>
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-6 h-4 border-4 border-t-0 border-gray-800 rounded-b-lg"></div>
    </div>
  );
}
