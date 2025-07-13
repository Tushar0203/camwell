import Gallery from '@/components/Gallery';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n-config';

export default async function GalleryPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <Gallery dictionary={dictionary} />
    </div>
  );
}