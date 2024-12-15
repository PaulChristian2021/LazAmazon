import { FunctionComponent } from "react";

interface AccountPageProps {}

const AccountPage: FunctionComponent<AccountPageProps> = () => {
  const ordersTypesButtons = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-wallet2"
          viewBox="0 0 16 16"
        >
          <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
        </svg>
      ),
      text: "To Pay",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-truck"
          viewBox="0 0 16 16"
        >
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
        </svg>
      ),
      text: "To Ship",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-box-seam"
          viewBox="0 0 16 16"
        >
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
        </svg>
      ),
      text: "To Receive",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-clipboard2-check"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
          <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
          <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
        </svg>
      ),
      text: "To Review",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-inboxes"
          viewBox="0 0 16 16"
        >
          <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562A.5.5 0 0 0 1.884 9h12.234a.5.5 0 0 0 .496-.438zM3.809.563A1.5 1.5 0 0 1 4.981 0h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393zm.941.83.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438l.32-2.562H10.45a2.5 2.5 0 0 1-4.9 0z" />
        </svg>
      ),
      text: "Returns & Cancellations",
    },
  ];

  return (
    <div className="container my-2">
      <div className="container d-flex ">
        <img
          src="../../../public/store.png"
          // src={msg.image}
          onError={(e) => {
            // @ts-ignore
            e.target.src = "../../../public/store.png";
          }}
          className="rounded-circle d-inline-block border"
          style={{ height: "60px", width: "60px" }}
          alt="..."
        />
        <h1 className="fs-3">Paul Christian ...</h1>
      </div>
      <div className="container ">
        <div className="container d-flex justify-content-between align-items-center px-0">
          <h2 className="fs-5">My Orders</h2>
          <button type="button" className="btn " style={{ fontSize: "12px" }}>
            View All Orders
          </button>
        </div>
        <div className="row d-flex flex-row ">
          {ordersTypesButtons.map((otb) => (
            <button
              className="btn w-100 col d-flex flex-column align-items-center justify-content-center"
              style={{ fontSize: "11px" }}
            >
              {otb.svg}
              <span className="fs-7">{otb.text}</span>
            </button>
          ))}
          {/* <button
            className="btn w-100 col d-flex flex-column align-items-center justify-content-center"
            style={{ fontSize: "11px" }}
          >
            <span className="fs-7"></span>
          </button>
          <button
            className="btn w-100 col d-flex flex-column align-items-center justify-content-center"
            style={{ fontSize: "11px" }}
          >
            <span className="">To Receive</span>
          </button>
          <button
            className="btn w-100 col d-flex flex-column align-items-center justify-content-center"
            style={{ fontSize: "11px", width: "20%" }}
          >
            <span className="fs-8">To Review</span>
          </button>
          <button
            className="btn w-100 col d-flex flex-column align-items-center justify-content-center"
            style={{ fontSize: "10px", width: "20%" }}
          >
            <span className="fs-7">Returns & Cancellations</span>
          </button> */}
          {/* <button
            key={btn.text}
            className={`btn d-block w-100 py-3 d-flex align-items-center flex-column ${activeBtn === btn.path ? "text-danger" : ""}`}
            type="button"
            id={btn.text}
            onClick={() => handleButtonClick(btn)}
          >
            {btn.icon}
            <span style={{ fontSize: "0.75rem" }}>{btn.text}</span> */}
        </div>
        <div
          id="random-orders-status-carousel"
          className="row p-2 border border-1"
        >
          random-orders-status-carousel <br />
          random-orders-status-carousel
        </div>
      </div>

      <div className="container">
        <h2 className="fs-5">My Channels</h2>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
};

export default AccountPage;
