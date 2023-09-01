import React from "react";
import DashboardButton from "./DashboardButton";

const LoggedInPage = ({ onMenuItemClick }) => {
  const menuItems = [
    "Dashboard",
    "Parking",
    "ParkingSpot",
    "ParkingLots",
    "Configuration",
  ];

  return (
    <div className="dashboard-container">
      <h2>Bienvenido, Usuario</h2>
      <div className="menu">
        {menuItems.map((item) => (
          <DashboardButton
            key={item}
            label={item}
            onClick={() => onMenuItemClick(item)}
          />
        ))}
      </div>
      <div className="content">{/* Contenido del panel seleccionado */}</div>
    </div>
  );
};

export default LoggedInPage;
