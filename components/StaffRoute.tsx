import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface StaffRouteProps {
    children: React.ReactElement;
}

const StaffRoute: React.FC<StaffRouteProps> = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Or a spinner component
    }

    if (!user || (user.role !== 'staff' && user.role !== 'admin')) {
        // Redirect them to the home page if they are not a staff or admin
        return <Navigate to="/" />;
    }

    return children;
};

export default StaffRoute;
