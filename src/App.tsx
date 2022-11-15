import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Characters from "./components/Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="container">
          <h1>Rick and Morty Hall of Fame</h1>
          <Characters></Characters>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
