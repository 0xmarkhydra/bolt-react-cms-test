import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/books/*" element={<div>Books Management</div>} />
      <Route path="/users" element={<div>User Management</div>} />
      <Route path="/warehouse/*" element={<div>Warehouse Management</div>} />
      <Route path="/settings/*" element={<div>Settings</div>} />
    </Routes>
  );
};

export default AppRoutes;