import React from "react";
import "./FacialMassage.css";
import GlowFacial from "../assets/image copy.png";
import HydratingFacial from "../assets/Picsart_25-03-01_10-41-08-388.jpg";       
import AntiAgingFacial from "../assets/Picsart_25-03-01_10-41-40-668.jpg";
import RelaxingMassage from "../assets/PURPLE.jpg";
import DeepTissueMassage from "../assets/UntitledLogo.png";
import AromatherapyMassage from "../assets/vilot2.jpg";

const FacialMassage = () => {
  

  const facialServices = [
    { name: "Glow Facial", image: GlowFacial },
    { name: "Hydrating Facial", image: HydratingFacial },
    { name: "Anti-Aging Facial", image: AntiAgingFacial },
  ];

  const massageServices = [
    { name: "Relaxing Massage", image: RelaxingMassage },
    { name: "Deep Tissue Massage", image: DeepTissueMassage },
    { name: "Aromatherapy Massage", image: AromatherapyMassage },
  ];

  return (
      
    <div className="facial-massage-container">

      {/* Page Header */}
      <h2 className="page-title">💆‍♀️ Facial & Massage Services</h2>
      <p className="page-description">
        Pamper yourself with our luxurious facials and relaxing massages!
      </p>

      {/* Facial Services Section */}
      <div className="services-section">
        <h3 className="section-title">🌿 Facial Treatments</h3>
        <div className="service-grid">
          {facialServices.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.name} className="service-image" />
              <h4>{service.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Massage Services Section */}
      <div className="services-section">
        <h3 className="section-title">💆‍♂️ Massage Therapy</h3>
        <div className="service-grid">
          {massageServices.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.name} className="service-image" />
              <h4>{service.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacialMassage;
