import React, { useState, useEffect } from "react";
import Stepper from "react-stepper-horizontal";
import { Outlet, useLocation } from "react-router-dom";

function StepLayout() {
  const steps = [
    { title: "Child Details" },
    { title: "Items" },
    { title: "Confirmation" },
  ];
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/step/form":
        setActiveStep(0);
        break;
      case "/step/addcart":
        setActiveStep(1);
        break;
      case "/step/checkout":
        setActiveStep(2);
        break;
      default:
        setActiveStep(0);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
           <Stepper
            steps={steps}
            activeStep={activeStep}
            activeColor="#4CAF50" // Set your active color
            completeColor="#4CAF50" // Set your completed color
            defaultColor="#DDDDDD" // Set your default color
            completeBarColor="#4CAF50" // Set your completed bar color
            defaultBarColor="#DDDDDD" // Set your default bar color
            activeTitleColor="#4CAF50" // Set your active title color
            completeTitleColor="#4CAF50" // Set your completed title color
            defaultTitleColor="#DDDDDD" // Set your default title color
            circleTop={14} // Customize this value as needed
          />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default StepLayout;