import { FunctionComponent } from "react";
import ChatList from "../components/Common/ChatList";

interface MessagesPageProps {}

const MessagesPage: FunctionComponent<MessagesPageProps> = () => {
  return (
    <>
      <ChatList />
    </>
  );
};

export default MessagesPage;
