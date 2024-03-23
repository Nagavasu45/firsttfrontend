
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hiringpage from './Hiringpage';
import CompanyDeatails from './CompanyDeatails';
import Datacompo from './Datacompo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Datacompo>
      <Routes>
        <Route path='/' element={<Hiringpage />}/>
        <Route path='/CompanyDeatails/:id' element={<CompanyDeatails />} />
        
        
      </Routes>
      </Datacompo>
      </BrowserRouter>
    </div>
  );
}

export default App;
