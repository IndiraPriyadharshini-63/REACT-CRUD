import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import events from "../events";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/CalendarComponent.css";


moment.locale("en-GB");
const localizer = momentLocalizer(moment);

function CalendarComponent() {
  const [EventData, setEventData] = useState(events);

  const handleSelect = ({ start, end }) => {
    console.log(start)
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
  };

  return (
    <div className="calendar-component">
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={EventData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert([event.title, event.start, event.end])}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}

export default CalendarComponent;
