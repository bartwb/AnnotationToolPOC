import React from "react";
import AnnotationApp from "./AnnotationApp";
import image from './assets/1.png';

const imageId = `webpack://${image}`;

const stack = {
  imageIds: [imageId],
  currentImageIdIndex: 0,
};

const App = () => (
  <div>
    <h1>React Picture Annotation P.O.C.</h1>
    <AnnotationApp />
  </div>
);

export default App;
