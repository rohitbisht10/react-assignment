import React, { useState } from "react";
import FormComponent from "./FormComponent";
import MapComponent from "./MapComponent";
import ChartComponent from "./ChartComponent";

const Main = () => {
  const [formData, setFormData] = useState(null);

  
  const handleSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="container-fluid p-4">
      <div className="row">
        <FormComponent onSubmit={handleSubmit} />
        {formData &&
          formData.latitude &&
          formData.longitude &&
          formData.selectedType !== "select" && (
            <>
              <MapComponent
                latitude={formData.latitude}
                longitude={formData.longitude}
              />
              <ChartComponent selectedType={formData.selectedType} />
            </>
          )}
      </div>
    </div>
  );
};

export default Main;
