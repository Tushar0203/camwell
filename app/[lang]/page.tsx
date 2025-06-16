import Carousel from "@/components/Carousel";
import Clients from "@/components/Clients";
import ProductsOverview from "@/components/ProductsOverview";
import TestimonialsSection from "@/components/TestimonialsSection";
import { getDictionary, Locale } from "@/lib/dictionary";

// Define params type as a Promise
type Params = Promise<{ lang: Locale }>;

export default async function Home({
  params
}: {
  params: Params
}) {
  // Await the params Promise to get the lang value
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  
  // Get the dictionary for the current locale
  const dict = await getDictionary(lang);
  
  return (
    <div>
      <Carousel dictionary={dict.carousel} />
      <ProductsOverview dictionary={dict.products} />
      <Clients dictionary={{...dict.clients, cta: dict.cta}} />
      <TestimonialsSection dictionary={dict.testimonials} />
    </div>
  );
} 