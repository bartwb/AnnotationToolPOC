import React from "react";
import OHIFViewerComponent from "./OHIFViewerComponent";
import image from './assets/1.png';


const imageId = `webpack://${image}`;

const stack = {
  imageIds: [imageId],
  currentImageIdIndex: 0,
};

const App = () => (
  <div>
    <h2>OHIF POC</h2>
    <OHIFViewerComponent />
  </div>
);

export default App;
