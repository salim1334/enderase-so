
import React from 'react';
import { Link } from 'react-router-dom';

const FleetManagementPage: React.FC = () => {
    return (
        <div>
            <section className="relative bg-gray-800 text-white" style={{ backgroundImage: 'url(https://picsum.photos/1600/600?image=1078)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">Intelligent Fleet & Asset Tracking</h1>
                    <p className="mt-4 text-xl text-gray-200">Total visibility and control over your logistical operations.</p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p>Optimize your logistics with our multi-tenant Fleet Management solutions. Monitor fuel, route efficiency, and driver safety in real-time. Whether you manage 10 vehicles or 1,000, our scalable B2B portal gives you total visibility.</p>

                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>Real-Time GPS Tracking:</strong> Know the exact location of every vehicle and asset in your fleet, 24/7.</li>
                            <li><strong>Fuel & Efficiency Monitoring:</strong> Track fuel consumption, idling time, and mileage to reduce operational costs.</li>
                            <li><strong>Driver Safety Analytics:</strong> Monitor driving behavior such as speeding, harsh braking, and acceleration to promote safety and reduce insurance premiums.</li>
                            <li><strong>Geofencing & Alerts:</strong> Create virtual boundaries and receive instant alerts when vehicles enter or exit specific zones.</li>
                            <li><strong>Maintenance Scheduling:</strong> Automate maintenance reminders based on mileage or engine hours to keep your fleet in top condition.</li>
                        </ul>

                        <div className="mt-12 bg-gray-50 p-8 rounded-lg text-center">
                            <h3 className="text-2xl font-bold text-gray-900">Ready to Optimize Your Fleet?</h3>
                            <p className="mt-2 text-gray-600">Contact us for a live demo and see how our platform can transform your operations.</p>
                            <Link to="/contact" className="mt-6 inline-block bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors">
                                Request a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FleetManagementPage;
