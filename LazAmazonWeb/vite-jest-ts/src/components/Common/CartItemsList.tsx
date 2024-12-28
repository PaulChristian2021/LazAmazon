import { FunctionComponent } from "react";

interface CartItemsListProps {}

const CartItemsList: FunctionComponent<CartItemsListProps> = () => {
  const cartItems = [
    {
      id: 31,
      title: "Portable Speaker",
      image:
        "https://images.pexels.com/photos/4000437/pexels-photo-4000437.jpeg",
      description:
        "A high-quality portable speaker with Bluetooth connectivity.",
      price: 59.99,
      selectedVariation: "Option A",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 32,
      title: "Wireless Earbuds",
      image:
        "https://images.pexels.com/photos/5126471/pexels-photo-5126471.jpeg",
      description: "Comfortable, noise-canceling earbuds for all-day use.",
      price: 89.99,
      selectedVariation: "Option B",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 33,
      title: "Smartwatch",
      image:
        "https://images.pexels.com/photos/6134413/pexels-photo-6134413.jpeg",
      description:
        "A smartwatch with fitness tracking and customizable watch faces.",
      price: 129.99,
      selectedVariation: "Option C",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 34,
      title: "Electric Kettle",
      image:
        "https://images.pexels.com/photos/4049849/pexels-photo-4049849.jpeg",
      description: "Quick boiling electric kettle with auto-shutoff feature.",
      price: 34.99,
      selectedVariation: "Option A",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 35,
      title: "Cordless Vacuum Cleaner",
      image:
        "https://images.pexels.com/photos/4006431/pexels-photo-4006431.jpeg",
      description:
        "A lightweight, powerful cordless vacuum for quick cleaning.",
      price: 159.99,
      selectedVariation: "Option B",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 36,
      title: "Bluetooth Headphones",
      image:
        "https://images.pexels.com/photos/4261520/pexels-photo-4261520.jpeg",
      description:
        "Over-ear Bluetooth headphones with deep bass and clear sound.",
      price: 99.99,
      selectedVariation: "Option C",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 37,
      title: "Portable Power Bank",
      image:
        "https://images.pexels.com/photos/3769073/pexels-photo-3769073.jpeg",
      description: "A compact power bank for charging your devices on the go.",
      price: 29.99,
      selectedVariation: "Option A",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 38,
      title: "LED Desk Lamp",
      image:
        "https://images.pexels.com/photos/4624409/pexels-photo-4624409.jpeg",
      description:
        "Adjustable desk lamp with dimming options for reading and work.",
      price: 49.99,
      selectedVariation: "Option B",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 39,
      title: "Smart Light Bulb",
      image:
        "https://images.pexels.com/photos/3346066/pexels-photo-3346066.jpeg",
      description:
        "A Wi-Fi enabled light bulb that can be controlled via an app.",
      price: 19.99,
      selectedVariation: "Option C",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 40,
      title: "Travel Backpack",
      image:
        "https://images.pexels.com/photos/3551375/pexels-photo-3551375.jpeg",
      description:
        "Durable and spacious backpack perfect for travel or daily use.",
      price: 79.99,
      selectedVariation: "Option A",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 41,
      title: "Air Fryer",
      image:
        "https://images.pexels.com/photos/4061474/pexels-photo-4061474.jpeg",
      description: "A countertop air fryer for quick, healthy meals.",
      price: 129.99,
      selectedVariation: "Option B",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 42,
      title: "Waterproof Phone Case",
      image:
        "https://images.pexels.com/photos/5702358/pexels-photo-5702358.jpeg",
      description:
        "Protect your phone from water damage with this durable case.",
      price: 14.99,
      selectedVariation: "Option C",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 43,
      title: "Smart Thermostat",
      image:
        "https://images.pexels.com/photos/3992728/pexels-photo-3992728.jpeg",
      description:
        "A Wi-Fi-enabled thermostat that learns your preferences and saves energy.",
      price: 199.99,
      selectedVariation: "Option A",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 44,
      title: "Electric Toothbrush",
      image:
        "https://images.pexels.com/photos/5429917/pexels-photo-5429917.jpeg",
      description:
        "A rechargeable electric toothbrush for effective dental care.",
      price: 39.99,
      selectedVariation: "Option B",
      variations: ["Option A", "Option B", "Option C"],
    },
    {
      id: 45,
      title: "Cookware Set",
      image:
        "https://images.pexels.com/photos/3600583/pexels-photo-3600583.jpeg",
      description: "A complete cookware set for all your cooking needs.",
      price: 99.99,
      selectedVariation: "Option C",
      variations: ["Option A", "Option B", "Option C"],
    },
  ];

  return (
    <>
      {cartItems.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            className="btn-check "
            id={String(item.id)}
            autoComplete="off"
          />
          <label
            className="btn btn-light my-1 mx-2 d-flex text-start"
            htmlFor={String(item.id)}
          >
            <div className="container d-flex flex-column ">
              <strong>{item.title}</strong>
              <span>{item.description}</span>
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
