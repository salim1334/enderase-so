
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import LicensingPage from './pages/LicensingPage';
import ContactPage from './pages/ContactPage';
import PartnersPage from './pages/PartnersPage';
import CompliancePage from './pages/CompliancePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FleetManagementPage from './pages/FleetManagementPage';
import ElearningPage from './pages/ElearningPage';
import B2bPortalsPage from './pages/B2bPortalsPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import InfrastructurePage from './pages/InfrastructurePage';
import PortfolioPage from './pages/PortfolioPage';
import SupportPage from './pages/SupportPage';
import CareersPage from './pages/CareersPage';
import TenderPortalPage from './pages/TenderPortalPage';
import TenderDetailPage from './pages/TenderDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminRegisterPage from './pages/AdminRegisterPage';
import AdminRoute from './components/AdminRoute';
import CreateBidPage from './pages/CreateBidPage';
import StaffRoute from './components/StaffRoute';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow pt-20">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/solutions" element={<SolutionsPage />} />
                        <Route path="/infrastructure" element={<InfrastructurePage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/licensing" element={<LicensingPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/partners" element={<PartnersPage />} />
                        <Route path="/compliance" element={<CompliancePage />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                        <Route path="/fleet-management" element={<FleetManagementPage />} />
                        <Route path="/elearning" element={<ElearningPage />} />
                        <Route path="/b2b-portals" element={<B2bPortalsPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        <Route path="/tender" element={<TenderPortalPage />} />
                        <Route path="/tender/:tenderId" element={<TenderDetailPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/admin/register" element={<AdminRoute><AdminRegisterPage /></AdminRoute>} />
                        {/* <Route path="/create-bid" element={<StaffRoute><CreateBidPage /></StaffRoute>} /> */}
                        <Route path="/create-bid" element={<CreateBidPage />} />
                    </Routes>
                </main>
                <Footer />
                <ScrollToTopButton />
            </div>
        </BrowserRouter>
    );
};

export default App;
