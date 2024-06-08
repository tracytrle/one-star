import "./App.css";
import ThemeProvider from "./components/ThemeProvider";
import Homepage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
