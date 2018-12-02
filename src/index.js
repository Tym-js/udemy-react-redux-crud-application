import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "./reducers"
import EventsIndex from "./components/events_index"
import EventsNew from "./components/events_new"
import EventsShow from "./components/events_show"

const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
const store = createStore(rootReducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={EventsIndex} />
        <Route path="/events/new" component={EventsNew} />
        <Route exact path="/events/id" component={EventsShow} />
        <Route exact path="/events" component={EventsIndex} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)
