import { Homepage } from "./Homepage";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Listallpage } from "./Listalldetails";
import { Registraion } from "./Registration";
import { Readpage } from "./readpage";
import { Updatepage } from "./update";
function App() {
  return (
   <> 
   <BrowserRouter>
   <Homepage/>
    <Routes>
      <Route path='create' exact element={<Registraion/>} />//http://localhost:3000/create
      <Route path='listall' exact element={<Listallpage/>}/>  //http:localhost:3000/listall
      <Route path='reading/:acc_number' exact element={<Readpage/>} />
      <Route path='updating/:acc_number' exact element={<Updatepage/>}/>
      {/* http:localhost:3000/reading/accno */}
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
