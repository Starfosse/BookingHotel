import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import {
  QueryClient,
  QueryClientProvider,
} from "react-query"
import { AppContextProdiver } from "./contexts/AppContext.tsx"

const queryCLient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLient}>
      <AppContextProdiver>
        <App />
      </AppContextProdiver>
    </QueryClientProvider>
  </React.StrictMode>
)
