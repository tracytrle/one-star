import "./App.css";
import ThemeProvider from "./components/ThemeProvider";
import Homepage from "./pages/HomePage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();
  return (
    // <ErrorBoundary>
    //   <QueryClientProvider client={queryClient}>
    //     <Router>
    //       <ThemeProvider>
    //         <Routes>
    //           <Route path="/" element={<Homepage />} />
    //         </Routes>
    //       </ThemeProvider>
    //     </Router>
    //   </QueryClientProvider>
    // </ErrorBoundary>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Homepage />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
