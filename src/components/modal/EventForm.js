import React from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';

const EventForm = props => {
    const {
        modalId,
        title,
        description,
        closeModal,
        eventname,
        inputChange,
        checkbox,
        onCheckBoxChange,
        showtime,
        startDate,
        endDate,
        onInputChange,
        color,
        colors,
        handleChange,
        eventType,
        buttonText,
        colorObj, 
    } = props;

  return (
    <div>
        <div class="modal" id={modalId} tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{title}</h5>
                    <button type='button' className='close' data-dismiss='modal' aria-label='close'
                    onClick={closeModal}>
                        X
                    </button>
                </div>
                <div class="modal-body p-3">
                    <form>
                        <div className='form-group'>
                            <label className='control-label'>Event Title</label>
                            <input 
                                className='form-control fom-white' 
                                placeholder='Enter Title'
                                type='text'
                                name='event-name'
                                value={eventname}
                                onChange={inputChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                            <textArea
                                className='form-control fom-white'
                                placeholder='Enter description'
                                type='text'
                                name='description'
                                value={description}
                                onChange={inputChange}
                            ></textArea>
                        </div>
                        <div className="form-check">                         
                            <input 
                                className='form-check-input' 
                                type='checkbox'
                                name='checkbox'
                                value={checkbox}
                                checked={checkbox}
                                onChange={onCheckBoxChange}
                            />
                            <label className='control-label'>All-day event? (optional)</label>
                        </div>
                        <div className='form-group'>
                            <label >Start</label>
                            <div className='row'>                                                           <div className='col-md-12'>
                                    <ReactDatePicker
                                        showTimeSelect
                                        timeFormat='p'
                                        timeIntervals={1}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        selected={startDate}
                                        onChange={onInputChange('startdate')}
                                        className="form-control"
                                    />
                                    </div>
                            </div>
                            
                        </div>
                        <div className='form-group'>
                            <label className='control-label'>End</label>
                            <div className='row'>
                                {
                                    !showtime ?
                                    <div className='col-md-12'>
                                    <ReactDatePicker
                                        showTimeSelect
                                        timeFormat='p'
                                        timeIntervals={1}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        selected={endDate}
                                        onChange={onInputChange('enddate')}
                                        className="form-control"
                                    />
                                </div> :
                                <div className='col-md-12'>
                                    <ReactDatePicker
                                        dateFormat="MMMM d, yyyy"
                                        selected={endDate}
                                        onChange={onInputChange('enddate')}
                                        className="form-control"
                                    />
                                </div>
                                }
                                
                            </div>
                        </div>
                        <div className='form-group'>
                            <label className="control-label">Choose Event Color</label>
                            <select 
                                className='form-control form-white' name='event-color'
                                value = {color} 
                                onChange={handleChange}
                                style={{'backgroundColor': colorObj[color] }}
                                >

                                <option>Select color</option>
                                {
                                    colors.map(color =>
                                        <option
                                            value={color.toLowerCase()}
                                            key={color}
                                        >
                                            {color}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary save"
                        data-dismiss="modal"
                        onClick={eventType}
                        disable={
                            !eventname || !startDate || !endDate || !color
                        }
                        >
                            {buttonText}
                    </button>

                    <button type="button" class="btn btn-light cancel" data-dismiss="modal"
                    onClick={closeModal}>
                        Close</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventForm