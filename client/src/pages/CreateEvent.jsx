import React, { useState } from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";



function CreateEvent() {
      const [date, changeDate] = useState(new Date());

      function changeValue(val) {
         changeDate(val);
      }
  return (
      <div>

         <Calendar onChange = {changeValue} value = {date} />
         <p>The selected date is - {date.toLocaleDateString()}</p>
      </div>
   );
  
}

export default CreateEvent
