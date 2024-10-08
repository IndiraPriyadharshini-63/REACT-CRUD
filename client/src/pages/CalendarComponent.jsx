import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/CalendarComponent.css";
import { getEventRoute, createEventRoute } from "../utils/APIRoutes";
import Navbar from "../components/Navbar";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

function CalendarComponent() {
  const [EventData, setEventData] = useState();

  useEffect(() => {
    axios
      .get(getEventRoute)
      .then((result) => setEventData(result.data))
      .catch((err) => console.log(err));
  }, []);
  //console.log(EventData);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title)
      setEventData([
        ...EventData,
        {
          start,
          end,
          title,
        },
      ]);

    axios
      .post(createEventRoute, { title, start, end })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    
      <div className="calendar-component">
        <Calendar
          views={["day", "agenda", "work_week", "month"]}
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={EventData}
          style={{ height: "100vh" }}
          onSelectEvent={(event) => alert(event.title)}
          onSelectSlot={handleSelect}
        />
      </div>
    </>
  );
}

export default CalendarComponent;
