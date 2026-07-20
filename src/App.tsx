import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';
import WhatsAppWidget from './components/WhatsAppWidget';

const HomePage = lazy(() => import('./pages/HomePage'));
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
const CommunityPlatformPage = lazy(() => import('./pages/seo/CommunityPlatformPage'));
const MaintenanceBillingPage = lazy(() => import('./pages/seo/MaintenanceBillingPage'));
const MyGateAlternativePage = lazy(() => import('./pages/seo/MyGateAlternativePage'));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <Loader2 className="h-8 w-8 animate-spin text-primary-500" aria-label="Loading" />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header darkMode={false} setDarkMode={() => {}} />
        <Breadcrumbs />
        <main id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage _darkMode={false} />} />
              <Route path="/solutions" element={<SolutionsPage _darkMode={false} />} />
              <Route path="/pricing" element={<PricingPage _darkMode={false} />} />
              <Route path="/about" element={<AboutPage _darkMode={false} />} />
              <Route path="/contact" element={<ContactPage _darkMode={false} />} />
              <Route path="/request-demo" element={<RequestDemoPage _darkMode={false} />} />
              <Route path="/blog" element={<BlogPage _darkMode={false} />} />
              <Route path="/faq" element={<FAQPage _darkMode={false} />} />
              <Route path="/login" element={<LoginPage _darkMode={false} />} />
              <Route path="/privacy" element={<PrivacyPage _darkMode={false} />} />
              <Route path="/terms" element={<TermsPage _darkMode={false} />} />
              <Route path="/apartment-management-software" element={<ApartmentManagementPage _darkMode={false} />} />
              <Route path="/society-management-software" element={<SocietyManagementPage _darkMode={false} />} />
              <Route path="/maintenance-billing-software" element={<MaintenanceBillingPage _darkMode={false} />} />
              <Route path="/mygate-alternative" element={<MyGateAlternativePage _darkMode={false} />} />
              <Route path="/community-management-platform" element={<CommunityPlatformPage _darkMode={false} />} />
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
