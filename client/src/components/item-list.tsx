import React, { useState, useEffect, useMemo } from "react";
import Item from "./item";
import axios from "axios";

interface ItemData {
  name: string;
  price: number;
}

const ItemList: React.FC = () => {
  const [items, setItems] = useState<ItemData[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/items");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = useMemo(() => {
    return showAll
      ? items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
      : items
          .slice()
          .sort((a, b) => a.price - b.price)
          .slice(0, 5)
          .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
  }, [items, showAll, filter]);

  return (
    <div>
      <input type="text" placeholder="Filter by name" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <button onClick={() => setShowAll(!showAll)}>{showAll ? "Show Cheapest 5" : "Show All"}</button>
      <div className="">
        {filteredItems.map((item, index) => (
          <Item key={index} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
