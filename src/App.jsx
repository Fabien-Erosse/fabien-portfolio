import TitleBar from "./components/TitleBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StatusBar from "./components/StatusBar";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <TitleBar />
      <main className="flex-1 min-w-0">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <StatusBar />
    </div>
  );
}
