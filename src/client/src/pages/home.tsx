import { Link } from "wouter";
import { ChatBotIcon } from "@/components/ui/chat-bot-icon";
import { Feather, Palette, Music } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Choose your creative journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Break through creative barriers with AI-powered inspiration. Whether you're crafting poetry, creating art, or composing music, we'll help spark your creativity.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Poetry Card */}
        <div className="poetry-bg rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow bg-[#f9cdf6]">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 poetry-primary px-6 py-3 rounded-lg font-semibold text-lg text-[#000000] bg-[#f495ed]">
              Poetry <Feather className="w-5 h-5" />
            </div>
          </div>
          
          <div className="mb-8">
            <ChatBotIcon bgColor="poetry-bg" />
          </div>

          <Link href="/poetry">
            <button className="w-full bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Chat now
            </button>
          </Link>
        </div>

        {/* Crafts Card */}
        <div className="crafts-bg rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 crafts-primary px-6 py-3 rounded-lg font-semibold text-lg text-[#000000]">
              Crafts <Palette className="w-5 h-5" />
            </div>
          </div>
          
          <div className="mb-8">
            <ChatBotIcon bgColor="crafts-bg" />
          </div>

          <Link href="/crafts">
            <button className="w-full bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Chat now
            </button>
          </Link>
        </div>

        {/* Music Card */}
        <div className="music-bg rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow bg-[#fdf9b4]">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 music-primary px-6 py-3 rounded-lg font-semibold text-lg text-[#000000] bg-[#fcc86f]">
              Music <Music className="w-5 h-5" />
            </div>
          </div>
          
          <div className="mb-8 bg-[#fdf9b4]">
            <ChatBotIcon bgColor="music-bg" />
          </div>

          <Link href="/music">
            <button className="w-full bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Chat now
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
