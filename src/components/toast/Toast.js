import React, { useContext, useEffect } from 'react'
import '../toast/Toast.css'
import moment from 'moment'
import UIfx from 'uifx';

import AppContext from '../../context/App/appContext'
import { clear } from '@testing-library/user-event/dist/clear'
import { useLocalStorage } from '../../hooks/storage'
import notificationSound from '../../assets/notificationSound.wav'

const sound = new UIfx(notificationSound);

export const Toast = () => {
    const appContext = useContext(AppContext);
    const {
        activeEvents, 
        events, 
        activeCalendarEvents,
        deleteSelectedEvent,
        selected,
    } = appContext;

    const [getActiveEvent, setActiveEvent] = useLocalStorage('eventActive');

    useEffect(() => {
        const interval = setInterval(() =>{
            addEvent();
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    })

    useEffect(() => {
        console.log(getActiveEvent);
        if (getActiveEvent && Object.keys(getActiveEvent).length) {
            //play sound
            sound.play()
        }
    }, [getActiveEvent, sound]);

    const deleteEvent = event => {
        deleteSelectedEvent(event);
        selected({});
    }

    const addEvent = () => {
        if  (events.length) {
            for ( const event of events) {
                const startEventDate = `${moment(new Date(event.start)).format('YYYY-MM-DDTHH:mm')}`;
                const now = moment(new Date()).format('YYYY-MM-DDTHH:mm');
                if (now === startEventDate) {
                    activeEvents(event); 
                    setActiveEvent(event);
                }
            }
        }
    }

  return (
    <>
        <div className="notification-container notification-bottom-right"> 
        {
            activeCalendarEvents.map((e, i) =>
                    <div 
                        className='notification toast'
                        style={{ backgroundColor: e.backgroundColor}}
                        key={i}
                        >

                        <button onClick={() => deleteEvent(e)}>
                            X
                        </button>
                        <p className='notification-title'>{e.title}</p>
                        <p className='notification-subtitle'>
                            Overdue {moment(e.start).fromNow()}
                        </p>
                        <p className='notification-message'>
                            {e.description}
                        </p>
                    </div>
                
            )
        }
        </div>  
    </>
  )
}

export default Toast