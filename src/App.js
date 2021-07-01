import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"

//importing components
import Body from "./components/body";
import Contact from "./components/mail"
//import Me from "./components/me"

const App = () => {
  return(
     <Router>
       <Switch>
         <Route exact path="/" component={Body}/>
        {/* <Route exact path="/me" component={Me}/>*/}
        <Route exact path="/ContactMe" component={Contact}/>
       </Switch>
     </Router>
  )
}

export default App;