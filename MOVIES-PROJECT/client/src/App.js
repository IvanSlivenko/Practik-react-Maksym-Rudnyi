import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navigation } from "./components";
import Settings from "@mui/icons-material/Settings";



function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="settings" element={<Settings/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

