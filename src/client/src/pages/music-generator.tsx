import { useState } from "react";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useToast } from "@/hooks/use-toast";
import { Music } from "lucide-react";

export default function MusicGenerator() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const { toast } = useToast();

  const generateMusic = useMutation({
    mutationFn: async (prompt: string) => {
      const res = await apiRequest("POST", "/api/generate/music", { prompt });
      return res.json();
    },
    onSuccess: (data) => {
      setResponse(data.response);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to generate musical composition. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter a feeling or prompt for your musical composition.",
        variant: "destructive",
      });
      return;
    }
    generateMusic.mutate(prompt.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <>
      {generateMusic.isPending && <LoadingSpinner />}
      
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 music-primary text-white px-8 py-4 rounded-lg font-semibold text-xl mb-6">
            Music generator <Music className="w-6 h-6" />
          </div>
        </div>

        <div className="music-bg rounded-2xl p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="music-input" className="block text-gray-800 font-medium mb-3 text-lg">
                Enter a few words or a feeling...
              </label>
              <input
                type="text"
                id="music-input"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="melancholy, upbeat, peaceful, energetic, nostalgic..."
                className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg bg-white focus:outline-none focus:border-yellow-600 text-lg"
                disabled={generateMusic.isPending}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                disabled={generateMusic.isPending}
                className="music-primary text-white px-8 py-3 rounded-lg font-semibold hover:music-accent transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Generate composition
              </button>
            </div>
          </form>

          <div>
            <h3 className="text-gray-800 font-medium mb-3 text-lg">Response</h3>
            <div className="w-full min-h-[200px] px-4 py-3 border-2 border-gray-800 rounded-lg bg-white text-lg whitespace-pre-wrap">
              {response || (generateMusic.isPending ? "Generating your musical composition..." : "")}
            </div>
          </div>
        </div>

        <div className="text-right mt-6">
          <Link href="/">
            <button className="music-accent text-white px-6 py-2 rounded-lg font-medium hover:music-primary transition-colors">
              Go back a page
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
