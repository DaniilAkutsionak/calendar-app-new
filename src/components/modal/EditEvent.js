import React, { useState, useContext, useEffect } from 'react'
import moment from 'moment/moment'

import EventForm from './EventForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppContext from '../../context/App/appContext'


const EditEvent = () => {

  const [color, setColor] = useState('');
  const [eventname, setEventName] = useState('');
  const [checkbox, setCheckBox] = useState(false);
  const [showtime, setShowTime] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const appContext = useContext(AppContext);
  const  {events, colors, selectedEvent, colorObj } = appContext;

  const inputChange = (event) => {
    setEventName(event.target.value);
  }
  

  const onCheckBoxChange = e => {
    if (e.target.checked === true){
     
      setShowTime(true);
      setCheckBox(true);
      console.log("dasd")
    } else {
      setShowTime(false);
      setCheckBox(false);
      console.log("adasd");
    }
  }

  // const colorObj = {
  //   primary: '#0275d8',
  //   success: '#5cb85c',
  //   info: '#5bc0de',
  //   warning: '#f0ad4e',
  //   danger: '#d9534f',
  // }

  useEffect(() => {
    // Убедитесь, что selectedEvent не null и не undefined перед использованием Object.keys
    if (selectedEvent && Object.keys(selectedEvent).length) {
      setColor(selectedEvent.bgColor);
      setEventName(selectedEvent.title);
      setCheckBox(selectedEvent.allDay);
      let start = '';
      let end = '';
      if (!selectedEvent.allDay) {
        setShowTime(false);
        start = `${moment(new Date(selectedEvent.start)).format()}`;
        end = `${moment(new Date(selectedEvent.end)).format()}`;
      } else {
        setShowTime(true);
        start = `${moment(new Date(selectedEvent.start)).format('YYYY-MM-DD')}`;
        end = `${moment(new Date(selectedEvent.end)).format('YYYY-MM-DD')}`;
      }
      setStartDate(new Date(start));
      setEndDate(new Date(end));
    }
    // eslint-disable-next-line
  }, [selectedEvent, events]);

  const handleChange = event => {
    if (event.target.value !== 'Select color'){
      setColor(event.target.value);
    } else {
      setColor('');
    }
  }

  const onInputChange = (propertyName) => event => {
    console.log(propertyName);
    console.log(event);

    if (propertyName === 'startdate'){
        setStartDate(event);
    } 

    if (propertyName === 'enddate'){
      setEndDate(event);
    }
  }

  const editEvent = () => {

  }

  const setEvent = id => {
    let start = '';
    let end = '';
    if (!checkbox) {
      start = `${moment(startDate).format()}`;
      end = `${moment(startDate).format()}`;
    } else {
      start = `${moment(startDate).format('YYYY-MM-DD')}`;
      end = `${moment(startDate).format('YYYY-MM-DD')}`;
    }

    const event = {
      id,
      title: eventname,
      start,
      end,
      bgColor: color,
      backgroundColor: colorObj[color], 
    };

    return event;
  }

  const closeModal = () =>{}

  return (
    < >
        <EventForm
          modalId="edit-event"
          title="Edit Event"
          closeModal={closeModal}
          eventname={eventname}
          inputChange={inputChange}
          checkbox={checkbox}
          onCheckBoxChange={onCheckBoxChange}
          showTime={showtime}
          startDate={startDate}
          endDate={endDate}
          onInputChange={onInputChange}
          color={color}
          colors={colors}
          handleChange={handleChange}
          eventType={editEvent}
          buttonText="Update"
          colorObj={colorObj}
        />
    </>
  )
}

export default EditEvent;