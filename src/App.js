import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/all-meeting" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favourite">
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
