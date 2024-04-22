import ProductList from "./components/product-list";
import Filters from "./components/filters";
import Header from "./components/header";
import { SplitScreen, SplitScreenLeft, SplitScreenRight } from "./components/layout/split-screen";
import { FiltersProvider } from "./context/filters-context";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <FiltersProvider>
        <SplitScreen leftWidth={1} rightWidth={3} className="gap-8 py-4">
          <SplitScreenLeft>
            <Filters />
          </SplitScreenLeft>
          <SplitScreenRight>
            <ProductList />
          </SplitScreenRight>
        </SplitScreen>
      </FiltersProvider>
    </div>
  );
}

export default App;
