// Given this code, the API stub and with the design in mind could you build out the UI - theres no need to write any styles this is purely to see how you write the jsx/html
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Test = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://search.com/data").then((res) => setData(res.json()));
  }, []);

  const content = data.map((event) => {
    let eventName;
    let eventIcon;
    let eventDetail;

    if (event.name === null) {
      eventName = `${event.team1} V ${event.team2}`;
    } else {
      eventName = event.name;
    }

    if (!event.sportLogo) {
      if (!event.image) {
        eventIcon = event.teamCrest;
      } else {
        eventIcon = event.image;
      }
    } else {
      eventIcon = event.sportLogo;
    }

    if (!event.startTime) {
      if (!event.distance) {
        eventDetail = event.sport;
      } else {
        eventDetail = event.distance;
      }
    } else {
      eventDetail = event.startTime;
    }

    return (
      <div className="container">
        <div className="icon">
          <img src={eventIcon} alt="" />
        </div>
        <div className="name">
          <h2>{eventName}</h2>
          <small>{eventDetail}</small>
        </div>
        <div className="arrow">
          <FaArrowRight />
        </div>
      </div>
    );
  });

  return <>{content}</>;
};

export default Test;
