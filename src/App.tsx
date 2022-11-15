import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Characters from "./components/Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Characters></Characters>
      </div>
    </QueryClientProvider>
  );
}

export default App;
