import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./components/theme-provider";

function App() {
  const { setTheme } = useTheme();

  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-green-400">
        Click on the Vite and React logos to learn more
      </p>
      <Button onClick={() => setTheme("light")} size={"icon"} variant="ghost">
        <Sun className="h-4 w-4" />
      </Button>
      <Button onClick={() => setTheme("dark")} size={"icon"} variant="ghost">
        <Moon className="h-4 w-4" />
      </Button>
    </>
  );
}

export default App;
