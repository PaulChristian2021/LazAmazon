import { FunctionComponent } from "react";

interface CartItemsListProps {}

const CartItemsList: FunctionComponent<CartItemsListProps> = () => {
  const cartItems = [
    {
      id: 31,
      title: "Portable Speaker",
      image: "",
      description:
        "A high-quality portable speaker with Bluetooth connectivity.",
    },
    {
      id: 32,
      title: "Wireless Earbuds",
      image: "",
      description: "Comfortable, noise-canceling earbuds for all-day use.",
    },
    {
      id: 33,
      title: "Smartwatch",
      image: "",
      description:
        "A smartwatch with fitness tracking and customizable watch faces.",
    },
    {
      id: 34,
      title: "Electric Kettle",
      image: "",
      description: "Quick boiling electric kettle with auto-shutoff feature.",
    },
    {
      id: 35,
      title: "Cordless Vacuum Cleaner",
      image: "",
      description:
        "A lightweight, powerful cordless vacuum for quick cleaning.",
    },
    {
      id: 36,
      title: "Bluetooth Headphones",
      image: "",
      description:
        "Over-ear Bluetooth headphones with deep bass and clear sound.",
    },
    {
      id: 37,
      title: "Portable Power Bank",
      image: "",
      description: "A compact power bank for charging your devices on the go.",
    },
    {
      id: 38,
      title: "LED Desk Lamp",
      image: "",
      description:
        "Adjustable desk lamp with dimming options for reading and work.",
    },
    {
      id: 39,
      title: "Smart Light Bulb",
      image: "",
      description:
        "A Wi-Fi enabled light bulb that can be controlled via an app.",
    },
    {
      id: 40,
      title: "Travel Backpack",
      image: "",
      description:
        "Durable and spacious backpack perfect for travel or daily use.",
    },
    {
      id: 41,
      title: "Air Fryer",
      image: "",
      description: "A countertop air fryer for quick, healthy meals.",
    },
    {
      id: 42,
      title: "Waterproof Phone Case",
      image: "",
      description:
        "Protect your phone from water damage with this durable case.",
    },
    {
      id: 43,
      title: "Smart Thermostat",
      image: "",
      description:
        "A Wi-Fi-enabled thermostat that learns your preferences and saves energy.",
    },
    {
      id: 44,
      title: "Electric Toothbrush",
      image: "",
      description:
        "A rechargeable electric toothbrush for effective dental care.",
    },
    {
      id: 45,
      title: "Cookware Set",
      image: "",
      description: "A complete cookware set for all your cooking needs.",
    },
  ];

  return (
    <>
      {cartItems.map((item) => (
        <>
          <input
            type="checkbox"
            className="btn-check "
            id={String(item.id)}
            autoComplete="off"
          />
          <label
            className="btn btn-light my-1 mx-2 d-flex"
            htmlFor={String(item.id)}
          >
            <div className="container d-flex flex-column ">
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </div>
            <img
              src="../../../public/store.png"
              className="d-inline-block border"
              style={{ height: "60px", width: "60px" }}
              alt="..."
            />
          </label>
        </>
      ))}
    </>
  );
};

export default CartItemsList;
