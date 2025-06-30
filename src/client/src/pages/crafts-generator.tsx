import { useState } from "react";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useToast } from "@/hooks/use-toast";
import { Palette } from "lucide-react";

export default function CraftsGenerator() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const { toast } = useToast();

  const generateCraft = useMutation({
    mutationFn: async (prompt: string) => {
      const res = await apiRequest("POST", "/api/generate/crafts", { prompt });
      return res.json();
    },
    onSuccess: (data) => {
      setResponse(data.response);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to generate craft ideas. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter the materials you have available.",
        variant: "destructive",
      });
      return;
    }
    generateCraft.mutate(prompt.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <>
      {generateCraft.isPending && <LoadingSpinner />}
      
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 crafts-primary text-white px-8 py-4 rounded-lg font-semibold text-xl mb-6">
            Art generator <Palette className="w-6 h-6" />
          </div>
        </div>

        <div className="crafts-bg rounded-2xl p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="crafts-input" className="block text-gray-800 font-medium mb-3 text-lg">
                Enter a few materials you have...
              </label>
              <input
                type="text"
                id="crafts-input"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="paper, scissors, glue, cardboard, paint..."
                className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg bg-white focus:outline-none focus:border-teal-600 text-lg"
                disabled={generateCraft.isPending}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                disabled={generateCraft.isPending}
                className="crafts-primary text-white px-8 py-3 rounded-lg font-semibold hover:crafts-accent transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Generate craft
              </button>
            </div>
          </form>

          <div>
            <h3 className="text-gray-800 font-medium mb-3 text-lg">Response</h3>
            <div className="w-full min-h-[200px] px-4 py-3 border-2 border-gray-800 rounded-lg bg-white text-lg whitespace-pre-wrap">
              {response || (generateCraft.isPending ? "Generating your craft ideas..." : "")}
            </div>
          </div>
        </div>

        <div className="text-right mt-6">
          <Link href="/">
            <button className="crafts-accent text-white px-6 py-2 rounded-lg font-medium hover:crafts-primary transition-colors">
              Go back a page
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
