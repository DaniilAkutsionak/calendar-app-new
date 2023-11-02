import React, {useContext} from 'react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react';

import AppContext from '../../context/App/appContext'



const Calendar = () => {
  const appContext = useContext(AppContext);  
  const { events } = appContext;

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
              events = {events}
            />
        </div>
    </div>
  )
}

export default Calendar