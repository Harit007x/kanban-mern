import { useState } from "react";
import "./App.css";
import { useTheme } from "./components/theme-provider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SideNav from "./components/side-nav";
function App() {
  const { setTheme } = useTheme();

  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<SideNav />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
      {/* <p className="text-green-400">
        Click on the Vite and React logos to learn more
      </p>
      <Button onClick={() => setTheme("light")} size={"icon"} variant="ghost">
        <Sun className="h-4 w-4" />
      </Button>
      <Button onClick={() => setTheme("dark")} size={"icon"} variant="ghost">
        <Moon className="h-4 w-4" />
      </Button> */}
    </Router>
  );
}

export default App;
