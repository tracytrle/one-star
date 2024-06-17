import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./components/ThemeProvider";
// import ErrorBoundary from "./ErrorBoundary";

test("renders the App component", () => {
  const queryClient = new QueryClient();

  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          {/* <ErrorBoundary> */}
          <Homepage />
          {/* </ErrorBoundary> */}
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );

  const stackElement = screen.getByTestId("home-component");
  expect(stackElement).toBeInTheDocument();
});
