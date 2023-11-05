import React from 'react'

const SelectModal = () => {
  return (
    <>
        <div className="modal" id="selection-modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Select</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="text-center">
                        <button type="button" className="btn btn-primary">
                            Edit Event
                        </button>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <button type="button" className="btn btn-danger" data-dismiss="modal">
                            Delete Event
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SelectModal