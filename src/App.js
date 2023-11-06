import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppState from './context/App/AppState';

import Main from './components/Main';



const App = () => {
  return (
    <>
      <AppState>
        <Main>
          
        </Main>
      </AppState>
        
    </>
  );
}

export default App;
