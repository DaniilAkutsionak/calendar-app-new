import React from 'react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react';

const Calendar = () => {
  return (
    <div className='col-lg-9'>
        <div>
            <FullCalendar 
              defaultView='dayGridMonth'
              plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                  left: 'prev, next today',
                  center: 'title',
                  right: 'dayGridMonth, timeGridWeek, timeGridDay'
              }}
            />
        </div>
    </div>
  )
}

export default Calendar