import React, { useState } from "react";
import { ReactPictureAnnotation, DefaultInputSection } from "react-picture-annotation";
import image from "./assets/1.png"; // Replace with your own PNG image path

const AnnotationApp = () => {
  // State to store the annotations
  const [annotations, setAnnotations] = useState([]);

  // Update annotations when changes are made
  const handleChange = (data) => {
    setAnnotations(data);
    console.log("Updated Annotations:", data);
  };

  return (
    <div style={{ width: "80%", margin: "auto", height: "500px", border: "1px solid #ddd" }}>
      <ReactPictureAnnotation
        width={800}
        height={500}
        annotations={annotations}
        onChange={handleChange}
        inputElement={(props) => <DefaultInputSection {...props} />}
        image={image} // Your PNG image
      />
    </div>
  );
};

export default AnnotationApp;
