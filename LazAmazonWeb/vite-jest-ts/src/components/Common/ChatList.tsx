// this component is used in mobile and desktop UI.
// the element that displays the other user's name and last message

import { FunctionComponent } from "react";

interface ChatListProps {}

const ChatList: FunctionComponent<ChatListProps> = () => {
  const messages = [
    {
      id: 123,
      username: "Run Actibo",
      lastMessage: "Huling mensahe ni Actibo...",
      image:
        "https://images.pexels.com/photos/1634894/pexels-photo-1634894.jpeg",
    },
    {
      id: 4,
      username: "Cycling World",
      lastMessage: "Big discounts this weekend!",
      image:
        "https://images.pexels.com/photos/1907981/pexels-photo-1907981.jpeg",
    },
    {
      id: 5,
      username: "Gear Up Store",
      lastMessage: "New arrivals in stock.",
      image:
        "https://images.pexels.com/photos/3760532/pexels-photo-3760532.jpeg",
    },
    {
      id: 6,
      username: "Fitness Central",
      lastMessage: "Join our free fitness class!",
      image:
        "https://images.pexels.com/photos/6334011/pexels-photo-6334011.jpeg",
    },
    {
      id: 7,
      username: "Healthy Eats",
      lastMessage: "Fresh produce delivered daily.",
      image:
        "https://images.pexels.com/photos/3895965/pexels-photo-3895965.jpeg",
    },
    {
      id: 8,
      username: "Bike Experts",
      lastMessage: "Schedule your bike repair today.",
      image:
        "https://images.pexels.com/photos/3032095/pexels-photo-3032095.jpeg",
    },
    {
      id: 9,
      username: "Trail Masters",
      lastMessage: "Explore new biking trails with us.",
      image:
        "https://images.pexels.com/photos/5372379/pexels-photo-5372379.jpeg",
    },
    {
      id: 10,
      username: "Ride Safe Co.",
      lastMessage: "Safety gear on sale now!",
      image:
        "https://images.pexels.com/photos/3639449/pexels-photo-3639449.jpeg",
    },
    {
      id: 11,
      username: "Urban Cycler",
      lastMessage: "City rides made better with us.",
      image:
        "https://images.pexels.com/photos/4081645/pexels-photo-4081645.jpeg",
    },
    {
      id: 12,
      username: "Outdoor Lovers",
      lastMessage: "Camping gear for your next adventure.",
      image:
        "https://images.pexels.com/photos/5352183/pexels-photo-5352183.jpeg",
    },
    {
      id: 13,
      username: "Pedal Pals",
      lastMessage: "Join our weekly cycling meetups.",
      image:
        "https://images.pexels.com/photos/2558134/pexels-photo-2558134.jpeg",
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
              // src="../../../store.png"
              src={msg.image}
              onError={(e) => {
                // @ts-ignore
                e.target.src = "/store.png";
              }}
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
