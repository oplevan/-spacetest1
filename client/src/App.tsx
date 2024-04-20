import ItemList from "./components/item-list";

function App() {
  return (
    <div className="w-full min-h-screen">
      <div className="container">
        <h1 className="uppercase text-xl my-10 text-center">Technical Test for Space</h1>
        <ItemList />
      </div>
    </div>
  );
}

export default App;
