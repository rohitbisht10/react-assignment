import React, { useState } from "react";

const FormComponent = ({ onSubmit }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [selectedType, setSelectedType] = useState("select");


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "latitude") {
      setLatitude(value);
    } else if (name === "longitude") {
      setLongitude(value);
    }
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ latitude, longitude, selectedType });
  };

  return (
    <div className="row mb-4">
      <div className="col-lg-5">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between">
            <div className="mb-3">
              <label className="form-label">
                Latitude:
                <input
                  type="number"
                  className="form-control"
                  name="latitude"
                  value={latitude}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Longitude:
                <input
                  type="number"
                  className="form-control"
                  name="longitude"
                  value={longitude}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Select Type:</label>
            <select
              className="form-select"
              value={selectedType}
              onChange={handleTypeChange}
            >
              <option value="select">select</option>
              <option value="school">School</option>
              <option value="college">College</option>
              <option value="college1">College1</option>
              <option value="School1">School1</option>
              <option value="college2">College2</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
