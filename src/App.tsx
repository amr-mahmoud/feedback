import Home from "./components/Home";
import { AppProvider } from "./providers";
function App() {


  return <AppProvider>
  <Home />
  </AppProvider>
}

export default App;
