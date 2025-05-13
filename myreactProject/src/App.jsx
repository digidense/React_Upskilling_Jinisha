import Hookuseeffect from "./Hookuseeffect";
import Hookusestate from "./Hookusestate";
import FocusInput from './Hookuseref';
import UseMemoExample from './Hookusememo';
import Container from './HookUseContext/Container';
import React, { createContext, use, useState } from "react";
import Hookreduce from "./HookuseReducer/UseReducer";
import Hookusecallback from "./HookuseCallback/Hookusecallback";

export const ThemeContext = createContext();

function App() {
    
    const[theme, setTheme]=useState('light')

    return <>
        {/* <Hookusestate/> */}
        {/* <Hookuseeffect/> */}
        {/* <Hookusestate/> */}
        {/* <FocusInput/> */}
        {/* <UseMemoExample/> */}
        {/* <ThemeContext.Provider value={{theme, setTheme}}>
            <Container/>
        </ThemeContext.Provider> */}
       {/* <Hookreduce/> */}
       <Hookusecallback/>
    </>
}

export default App;