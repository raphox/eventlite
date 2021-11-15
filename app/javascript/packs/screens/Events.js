import React from "react";
import ReactDOM from "react-dom";

import EventsList from "../components/Event/EventsList";

const Events = (props) => (
  <div>
    <EventsList events={props.events} />
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  const node = document.getElementById("events_data");
  const data = JSON.parse(node.getAttribute("data"));
  ReactDOM.render(
    <Events events={data} />,
    document.body.appendChild(document.createElement("div"))
  );
});
