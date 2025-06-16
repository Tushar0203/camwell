// This file contains simple translations for static text in the application
// In a real application, you would use a more sophisticated translation system

type TranslationKey = string;
type Language = 'en' | 'ar';

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Home page
    'home.hero.title': 'High-Security Fencing Solutions',
    'home.hero.subtitle': 'Protecting What Matters Most',
    'home.products.title': 'Our Products',
    'home.clients.title': 'Our Clients',
    'home.testimonials.title': 'What Our Clients Say',
    
    // About page
    'about.hero.title': 'About Camwell Industries',
    'about.mission.title': 'Our Mission',
    'about.vision.title': 'Our Vision',
    'about.values.title': 'Our Core Values',
    
    // Products page
    'products.hero.title': 'Secure Your Perimeter With Excellence',
    'products.hero.subtitle': 'Premium Security Solutions',
    'products.browse': 'Browse Products',
    
    // Warranty page
    'warranty.hero.title': 'Our Warranty',
    'warranty.desc': 'We stand behind our products with comprehensive warranty coverage',
    
    // Brochure page
    'brochure.hero.title': 'Request a Brochure',
    'brochure.desc': 'Get detailed information about our products',
    
    // Contact page
    'contact.hero.title': 'Contact Us',
    'contact.desc': 'We\'re here to help with your security needs',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
  },
  ar: {
    // Home page
    'home.hero.title': 'حلول سياج عالية الأمان',
    'home.hero.subtitle': 'حماية ما يهمك',
    'home.products.title': 'منتجاتنا',
    'home.clients.title': 'عملاؤنا',
    'home.testimonials.title': 'ماذا يقول عملاؤنا',
    
    // About page
    'about.hero.title': 'عن كامويل للصناعات',
    'about.mission.title': 'مهمتنا',
    'about.vision.title': 'رؤيتنا',
    'about.values.title': 'قيمنا الأساسية',
    
    // Products page
    'products.hero.title': 'أمّن محيطك بالتميز',
    'products.hero.subtitle': 'حلول أمنية متميزة',
    'products.browse': 'تصفح المنتجات',
    
    // Warranty page
    'warranty.hero.title': 'الضمان الخاص بنا',
    'warranty.desc': 'نقف وراء منتجاتنا مع تغطية ضمان شاملة',
    
    // Brochure page
    'brochure.hero.title': 'طلب كتيب',
    'brochure.desc': 'احصل على معلومات مفصلة حول منتجاتنا',
    
    // Contact page
    'contact.hero.title': 'اتصل بنا',
    'contact.desc': 'نحن هنا للمساعدة في احتياجاتك الأمنية',
    'contact.form.name': 'اسمك',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
  }
};

export function getTranslation(key: TranslationKey, lang: Language): string {
  return translations[lang][key] || key;
}

// Custom hook to use with the language context
export function useTranslation(key: TranslationKey, language: Language): string {
  return getTranslation(key, language);
} 