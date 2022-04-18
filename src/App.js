import "./styles.css";
import { Fab } from "@mui/material";
import { Card } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import ImgMediaCard from "./ImgMediaCard";
import BasicGrid from "./BasicGrid";

export default function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <BasicGrid />
    </div>
  );
}
