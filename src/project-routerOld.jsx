import { BrowserRouter ,Route,Routes} from "react-router";
import TopRated from "./TopRated";
import Popular from "./Popular";
import Upcoming from "./Upcoming";
import App from "./App";
import PageNotfound from "./PageNotfound";
import Content from "./Content";
import Singlemovie from "./singlemovie";

let routeVal=(
  <BrowserRouter>
        <Routes>
      <Route path="/" element={<App/>}>
         <Route path="/" element={<Content />}/>
        
         <Route path="/toprated" element={<TopRated/>} />
           <Route path="/popular" element={<Popular/>} />
             <Route path="/upcoming" element={<Upcoming/>} />
              <Route path="/single-movie/:movieid" element={<Singlemovie/>} />

          
              <Route path="*" element={<PageNotfound/>}/>
      </Route>
             
    </Routes>

  </BrowserRouter>
);
export default routeVal;
