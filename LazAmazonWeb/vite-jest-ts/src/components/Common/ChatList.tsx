// this component is used in mobile and desktop UI.
// the element that displays the other user's name and last message

import { FunctionComponent } from "react";

interface ChatListProps {}

const ChatList: FunctionComponent<ChatListProps> = () => {
  const messages = [
    {
      id: 123,
      username: "Run Actibo ",
      lastMessage: "Huling mensahe ni Actibo...",
    },
    {
      id: 4,
      username: "Cycling World",
      lastMessage: "Big discounts this weekend!",
    },
    {
      id: 5,
      username: "Gear Up Store",
      lastMessage: "New arrivals in stock.",
    },
    {
      id: 6,
      username: "Fitness Central",
      lastMessage: "Join our free fitness class!",
    },
    {
      id: 7,
      username: "Healthy Eats",
      lastMessage: "Fresh produce delivered daily.",
    },
    {
      id: 8,
      username: "Bike Experts",
      lastMessage: "Schedule your bike repair today.",
    },
    {
      id: 9,
      username: "Trail Masters",
      lastMessage: "Explore new biking trails with us.",
    },
    {
      id: 10,
      username: "Ride Safe Co.",
      lastMessage: "Safety gear on sale now!",
    },
    {
      id: 11,
      username: "Urban Cycler",
      lastMessage: "City rides made better with us.",
    },
    {
      id: 12,
      username: "Outdoor Lovers",
      lastMessage: "Camping gear for your next adventure.",
    },
    {
      id: 13,
      username: "Pedal Pals",
      lastMessage: "Join our weekly cycling meetups.",
    },
  ];

  return (
    <>
      <ul className="list-group">
        {messages.map((msg) => (
          <li
            className={`list-group-item ${msg.id === 123 ? "bg-dark-subtle" : ""} d-flex`}
            aria-current="true"
            key={msg.id}
          >
            <img
              src="../../../public/store.png"
              className="rounded-circle d-inline-block border"
              style={{ height: "60px", width: "60px" }}
              alt="..."
            />
            <div className="container d-flex flex-column">
              <strong>{msg.username}</strong>
              <span>{msg.lastMessage}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ChatList;
