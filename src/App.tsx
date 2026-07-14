import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import WhatsAppWidget from './components/WhatsAppWidget';
import HomePage from './pages/HomePage';

const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const RequestDemoPage = lazy(() => import('./pages/RequestDemoPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const ApartmentManagementPage = lazy(() => import('./pages/seo/ApartmentManagementPage'));
const SocietyManagementPage = lazy(() => import('./pages/seo/SocietyManagementPage'));
const MaintenanceBillingPage = lazy(() => import('./pages/seo/MaintenanceBillingPage'));
const MyGateAlternativePage = lazy(() => import('./pages/seo/MyGateAlternativePage'));
const CommunityPlatformPage = lazy(() => import('./pages/seo/CommunityPlatformPage'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary-500 focus:text-white focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <Header darkMode={false} setDarkMode={() => {}} />
        <Breadcrumbs />
        <main id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage darkMode={false} />} />
              <Route path="/solutions" element={<SolutionsPage darkMode={false} />} />
              <Route path="/pricing" element={<PricingPage darkMode={false} />} />
              <Route path="/about" element={<AboutPage darkMode={false} />} />
              <Route path="/contact" element={<ContactPage darkMode={false} />} />
              <Route path="/request-demo" element={<RequestDemoPage darkMode={false} />} />
              <Route path="/blog" element={<BlogPage darkMode={false} />} />
              <Route path="/faq" element={<FAQPage darkMode={false} />} />
              <Route path="/login" element={<LoginPage darkMode={false} />} />
              <Route path="/privacy" element={<PrivacyPage darkMode={false} />} />
              <Route path="/terms" element={<TermsPage darkMode={false} />} />
              <Route path="/apartment-management-software" element={<ApartmentManagementPage darkMode={false} />} />
              <Route path="/society-management-software" element={<SocietyManagementPage darkMode={false} />} />
              <Route path="/maintenance-billing-software" element={<MaintenanceBillingPage darkMode={false} />} />
              <Route path="/mygate-alternative" element={<MyGateAlternativePage darkMode={false} />} />
              <Route path="/community-management-platform" element={<CommunityPlatformPage darkMode={false} />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppWidget />
      </BrowserRouter>
    </AuthProvider>
  );
}
