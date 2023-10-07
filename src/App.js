import { Homepage } from "./Homepage";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Listallpage } from "./Listalldetails";
import { Registraion } from "./Registration";
function App() {
  return (
   <> 
   <BrowserRouter>
   <Homepage/>
    <Routes>
      <Route path='create' exact element={<Registraion/>} />//http://localhost:3000/create
      <Route path='listall' exact element={<Listallpage/>}/>  //http:localhost:3000/listall
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
