import React, { useState, useContext } from 'react'
import moment from 'moment/moment'
import EventForm from './EventForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppContext from '../../context/App/appContext'


const AddEvent = () => {

  const [color, setColor] = useState('');
  const [eventname, setEventName] = useState('');
  const [checkbox, setCheckBox] = useState(false);
  const [showtime, setShowTime] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const appContext = useContext(AppContext);
  const  {addEvent, events, colors } = appContext;

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

  // const colors =['Primary', 'Success', 'Info', 'Warning', 'Danger'];
  const colorObj = {
    primary: '#0275d8',
    success: '#5cb85c',
    info: '#5bc0de',
    warning: '#f0ad4e',
    danger: '#d9534f',
  }

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

  const createEvent = () => {
    const event = setEvent(events.length+1);
    // add event to events array using conext
    addEvent(event);
    reset();
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

  const reset = () => {
    setColor('');
    setEventName('');
    setCheckBox(false);
    setShowTime(false);
    setStartDate(new Date());
    setEndDate(new Date());
  }

  const closeModal = () =>{
    reset();
  }

  return (
    <div >
        <EventForm
          modalId="add-event"
          title="Add Event"
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
          eventType={createEvent}
          buttonText="Save"
        />
    </div>
  )
}

export default AddEvent