import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Axios
import axios from "axios";
import { Axios } from "./core/AxiosHelper.ts";
import { Chart, registerables } from "chart.js";
import { QueryClient, QueryClientProvider } from "react-query";

// App
import App from "./app/App.tsx";
import "./index.css";

Axios(axios);
Chart.register(...registerables);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      retry: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
