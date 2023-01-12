import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Application from "./pages/Application";
import Services from "./pages/Services";
import Summary from "./pages/Summary";
import Planner from "./pages/Planner";
import Comments from "./pages/Comments";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Faqs from "./pages/Faqs";
import Vendors from "./pages/Vendors";
import SearchPage from "./pages/SearchPage";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/application" exact component={Application} />
          <Route path="/services" exact component={Services} />
          <Route path="/summary" exact component={Summary} />
          <Route path="/planner" exact component={Planner} />
          <Route path="/comments" exact component={Comments} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/step1" exact component={Step1} />
          <Route path="/step2" exact component={Step2} />
          <Route path="/faqs" exact component={Faqs} />
          <Route path="/vendors" exact component={Vendors} />
          <Route path="/search-page" exact component={SearchPage} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
