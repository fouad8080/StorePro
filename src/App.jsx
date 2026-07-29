import { createContext ,useState} from "react";

import Dashboard from "./dashboard";
import Info from "./info/info";

export const inform=createContext(null)


function App() {
  const [info,setinfo]=useState(null)
  const [categories,setcategory]=useState({})

  return (
    <inform.Provider value={{info,setinfo,categories,setcategory}}>
      <div className="App">
      <Info info={{info,setinfo,setcategory}} />
      <Dashboard value={{info,categories}} />
    </div>
    </inform.Provider>
    
  );
}

export default App;