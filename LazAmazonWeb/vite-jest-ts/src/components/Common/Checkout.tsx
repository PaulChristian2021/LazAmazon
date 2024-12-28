import { FunctionComponent, useEffect } from "react";

interface CheckoutProps {
  checkoutSum: number;
  selectedItemsNumber: number;
}

const Checkout: FunctionComponent<CheckoutProps> = (props) => {
  useEffect(() => {
    // TODO: Remove these style to stop forcing it to be mobile-like
    // @ts-ignore
    document.getElementById("cart-checkout").style.maxWidth = "418px";
  }, []);

  return (
    <>
      <div
        id="cart-checkout"
        className="container fixed-bottom w-75 p-2 rounded d-flex text-white bg-secondary"
        style={{ marginBottom: "85px" }}
      >
        <div className="container">
          <span className="d-block ">
            Total:{" "}
            <span style={{ color: "#f2b1da" }} className=" fs-5">
              ₱ {props.checkoutSum.toLocaleString()}
            </span>
          </span>
          <span className="d-block">
            {props.selectedItemsNumber} item
            {props.selectedItemsNumber === 1 ? "" : "s"}
          </span>
        </div>
        <button className="btn bg-danger-subtle">Checkout</button>
      </div>
    </>
  );
};

export default Checkout;
