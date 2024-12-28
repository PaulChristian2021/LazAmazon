import { FunctionComponent, SetStateAction } from "react";

interface CartItemsListProps {
  cartItems: {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
    selectedVariation: string;
    variations: string[];
    count: number;
  }[];
  setCartItems: any;
  handleCartItemSelection: (cartItem: number) => void;
}

const CartItemsList: FunctionComponent<CartItemsListProps> = (props) => {
  const cartItems = props.cartItems;

  const batchUpdateCount = (updates: [{ id: number; count: number }]) => {
    props.setCartItems((prevItems: [{ id: number; count: number }]) =>
      prevItems.map((item) => {
        const update = updates.find((update) => update.id === item.id);
        return update ? { ...item, count: update.count } : item;
      })
    );
  };

  const itemCountChange = (isIncrease: boolean, id: number) => {
    let allCartItems = props.cartItems;
    const item = allCartItems.filter((item) => item.id === id);
    if (isIncrease) {
      console.log("itemCountChange item", item);
      batchUpdateCount([{ id: item[0].id, count: item[0].count + 1 }]);
    } else {
      console.log("itemCountChange item", item);
      if (item[0].count < 2) return;
      batchUpdateCount([{ id: item[0].id, count: item[0].count - 1 }]);
    }
  };

  return (
    <>
      {cartItems.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            className="btn-check "
            id={String(item.id)}
            autoComplete="off"
            onChange={() => props.handleCartItemSelection(item.id)}
          />
          <label
            className="btn btn-light my-1 mx-2 d-flex text-start"
            htmlFor={String(item.id)}
          >
            <div className="container d-flex flex-column ">
              <strong>
                {item.title}{" "}
                <span style={{ color: "#f2b1da" }} className="">
                  ₱{item.price}
                </span>
              </strong>
              <span>{item.description.slice(0, 35)}...</span>
              <div className="mt-1 d-flex">
                <button
                  style={{ height: "35px", fontSize: "30px" }}
                  className="btn bg-dark-subtle d-flex align-items-end"
                  onClick={() => itemCountChange(false, item.id)}
                >
                  _
                </button>
                <input
                  type="text"
                  name="cart-item-pieces"
                  id="cart-item-pieces"
                  min={1}
                  placeholder="1"
                  style={{ width: "60px" }}
                  className="border-none"
                  value={item.count}
                  onChange={(e) =>
                    batchUpdateCount([
                      { id: item.id, count: Number(e.target.value) },
                    ])
                  }
                />
                <button
                  style={{ height: "35px", fontSize: "30px" }}
                  className="btn bg-dark-subtle d-flex align-items-center"
                  onClick={() => itemCountChange(true, item.id)}
                >
                  +
                </button>
              </div>
            </div>
            <img
              //   src="../../../store.png"
              src={item.image}
              onError={(e) => {
                // @ts-ignore
                e.target.src = "/store.png";
              }}
              className="d-inline-block border"
              style={{ height: "60px", width: "60px" }}
              alt="..."
            />
          </label>
        </div>
      ))}
    </>
  );
};

export default CartItemsList;
