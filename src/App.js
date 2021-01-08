import logo from "./logo.svg";
import "./App.css";
import Layout from "./jobPortal/layout";
import { Switch, Route } from "react-router-dom";
import Candidates from './jobPortal/candidates'
import CandidateProfile from './jobPortal/candidateProfile'
import ShortListed from './jobPortal/shortListed'
import Rejected from './jobPortal/rejected'
function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route path="/" exact component={Candidates} />
          <Route path="/shortlisted" exact component={ShortListed}/>
          <Route path="/rejected" exact component={Rejected}/>
          <Route path="/:id" exact component={CandidateProfile}/>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
