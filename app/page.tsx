import Navbar from "./components/display/Navbar";
import { Hero } from "./components/display/Hero";

export default function HomePage() {
  return (
    <main className="relative h-screen bg-slate-950">
      {/* Navbar */}
      <Navbar />

      {/* Offset for fixed navbar */}
      <div className="pt-20 h-full">
        <Hero />
      </div>
    </main>
  );
}
