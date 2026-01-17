import { useState } from "react";

function QuantityCounter() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <button onClick={decreaseQuantity} disabled={quantity === 1}>
        -
      </button>

      <span style={{ margin: "0 15px", fontSize: "18px" }}>
        {quantity}
      </span>

      <button onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
}

export default QuantityCounter;
