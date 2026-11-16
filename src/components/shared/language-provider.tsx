"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "en" | "ar";

type Messages = Record<string, { en: string; ar: string }>;

const messages: Messages = {
  home: { en: "Home", ar: "الرئيسية" },
  collection: { en: "The collection", ar: "المجموعة" },
  reviews: { en: "Kind words", ar: "آراء العملاء" },
  comingSoon: { en: "Coming soon", ar: "قريبًا" },
  chat: { en: "Chat with us on WhatsApp", ar: "تواصل معنا عبر واتساب" },
  lightMode: { en: "Switch to light mode", ar: "التبديل إلى الوضع الفاتح" },
  darkMode: { en: "Switch to dark mode", ar: "التبديل إلى الوضع الداكن" },
  lightModeText: { en: "Light", ar: "فاتح" },
  darkModeText: { en: "Dark", ar: "داكن" },
  openMenu: { en: "Open navigation menu", ar: "فتح قائمة التنقل" },
  closeMenu: { en: "Close navigation menu", ar: "إغلاق قائمة التنقل" },
  switchToArabic: {
    en: "Switch language to Arabic",
    ar: "التبديل إلى العربية",
  },
  switchToEnglish: {
    en: "Switch language to English",
    ar: "التبديل إلى الإنجليزية",
  },
  search: { en: "Search", ar: "بحث" },
  searchInput: { en: "Search products", ar: "ابحث عن المنتجات" },
  products: { en: "Products", ar: "المنتجات" },
  loading: { en: "Loading...", ar: "جارٍ التحميل..." },
  filters: { en: "Filters", ar: "التصفية" },
  resetFilter: { en: "Reset filters", ar: "إعادة ضبط التصفية" },
  category: { en: "Category", ar: "الفئة" },
  occasion: { en: "Occasion", ar: "المناسبة" },
  priceRange: { en: "Price range", ar: "نطاق السعر" },
  rating: { en: "Rating", ar: "التقييم" },
  color: { en: "Color", ar: "اللون" },
  apply: { en: "Apply filters", ar: "تطبيق التصفية" },
  noProducts: { en: "No products found", ar: "لم يتم العثور على منتجات" },
  adjustFilters: {
    en: "Try adjusting your filters or search terms.",
    ar: "جرّب تعديل خيارات التصفية أو كلمات البحث.",
  },
  clearFilters: { en: "Clear all filters", ar: "مسح كل عوامل التصفية" },
  pageNotFound: { en: "Page not found", ar: "الصفحة غير موجودة" },
  pageMissing: {
    en: "Oops! The page you’re looking for doesn’t exist or has been moved.",
    ar: "عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
  },
  backHome: { en: "Back to home", ar: "العودة إلى الرئيسية" },
  browseProducts: { en: "Browse products", ar: "تصفّح المنتجات" },
  needHelp: { en: "Need help?", ar: "هل تحتاج إلى مساعدة؟" },
  contactSupport: { en: "Contact our support team", ar: "تواصل مع فريق الدعم" },
  somethingWrong: { en: "Something went wrong!", ar: "حدث خطأ ما!" },
  retry: { en: "Please try again.", ar: "يرجى المحاولة مرة أخرى." },
  quantity: { en: "Quantity", ar: "الكمية" },
  decreaseQuantity: { en: "Decrease quantity", ar: "تقليل الكمية" },
  increaseQuantity: { en: "Increase quantity", ar: "زيادة الكمية" },
  addToCart: { en: "Add to cart", ar: "أضف إلى السلة" },
  buyNow: { en: "Buy now", ar: "اشترِ الآن" },
  remove: { en: "Remove", ar: "حذف" },
  selected: { en: "selected", ar: "محددة" },
  continueWhatsApp: { en: "Continue on WhatsApp", ar: "تابع عبر واتساب" },
  editSelection: {
    en: "Review and edit your gifts before sending",
    ar: "راجع هداياك وعدّلها قبل الإرسال",
  },
  searchProducts: { en: "Search products", ar: "ابحث عن المنتجات" },
  loadingProducts: { en: "Loading products...", ar: "جارٍ تحميل المنتجات..." },
  homeHeroTag: {
    en: "A little happiness, wrapped for you",
    ar: "قليل من السعادة، مغلّف خصيصًا لك",
  },
  homeHeroTitle: {
    en: "Give her a little forever.",
    ar: "أهديها ذكرى تدوم للأبد.",
  },
  homeHeroBody: {
    en: "Thoughtful gifts and stainless steel keepsakes, made to say what your heart already knows — beautifully, and within reach.",
    ar: "هدايا مدروسة وقطع من الستانلس ستيل تعبّر عمّا يعرفه قلبك — بجمال وبساطة وفي متناولك.",
  },
  exploreCollection: { en: "Explore the collection", ar: "اكتشف المجموعة" },
  madeToSmile: {
    en: "Made to make someone smile.",
    ar: "صُنعت لترسم ابتسامة.",
  },
  giftEdit: { en: "The gift edit", ar: "اختيارات الهدايا" },
  smallBigFeelings: {
    en: "Small things. Big feelings.",
    ar: "تفاصيل صغيرة. مشاعر كبيرة.",
  },
  chooseKeepClose: {
    en: "Choose something she’ll keep close. Every piece is stainless steel, made to last with her — and to remind her of you, every time she wears it.",
    ar: "اختر هدية ستبقى قريبة منها. كل قطعة من الستانلس ستيل لتدوم وتذكّرها بك كلما ارتدتها.",
  },
  searchJewelry: {
    en: "Search jewelry and gifts",
    ar: "ابحث عن المجوهرات والهدايا",
  },
  searchPlaceholder: {
    en: "Find a little something…",
    ar: "ابحث عن هدية مميزة...",
  },
  filterCategory: {
    en: "Filter products by category",
    ar: "تصفية المنتجات حسب الفئة",
  },
  noTreasures: {
    en: "No little treasures found. Try another search.",
    ar: "لم نعثر على هدايا مميزة. جرّب بحثًا آخر.",
  },
  previous: { en: "← Previous", ar: "السابق ←" },
  next: { en: "Next →", ar: "→ التالي" },
  giftCard: {
    en: "Add a handwritten gift card",
    ar: "أضف بطاقة هدية مكتوبة بخط اليد",
  },
  readySurprise: {
    en: "Ready to surprise her?",
    ar: "هل أنت مستعد لمفاجأتها؟",
  },
  chooseGift: { en: "Choose gift", ar: "اختر هدية" },
  addOne: { en: "Add one", ar: "أضف واحدة" },
  reviewsTitle: { en: "Customer Reviews", ar: "آراء العملاء" },
  thankYou: { en: "Kind words, kept close", ar: "كلمات جميلة تبقى قريبة" },
  giftCount: { en: "gifts selected", ar: "هدايا محددة" },
  giftCountOne: { en: "gift selected", ar: "هدية محددة" },
  selectedGifts: { en: "Selected gifts", ar: "الهدايا المختارة" },
  removeGift: { en: "Remove gift", ar: "حذف الهدية" },
  card: { en: "Card", ar: "بطاقة" },
  quantityLabel: { en: "Quantity", ar: "الكمية" },
  total: { en: "Total", ar: "الإجمالي" },
  giftCardAdded: {
    en: "Handwritten gift card added",
    ar: "تمت إضافة بطاقة مكتوبة بخط اليد",
  },
  productsTitle: { en: "Products", ar: "المنتجات" },
  previousPage: { en: "← Previous", ar: "السابق ←" },
  nextPage: { en: "Next →", ar: "→ التالي" },
  discountLabel: { en: "OFF", ar: "خصم" },
  productNotFound: { en: "Product not found", ar: "المنتج غير موجود" },
  detailedDescription: { en: "Product details", ar: "تفاصيل المنتج" },
  bestFor: { en: "Best for", ar: "مناسب لـ" },
  dimensions: { en: "Dimensions", ar: "الأبعاد" },
  features: { en: "Features", ar: "المميزات" },
  colors: { en: "Colors", ar: "الألوان" },
  selectedColor: { en: "Selected color", ar: "اللون المحدد" },
  errorLoading: {
    en: "We couldn’t load the products. Please try again.",
    ar: "تعذر تحميل المنتجات. يرجى المحاولة مجددًا.",
  },
  happinessAlways: {
    en: "Happiness... Always here",
    ar: "السعادة... دايمًا هنا",
  },
  heroSweetness: {
    en: "A little extra sweetness",
    ar: "لمسة إضافية من الحلاوة",
  },
  saveEveryPiece: { en: "Save 15% on every piece", ar: "وفّر ١٥٪ على كل قطعة" },
  madeWithFeeling: { en: "Made with feeling", ar: "صُنعت بمشاعر صادقة" },
  cardNote: {
    en: "A note from you, tucked inside",
    ar: "رسالة منك بداخل الهدية",
  },
  littleCard: {
    en: "A little card. A lot of love.",
    ar: "بطاقة صغيرة. حب كبير.",
  },
  cardDesc: {
    en: "Every Freebie box can hold a special card, ready for your own words. It opens like a little book, with a dainty satin tie to keep it snug and safe.",
    ar: "يمكن لكل علبة فريبي أن تحمل بطاقة مميزة بكلماتك. تفتح ككتاب صغير وتُربط بشريط ساتان ناعم.",
  },
  footerMade: { en: "Made with feeling.", ar: "صُنعت بمشاعر صادقة." },
  productPages: { en: "Product pages", ar: "صفحات المنتجات" },
  customerReviews: { en: "Customer reviews", ar: "آراء العملاء" },
  benefitOneTitle: {
    en: "A feeling, made tangible",
    ar: "مشاعر تتحول إلى هدية",
  },
  benefitOneBody: {
    en: "Every Freebie starts with one thought: someone deserves to feel loved today.",
    ar: "تبدأ فريبي بفكرة واحدة: يستحق شخص ما أن يشعر بالحب اليوم.",
  },
  benefitTwoTitle: { en: "Lasting little reminders", ar: "ذكريات صغيرة تدوم" },
  benefitTwoBody: {
    en: "Our stainless steel jewelry stays with her, so she can remember you whenever she wears it.",
    ar: "تبقى مجوهراتنا المصنوعة من الستانلس ستيل معها لتتذكرك كلما ارتدتها.",
  },
  benefitThreeTitle: { en: "Lovely, not lavish", ar: "جمال بلا مبالغة" },
  benefitThreeBody: {
    en: "Elegant keepsakes and considered prices — because meaningful gifts should feel within reach.",
    ar: "هدايا أنيقة بأسعار مدروسة، لأن الهدايا المعبرة يجب أن تكون في المتناول.",
  },
  offerLabel: {
    en: "A little note from you, tucked inside",
    ar: "رسالة صغيرة منك بداخلها",
  },
  offerTitle: {
    en: "A little card. A lot of love.",
    ar: "بطاقة صغيرة. حب كبير.",
  },
  giftCardDescription: {
    en: "Every Freebie box can hold a special card, ready for your own words. It opens like a little book, with a dainty satin tie to keep it snug and safe.",
    ar: "يمكن لكل علبة فريبي أن تحمل بطاقة خاصة بكلماتك. تفتح ككتاب صغير ويضمها شريط ساتان ناعم.",
  },
  handwrittenMessage: {
    en: "Your gift card is editable and can include a handwritten message or signature, making it a keepsake of its own.",
    ar: "يمكن تخصيص بطاقة الهدية برسالتك أو توقيعك بخط اليد لتصبح ذكرى مميزة بحد ذاتها.",
  },
  addGiftCardPrice: {
    en: "Add a handwritten gift card for 30 EGP.",
    ar: "أضف بطاقة هدية مكتوبة بخط اليد مقابل ٣٠ جنيهًا.",
  },
  ourGoal: {
    en: "Our goal: genuine smiles through accessible, high-elegance gifts.",
    ar: "هدفنا: ابتسامات حقيقية بهدايا أنيقة وفي المتناول.",
  },
  availableColors: { en: "Available colors", ar: "الألوان المتاحة" },
  prepTime: { en: "Prep time", ar: "وقت التجهيز" },
  weight: { en: "Weight", ar: "الوزن" },
  minutes: { en: "mins", ar: "دقيقة" },
  close: { en: "Close", ar: "إغلاق" },
  colorLabel: { en: "Color", ar: "اللون" },
  ratingUp: { en: "& up", ar: "فأكثر" },
  pageNumber: { en: "Page", ar: "الصفحة" },
  of: { en: "of", ar: "من" },
  reviewNumber: { en: "Show review", ar: "عرض التقييم" },
  futureTitle: {
    en: "Happiness Does Not Stop at Jewelry",
    ar: "السعادة لا تتوقف عند المجوهرات",
  },
  futureDescription: {
    en: "Freebie is born to spread happiness through gifts. We’re starting with stainless steel jewelry, with more thoughtful surprises on the way.",
    ar: "نبدأ بالمجوهرات المصنوعة من الستانلس ستيل، ولدينا المزيد من الهدايا المميزة والمفاجآت الدافئة في الطريق.",
  },
  futureAromaTitle: {
    en: "Aroma & Relaxation Gifts",
    ar: "هدايا الاسترخاء والعطور",
  },
  futureAromaBody: {
    en: "Curated soothing reed diffusers and luxury comfort sets.",
    ar: "مجموعات عطرية مهدئة وهدايا للاسترخاء.",
  },
  futureMemoryTitle: { en: "Custom Memory Keepsakes", ar: "ذكريات مخصصة" },
  futureMemoryBody: {
    en: "Personalized illustration prints and sentimental surprise boxes.",
    ar: "رسومات شخصية وصناديق مفاجآت مليئة بالمشاعر.",
  },
  futureCelebrationTitle: {
    en: "Celebration Surprise Kits",
    ar: "مجموعات الاحتفال",
  },
  futureCelebrationBody: {
    en: "All-in-one birthday, anniversary, and congratulations bundles.",
    ar: "باقات أعياد الميلاد والمناسبات الخاصة.",
  },
  productColor: { en: "Color", ar: "اللون" },
  noCategories: { en: "No categories found", ar: "لم يتم العثور على فئات" },
  allRights: { en: "All rights reserved", ar: "جميع الحقوق محفوظة" },
  expand: { en: "Expand", ar: "توسيع" },
  collapse: { en: "Collapse", ar: "طيّ" },
  fiveStars: { en: "5 out of 5 stars", ar: "٥ من ٥ نجوم" },
};

interface LanguageContextValue {
  language: Language;
  isArabic: boolean;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof typeof messages) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const syncLanguage = (event: Event) => {
      const nextLanguage = (event as CustomEvent<Language>).detail;
      if (nextLanguage === "en" || nextLanguage === "ar")
        setLanguage(nextLanguage);
    };
    window.addEventListener("freebie-language", syncLanguage);
    return () => window.removeEventListener("freebie-language", syncLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      isArabic: language === "ar",
      setLanguage,
      toggleLanguage: () => {
        const next = language === "en" ? "ar" : "en";
        setLanguage(next);
        window.dispatchEvent(
          new CustomEvent("freebie-language", { detail: next }),
        );
      },
      t: (key) => messages[key][language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
