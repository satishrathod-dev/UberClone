import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "34B, This is the sample address 2001, Delhi",
    "96A, This is the sample address 2001, Delhi",
    "50P, This is the sample address 2001, Delhi",
    "32C, This is the sample address 2001, Delhi",
    "97B, This is the sample address 2001, Delhi",
  ];

  return (
    <div>
      {/* This is the sample data */}
      {locations.map((ele, index) => (
        <div onClick={() => {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
        }}
          key={index} // Added key prop here
          className="flex gap-3 border-2 p-2 border-gray-50 active:border-black rounded-xl items-center m-4 justify-start"
        >
          <h2 className="bg-[#eee] h-10 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{ele}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
