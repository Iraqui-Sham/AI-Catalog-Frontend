// app/billing/page.js (Usage with MainLayout)
import MainLayout from '../layouts/MainLayout';
import BillingPage from '../components/BillingPage';

export default function Billing() {
  return (
    <MainLayout>
      <BillingPage />
    </MainLayout>
  );
}