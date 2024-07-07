import React, { useState } from "react";
//import FullCalendar from "@fullcalendar/react";
//import dayGridPlugin from "@fullcalendar/daygrid";
//import interactionPlugin from "@fullcalendar/interaction";
import "../styles/CalendarComponent.css";
import "../styles/Modal.css";
import events from "../events";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import EventModal from "../components/EventModal";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

function CalendarComponent() {
  const [EventData, setEventData] = useState(events);

  // const handleSelect = ({ start, end }) => {
  //   const title = window.prompt("New Event name");
  //   if (title)
  //     setEventData([
  //       ...EventData,
  //       {
  //         start,
  //         end,
  //         title,
  //       },
  //     ]);
  // };

  const handleEvent = (e) => {
    const start = e.start;
    const end = e.end;
    const box = e.box;
    console.log(box);
    
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
        onSelectEvent={(event) => alert(event.title, event.start, event.end)}
        onSelectSlot={(event) => handleEvent(event)}
      />
    </div>
  );
}

export default CalendarComponent;
