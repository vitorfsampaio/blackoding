import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TestimonialsSection from '@/components/TestimonialsSection';
import SolutionsSection from '@/components/SolutionsSection';
import TeamSection from '@/components/TeamSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <TestimonialsSection />
      <SolutionsSection />
      <TeamSection />
      <PricingSection />
      <Footer />
    </main>
  );
}