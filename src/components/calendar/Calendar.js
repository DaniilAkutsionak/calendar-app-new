import React, {useContext, useEffect} from 'react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar  from '@fullcalendar/react';


import AppContext from '../../context/App/appContext'
import { Toast } from '../toast/Toast.js';




const Calendar = () => {
  const appContext = useContext(AppContext);  
  const { events, getEvents, selected } = appContext;

  useEffect(() =>{
    getEvents(); 
  }, [events]);

  const handleEventClick = info => {
    const event = events.find(e => e.id === parseInt(info.event.id, 10))
    selected(event)
    info.el.setAttribute('data-toggle', 'modal');
    info.el.setAttribute('data-target', '#selection-modal');
  }

  return (
    <div className='col-lg-8'>
        <div>
            <FullCalendar 
              initialView={"dayGridMonth"}
              plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                  left: 'prev, next today',
                  center: 'title',
                  right: 'dayGridMonth, timeGridWeek, timeGridDay'
              }}


              dayMaxEvent={true}
       
              dayMaxEvents={2}
              events = {events}
              eventClick={handleEventClick}
              eventLimit={2}

              
            />
            
        </div>

        <Toast></Toast>
    </div>
  )
}

export default Calendar