import React from "react";

interface ItemProps {
  name: string;
  price: number;
}

const Item: React.FC<ItemProps> = ({ name, price }) => {
  return (
    <div>
      <div>{name}</div>
      <div>£{price}</div>
    </div>
  );
};

export default Item;
