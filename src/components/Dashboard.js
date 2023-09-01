import React from 'react';
import DashboardButton from './DashboardButton';

const Dashboard = ({ onMenuItemClick }) => {
  const menuItems = [
    'Dashboard',
    'Parking',
    'ParkingSpot',
    'ParkingLots',
    'Configuration',
  ];

  return (
    <div className="dashboard-container">
      <div className="menu">
        {menuItems.map((item) => (
          <DashboardButton
            key={item}
            label={item}
            onClick={() => onMenuItemClick(item)}
          />
        ))}
      </div>
      <div className="content">
        {/* Aquí se renderizará el contenido del panel seleccionado */}
      </div>
    </div>
  );
};

export default Dashboard;
