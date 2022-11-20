import { Route, Routes } from "react-router-dom";

import {
  AboutPage,
  HomePage,
  ContactUsPage,
  MoviesPage,
  GamesPage,
  PageNotFound,
  TamaraPage,
} from "./pages";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div>
        <SidebarComponent />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/tamara" element={<TamaraPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
