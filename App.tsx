
import React from 'react';
import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import ExplainPage from './pages/ExplainPage';
import StudyHubPage from './pages/StudyHubPage';
import PlannerPage from './pages/PlannerPage';
import ProgressPage from './pages/ProgressPage';
import EthicsPage from './pages/EthicsPage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import { APP_NAME } from './constants';
import { useUser } from './contexts/UserContext';

// Wrapper component for routes that use the main application Layout
const MainAppLayout: React.FC = () => {
  const location = useLocation();
  const { userSettings } = useUser();
  
  const getCurrentPageInfo = () => {
    let title = APP_NAME;
    let showBackButton = false;

    // Basic title logic based on new structure.
    // More complex titles/back buttons might be needed within StudyHub sub-pages.
    if (location.pathname.startsWith('/study-hub')) {
        title = 'Study Hub'; 
        // Sub-pages of study-hub might need their own back button logic to go to /study-hub, not generic history.
        // For now, let's assume specific study-hub pages will handle their titles/back buttons if needed.
        if (location.pathname !== '/study-hub') {
            showBackButton = true; // Example: show back button for /study-hub/explain to go back to /study-hub
        }
    } else if (location.pathname === '/dashboard') {
        title = userSettings.name ? `¡Hola, ${userSettings.name}!` : 'Inicio';
    } else if (location.pathname === '/settings') {
        title = 'Configuración';
    }
    // Add more specific titles if needed
    if (location.pathname === '/study-hub/explain') title = 'Study Buddy';
    if (location.pathname === '/study-hub/planner') title = 'Planificador';
    if (location.pathname === '/study-hub/progress') title = 'Progreso';
    if (location.pathname === '/study-hub/ethics') title = 'Ética IA';


    return { title, showBackButton };
  };

  const { title, showBackButton } = getCurrentPageInfo();

  return (
    <Layout pageTitle={title} showBackButton={showBackButton}>
      <Outlet /> 
    </Layout>
  );
};


const App: React.FC = () => {
  const { userSettings, isInitializing } = useUser();

  if (isInitializing) {
    return <div className="flex justify-center items-center min-h-screen bg-background-light dark:bg-background-dark"><p className="text-lg dark:text-white">Cargando...</p></div>;
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} /> {/* Kept for direct access if needed, but setup flow is primary */}

      {!userSettings.name ? (
        <>
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/settings" replace />} />
        </>
      ) : (
        <Route element={<MainAppLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          
          {/* Study Hub and its sub-pages */}
          <Route path="/study-hub" element={<StudyHubPage />} />
          <Route path="/study-hub/explain" element={<ExplainPage />} />
          <Route path="/study-hub/planner" element={<PlannerPage />} />
          <Route path="/study-hub/progress" element={<ProgressPage />} />
          <Route path="/study-hub/ethics" element={<EthicsPage />} />
          {/* Other tools from StudyHub might be modals or part of StudyHubPage itself */}
          
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      )}
    </Routes>
  );
};

export default App;