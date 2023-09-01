import React from 'react';

const DashboardButton = ({ label, onClick }) => {
  return (
    <button className="dashboard-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default DashboardButton;
