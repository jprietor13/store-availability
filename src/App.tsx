import { Header } from "./components/Header";
import { ListStores } from "./components/ListStores";
import { SearchAddress } from "./components/SearchAddress";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="layout">
      <Header />
      <ListStores />
      <SearchAddress />
      <Footer />
    </div>
  );
}

export default App;
