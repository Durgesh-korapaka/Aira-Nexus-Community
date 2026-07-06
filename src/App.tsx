import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Breadcrumbs from './components/Breadcrumbs';
import HomePage from './pages/HomePage';

const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const RequestDemoPage = lazy(() => import('./pages/RequestDemoPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ApartmentManagementPage = lazy(() => import('./pages/seo/ApartmentManagementPage'));
const SocietyManagementPage = lazy(() => import('./pages/seo/SocietyManagementPage'));
const MaintenanceBillingPage = lazy(() => import('./pages/seo/MaintenanceBillingPage'));
const MyGateAlternativePage = lazy(() => import('./pages/seo/MyGateAlternativePage'));
const CommunityPlatformPage = lazy(() => import('./pages/seo/CommunityPlatformPage'));

const darkMode = false;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]" role="status" aria-live="polite">
      <div className="w-10 h-10 border-4 border-primary-100 border-t-primary-500 rounded-full animate-spin" aria-hidden="true" />
      <span className="sr-only">Loading page...</span>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-xl focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header darkMode={darkMode} setDarkMode={() => {}} />
          <main id="main-content">
            <Breadcrumbs />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage darkMode={darkMode} />} />
                <Route path="/features" element={<FeaturesPage darkMode={darkMode} />} />
                <Route path="/solutions" element={<SolutionsPage darkMode={darkMode} />} />
                <Route path="/pricing" element={<PricingPage darkMode={darkMode} />} />
                <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
                <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
                <Route path="/request-demo" element={<RequestDemoPage darkMode={darkMode} />} />
                <Route path="/blog" element={<BlogPage darkMode={darkMode} />} />
                <Route path="/faq" element={<FAQPage darkMode={darkMode} />} />
                <Route path="/privacy" element={<PrivacyPage darkMode={darkMode} />} />
                <Route path="/terms" element={<TermsPage darkMode={darkMode} />} />
                <Route path="/login" element={<LoginPage darkMode={darkMode} />} />
                <Route path="/apartment-management-software" element={<ApartmentManagementPage darkMode={darkMode} />} />
                <Route path="/society-management-software" element={<SocietyManagementPage darkMode={darkMode} />} />
                <Route path="/maintenance-billing-software" element={<MaintenanceBillingPage darkMode={darkMode} />} />
                <Route path="/mygate-alternative" element={<MyGateAlternativePage darkMode={darkMode} />} />
                <Route path="/community-management-platform" element={<CommunityPlatformPage darkMode={darkMode} />} />
              </Routes>
            </Suspense>
          </main>
          <Footer darkMode={darkMode} />
          <WhatsAppWidget />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
