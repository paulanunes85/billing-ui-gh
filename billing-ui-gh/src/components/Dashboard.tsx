import React from 'react';

interface DashboardProps {
    data: any; // Replace 'any' with a more specific type as needed
    onRefresh: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ data, onRefresh }) => {
    return (
        <div>
            <h1>Billing Dashboard</h1>
            {/* Render billing data here */}
            <button onClick={onRefresh}>Refresh Data</button>
        </div>
    );
};

export default Dashboard;