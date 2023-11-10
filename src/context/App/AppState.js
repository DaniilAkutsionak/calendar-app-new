import React, { useReducer} from 'react'
import { useLocalStorage } from '../../hooks/storage'
import AppReducer from './appReducer'
import AppContext from './appContext'
import _ from 'lodash'


import {ADD_EVENT, GET_EVENTS, SELECT_EVENT, EDIT_EVENT, DELETE_EVENT, ACTIVE_EVENTS} from '../types'

const AppState = props => {
    const initialState = {
        events: [],
        colors: ['Primary', 'Success', 'Info', 'Warning', 'Danger'],
        selectEvent: {},
        activeCalendarEvents: [],
        colorObj: {
          primary: '#0275d8',
          success: '#5cb85c',
          info: '#5bc0de', 
          warning: '#f0ad4e',
          danger: '#d9534f',
        }
    };
          
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [item, setValue] = useLocalStorage('events');
    const [, setSelectedItem] = useLocalStorage('selectedEvent');
    const [active, setActiveEvents] = useLocalStorage('activeCalendarEvents');
    const [, setActiveEvent] = useLocalStorage('eventActive');

    const addEvent = event => {
      let userEvents = [...state.events];
      userEvents.push(event);
      setValue(userEvents);
      
      dispatch({
        type: ADD_EVENT,
        payload: userEvents
      });
    }

    // Get all events from storage
    const getEvents = () => {
      if (item) {
        dispatch({
          type: GET_EVENTS,
          payload: item
        })
      }
    }

    //set due events
    const activeEvents = event => {
      let calendarEvents = [...state.activeCalendarEvents];
      calendarEvents.push(event);
      const activeEventsArray = _.uniqBy(calendarEvents, 'id');
      setActiveEvents(activeEventsArray);
      dispatch({
        type: ACTIVE_EVENTS,
        payload: activeEventsArray
      });
    }

    // Edit selected events
    const editSelectedEvent = event => {
      const newEvents = item.map(e => {
        return e.id === event.id ? event : e;
      });
      setValue(newEvents);
      dispatch({
        type: EDIT_EVENT,
        payload: newEvents
      })
    }

    // Delete selected events
    const deleteSelectedEvent = event => {
      const newEventsArray = item.filter(e => e.id !== event.id);
      setValue(newEventsArray)
      dispatch({
        type: DELETE_EVENT,
        payload: newEventsArray,
      })

      const activeEventsArray = active.filter(e => e.id !== event.id)
      setActiveEvents(activeEventsArray);
      dispatch({
        type: ACTIVE_EVENTS,
        payload: activeEventsArray
      });

      setActiveEvent({});
    }

    //Set selected events
    const selected = event => {
      setSelectedItem(event);
      dispatch({
        type: SELECT_EVENT,
        payload: event
      })
    }
      
  return (
    <AppContext.Provider
        value={{
          events: state.events,
          colors: state.colors,
          selectedEvent: state.selectedEvent,
          colorObj: state.colorObj,
          activeCalendarEvents: state.activeCalendarEvents,
          addEvent,
          getEvents,
          selected,
          editSelectedEvent,
          deleteSelectedEvent,
          activeEvents,
        }}
      >
        {props.children}
    </AppContext.Provider>
  )
}

export default AppState