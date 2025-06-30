import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import PoetryGenerator from "@/pages/poetry-generator";
import CraftsGenerator from "@/pages/crafts-generator";
import MusicGenerator from "@/pages/music-generator";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/poetry" component={PoetryGenerator} />
      <Route path="/crafts" component={CraftsGenerator} />
      <Route path="/music" component={MusicGenerator} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gray-50">
          <header className="header-purple text-white py-6 px-4">
            <div className="max-w-6xl mx-auto flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-teal-500 to-yellow-500 rounded-full flex items-center justify-center transform rotate-12">
                  <div className="w-10 h-10 bg-white rounded-full opacity-90"></div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Get rid of your artists block!</h1>
              </div>
            </div>
          </header>
          <Router />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
