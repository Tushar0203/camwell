import Carousel from "@/components/Carousel";
import Clients from "@/components/Clients";
import ProductsOverview from "@/components/ProductsOverview";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Carousel />
      <ProductsOverview />
      <Clients />
      <TestimonialsSection />
    </div>
  );
}


