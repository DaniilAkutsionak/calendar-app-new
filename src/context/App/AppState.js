import React, { useReducer} from 'react'

import AppReducer from './appReducer'
import AppContext from './appContext'

const AppState = props => {
    const initialState = {
        events: [],
        colors: ['Primary', 'Success', 'Info', 'Warning', 'Danger'],
        selectEvent: {},
    };
          
    const [state, dispatch] = useReducer(AppReducer, initialState)
      
  return (
    <div>

    </div>
  )
}

export default AppState