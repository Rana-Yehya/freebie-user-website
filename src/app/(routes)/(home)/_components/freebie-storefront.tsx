"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const DISCOUNT = 15;
const GIFT_CARD_PRICE = 30;
const products = [
  { id: "honey-drop", name: "Honey Drop Necklace", type: "Necklaces", price: 680, image: "/freebie-necklace.png", note: "A little sweetness, close to her heart." },
  { id: "hive-hoops", name: "Little Hive Hoops", type: "Earrings", price: 540, image: "/freebie-earrings.png", note: "A golden detail for every day." },
  { id: "always-bracelet", name: "Always Bracelet", type: "Bracelets", price: 620, image: "/freebie-bracelet.png", note: "A keepsake she can wear, always." },
  { id: "golden-hour", name: "Golden Hour Layers", type: "Necklaces", price: 790, image: "/freebie-layered-necklace.png", note: "Layers of love, made to stay." },
  { id: "honey-drop-mini", name: "Honey Drop Mini", type: "Necklaces", price: 490, image: "/freebie-necklace.png", note: "Small in size, full of feeling." },
  { id: "sweetheart-hoops", name: "Sweetheart Hoops", type: "Earrings", price: 590, image: "/freebie-earrings.png", note: "A thoughtful little reminder." },
];
const reviews = [
  { quote: "The packaging made the whole gift feel so personal. She absolutely loved it.", name: "Mariam A.", detail: "A gift for her sister" },
  { quote: "Beautiful quality and such a sweet message inside. I will definitely order again.", name: "Nour S.", detail: "A just-because surprise" },
  { quote: "Affordable, elegant, and arrived ready to give. It made her day.", name: "Salma R.", detail: "A birthday gift" },
];
const categories = ["All pieces", "Necklaces", "Earrings", "Bracelets"];

function Price({ amount }: { amount: number }) {
  const discounted = Math.round(amount * (1 - DISCOUNT / 100));
  return <div className="flex items-baseline gap-2"><span className="font-semibold text-[#35291c]">{discounted} EGP</span><span className="text-xs text-[#9a8b78] line-through">{amount} EGP</span></div>;
}

function ProductCard({ product, selected, giftCard, onToggle, onGiftCard }: { product: (typeof products)[number]; selected: number; giftCard: boolean; onToggle: (id: string, delta: number) => void; onGiftCard: (id: string) => void }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <article className="freebie-card group overflow-hidden rounded-[1.35rem] border border-[#eee5d8] bg-white">
      <div className="relative aspect-[4/4.5] overflow-hidden bg-[#f6f0e7]">
        {!loaded && <div className="absolute inset-0 z-[1] animate-pulse bg-gradient-to-br from-[#f7f0e4] via-[#eee5d8] to-[#f7f0e4]" aria-label="Loading product image" />}
        <Image src={product.image} alt={`${product.name}, a gold-tone stainless steel accessory`} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw" className={`object-cover transition duration-700 group-hover:scale-[1.04] ${loaded ? "opacity-100" : "opacity-0"}`} onLoad={() => setLoaded(true)} />
        <span className="absolute left-3 top-3 rounded-full bg-[#fffaf1]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.14em] text-[#8b672d]">-{DISCOUNT}%</span>
      </div>
      <div className="p-4 sm:p-5">
        <p className="text-[10px] uppercase tracking-[.18em] text-[#ac8c59]">{product.type}</p>
        <h3 className="mt-1 text-lg font-semibold text-[#35291c]">{product.name}</h3>
        <p className="mt-1 min-h-10 text-xs leading-5 text-[#897d6d]">{product.note} Stainless steel, made to last with her — so she can remember you whenever she wears it.</p>
        <div className="mt-3"><Price amount={product.price} /></div>
        <label className="mt-4 flex cursor-pointer items-start gap-2 border-t border-[#f0e9df] pt-3 text-xs leading-5 text-[#756959]">
          <input type="checkbox" checked={giftCard} onChange={() => onGiftCard(product.id)} className="mt-1 accent-[#c28a31]" />
          Add a handwritten gift card <span className="whitespace-nowrap font-medium text-[#9b7029]">+{GIFT_CARD_PRICE} EGP</span>
        </label>
        <div className="mt-4 flex items-center justify-between gap-3">
          {selected > 0 ? <div className="flex items-center gap-3 rounded-full bg-[#f8f2e8] px-3 py-2"><button aria-label={`Remove one ${product.name}`} onClick={() => onToggle(product.id, -1)} className="text-lg leading-none">−</button><span className="min-w-3 text-center text-sm">{selected}</span><button aria-label={`Add one ${product.name}`} onClick={() => onToggle(product.id, 1)} className="text-lg leading-none">+</button></div> : <span className="text-xs text-[#a29686]">Ready to surprise her?</span>}
          <button onClick={() => onToggle(product.id, 1)} className="rounded-full bg-[#382b1d] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#9d712f]">{selected ? "Add one" : "Choose gift"}</button>
        </div>
      </div>
    </article>
  );
}

function CustomerReviews() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % reviews.length), 5200);
    return () => window.clearInterval(timer);
  }, []);
  return <section id="reviews" className="bg-[#f8f3ea] px-5 py-20 text-center" aria-label="Customer reviews">
    <p className="text-[10px] uppercase tracking-[.24em] text-[#a77c38]">Kind words, kept close</p><h2 className="mt-3 font-serif text-3xl text-[#382b1d] sm:text-4xl">Customer Reviews</h2>
    <div className="mx-auto mt-9 max-w-2xl" aria-live="polite"><div key={active} className="review-fade"><span className="text-2xl tracking-[.2em] text-[#d0a24e]" aria-label="5 out of 5 stars">★★★★★</span><blockquote className="mt-5 font-serif text-xl leading-relaxed text-[#514332] sm:text-2xl">“{reviews[active].quote}”</blockquote><p className="mt-6 text-sm font-semibold text-[#382b1d]">{reviews[active].name}</p><p className="mt-1 text-xs text-[#897d6d]">{reviews[active].detail}</p></div></div>
    <div className="mt-7 flex justify-center gap-2">{reviews.map((review, index) => <button key={review.name} onClick={() => setActive(index)} aria-label={`Show review ${index + 1}`} aria-current={active === index} className={`h-2 rounded-full transition-all ${active === index ? "w-7 bg-[#b88a3d]" : "w-2 bg-[#d9ccba]"}`} />)}</div>
  </section>;
}

export default function FreebieStorefront() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All pieces");
  const [page, setPage] = useState(1);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [giftCards, setGiftCards] = useState<Record<string, boolean>>({});
  const [dark, setDark] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [cardLoaded, setCardLoaded] = useState(false);
  useEffect(() => {
    const handleTheme = (event: Event) => setDark((event as CustomEvent<boolean>).detail);
    const handleLanguage = (event: Event) => setLanguage((event as CustomEvent<"en" | "ar">).detail);
    window.addEventListener("freebie-theme", handleTheme);
    window.addEventListener("freebie-language", handleLanguage);
    return () => {
      window.removeEventListener("freebie-theme", handleTheme);
      window.removeEventListener("freebie-language", handleLanguage);
    };
  }, []);
  const filtered = useMemo(() => products.filter((item) => (category === "All pieces" || item.type === category) && item.name.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / 4));
  const visibleProducts = filtered.slice((page - 1) * 4, page * 4);
  const selected = products.filter((item) => (quantities[item.id] ?? 0) > 0);
  const subtotal = selected.reduce((sum, item) => sum + Math.round(item.price * (1 - DISCOUNT / 100)) * (quantities[item.id] ?? 0) + (giftCards[item.id] ? GIFT_CARD_PRICE : 0), 0);
  const whatsappText = [language === "ar" ? "مرحباً فريبي! أريد تجهيز هديتي." : "Hi Freebie! I’m ready to surprise her!", ...selected.map((item) => `${item.name} × ${quantities[item.id]} — ${Math.round(item.price * (1 - DISCOUNT / 100)) * (quantities[item.id] ?? 0)} EGP${giftCards[item.id] ? ` + gift card (${GIFT_CARD_PRICE} EGP)` : ""}`), `${language === "ar" ? "الإجمالي" : "Total"}: ${subtotal} EGP`].filter(Boolean).join("\n");
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;
  const updateQuantity = (id: string, delta: number) => setQuantities((current) => ({ ...current, [id]: Math.max(0, (current[id] ?? 0) + delta) }));
  const setFilter = (value: string) => { setCategory(value); setPage(1); };
  const toggleGiftCard = (id: string) => setGiftCards((current) => ({ ...current, [id]: !current[id] }));
  const pageClass = dark ? "freebie-page freebie-dark" : "freebie-page";

  return <main lang={language} dir={language === "ar" ? "rtl" : "ltr"} className={pageClass}>
    <div className="relative overflow-hidden bg-[#f8f2e8] px-5 pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div className="honeycomb honeycomb-one" aria-hidden="true" /><div className="honeycomb honeycomb-two" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="hero-copy max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dfc99f] bg-white/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#8f6b35]"><span className="size-1.5 rounded-full bg-[#c18a33]" /> A little happiness, wrapped for you</span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-[-.04em] text-[#392b1c] sm:text-6xl lg:text-7xl">Give her a little <em className="text-[#bd8a3d]">forever.</em></h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[#736452]">Thoughtful gifts and stainless steel keepsakes, made to say what your heart already knows — beautifully, and within reach.</p>
          <p className="mt-4 font-serif text-xl text-[#876638]">Happiness... Always here <span className="mx-2 text-[#d1aa68]">·</span><span lang="ar" dir="rtl">السعادة... دايما هنا</span></p>
          <div className="mt-8 flex flex-wrap items-center gap-3"><a href="#collection" className="rounded-full bg-[#382b1d] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#9c7132]">Explore the collection <span aria-hidden="true">↗</span></a><span className="text-xs text-[#8b7a64]">Made to make someone smile.</span></div>
        </div>
        <div className="hero-art relative mx-auto w-full max-w-[540px]">
          <div className="relative aspect-[1.2/1] overflow-hidden rounded-[48%_48%_1.5rem_1.5rem] border-[7px] border-white/70 bg-[#eee5d8] shadow-[0_25px_65px_rgba(83,58,24,.15)]">{!heroLoaded && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#f7f0e4] via-[#eee5d8] to-[#f7f0e4]" aria-label="Loading gift packaging image" />}<Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IfVtgix1q821QvmIrIebEmtc0PgdIT.png" alt="Freebie gift boxes with honeycomb details and golden ribbons, ready to make a special moment" fill priority sizes="(max-width: 1024px) 90vw, 45vw" onLoad={() => setHeroLoaded(true)} className={`object-cover transition-opacity duration-500 ${heroLoaded ? "opacity-100" : "opacity-0"}`} /></div>
          <div className="absolute -bottom-5 -left-2 rounded-2xl border border-[#efe2cb] bg-white/95 px-5 py-4 shadow-lg sm:-left-8"><span className="block text-[10px] uppercase tracking-[.16em] text-[#a18250]">A little extra sweetness</span><span className="mt-1 block font-serif text-lg text-[#3c2e1e]">Save {DISCOUNT}% on every piece</span></div>
          <div className="absolute -right-2 top-8 rounded-full bg-[#fffaf0] px-4 py-3 font-serif text-sm text-[#96703a] shadow-lg sm:-right-6">Made with feeling</div>
        </div>
      </div>
    </div>

    <section className="px-5 py-16 sm:py-20"><div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
      {[{ n: "01", title: "A feeling, made tangible", body: "Every Freebie starts with one thought: someone deserves to feel loved today." }, { n: "02", title: "Lasting little reminders", body: "Our stainless steel jewelry stays with her, so she can remember you whenever she wears it." }, { n: "03", title: "Lovely, not lavish", body: "Elegant keepsakes and considered prices — because meaningful gifts should feel within reach." }].map((item) => <article key={item.n} className="rounded-2xl border border-[#eee5d8] bg-white p-6 sm:p-7"><span className="font-serif text-sm italic text-[#bb8b41]">{item.n} /</span><h2 className="mt-4 font-serif text-xl text-[#3a2d1e]">{item.title}</h2><p className="mt-3 text-sm leading-6 text-[#857969]">{item.body}</p></article>)}
    </div></section>

    <section id="collection" className="scroll-mt-20 bg-[#fdfbf8] px-5 py-20 sm:py-24"><div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-[10px] uppercase tracking-[.24em] text-[#a77c38]">Small things. Big feelings.</p><h2 className="mt-3 font-serif text-4xl tracking-[-.03em] text-[#382b1d] sm:text-5xl">The gift edit</h2><p className="mt-3 max-w-lg text-sm leading-6 text-[#857969]">Choose something she&apos;ll keep close. Every piece is stainless steel, made to last with her — and to remind her of you, every time she wears it.</p></div><div className="flex items-center gap-2 rounded-full border border-[#e9dfd0] bg-white px-4 py-3 sm:w-64"><span aria-hidden="true" className="text-[#9b8565]">⌕</span><input aria-label="Search jewelry and gifts" value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Find a little something…" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#a89d8d]" /></div></div>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter products by category">{categories.map((item) => <button key={item} onClick={() => setFilter(item)} aria-pressed={category === item} className={`rounded-full px-4 py-2.5 text-xs transition ${category === item ? "bg-[#382b1d] text-white" : "border border-[#e9dfd0] bg-white text-[#756959] hover:border-[#bb8b41]"}`}>{item}</button>)}</div>
      {visibleProducts.length ? <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} selected={quantities[product.id] ?? 0} giftCard={Boolean(giftCards[product.id])} onToggle={updateQuantity} onGiftCard={toggleGiftCard} />)}</div> : <p className="mt-8 rounded-2xl bg-white p-8 text-center text-sm text-[#756959]">No little treasures found. Try another search.</p>}
      {pageCount > 1 && <nav className="mt-9 flex items-center justify-center gap-3" aria-label="Product pages"><button onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} className="rounded-full border border-[#e9dfd0] px-4 py-2 text-xs disabled:opacity-40">← Previous</button><span className="text-xs text-[#897d6d]">Page {page} of {pageCount}</span><button onClick={() => setPage((current) => Math.min(pageCount, current + 1))} disabled={page === pageCount} className="rounded-full border border-[#e9dfd0] px-4 py-2 text-xs disabled:opacity-40">Next →</button></nav>}
    </div></section>

    <section className="px-5 py-20 sm:py-24"><div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr]"><div className="relative overflow-hidden rounded-[1.5rem] bg-[#f5efe3]">{!cardLoaded && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#f7f0e4] via-[#eee5d8] to-[#f7f0e4]" aria-label="Loading gift card image" />}<Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pzi32EY3c4ozeT79nOhkbK4Ede86MM.png" alt="Freebie gift card with a blank space for a handwritten message and a cheerful honey bee illustration" width={1200} height={900} sizes="(max-width: 1024px) 90vw, 50vw" onLoad={() => setCardLoaded(true)} className={`h-auto w-full object-cover transition-opacity duration-500 ${cardLoaded ? "opacity-100" : "opacity-0"}`} /></div><div><p className="text-[10px] uppercase tracking-[.24em] text-[#a77c38]">A note from you, tucked inside</p><h2 className="mt-3 font-serif text-4xl leading-tight text-[#382b1d]">A little card.<br /><em className="text-[#bd8a3d]">A lot of love.</em></h2><p className="mt-5 text-sm leading-7 text-[#756959]">Every Freebie box can hold a special card, ready for your own words. It opens like a little book, with a dainty satin tie to keep it snug and safe.</p><div className="mt-5 rounded-xl border border-[#ede2d0] bg-[#fffaf2] p-4 font-serif text-base leading-7 text-[#76562d]" lang="ar" dir="rtl">زي قطرات العسل... هديتك هنا عشان نضيف حلاوة ليومك</div><p className="mt-4 text-xs leading-5 text-[#918574]">{language === "ar" ? "بطاقة الهدية قابلة للتخصيص، ويمكننا كتابة رسالتك بخط اليد لتصبح ذكرى مميزة." : "Your gift card is editable and can include a handwritten message or signature, making it a keepsake of its own."} {language === "ar" ? "إضافة البطاقة بـ 30 جنيهًا." : "Add a handwritten gift card for 30 EGP."}</p></div></div></section>

	    <section id="future-plans" className="px-5 py-16 sm:py-20"><div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-[#9a7100]/70 bg-[#17191a] px-6 py-10 text-[#f4eee4] sm:px-10 sm:py-12"><p className="inline-flex rounded-full bg-[#a77700] px-3 py-1 text-[10px] font-semibold uppercase tracking-[.18em] text-white">✦ {language === "ar" ? "قريبًا" : "Happiness... always here"}</p><h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">{language === "ar" ? "السعادة لا تتوقف عند المجوهرات" : "Happiness Does Not Stop at Jewelry"}</h2><p className="mt-4 max-w-3xl text-sm leading-6 text-[#d0c8bb]">{language === "ar" ? "نبدأ بالمجوهرات المصنوعة من الستانلس ستيل، ولدينا المزيد من الهدايا المميزة والمفاجآت الدافئة في الطريق." : "Freebie is born to spread happiness through gifts. We’re starting with stainless steel jewelry, with more thoughtful surprises on the way."}</p><div className="mt-8 grid gap-4 md:grid-cols-3">{(language === "ar" ? [{ title: "هدايا الاسترخاء والعطور", body: "مجموعات عطرية مهدئة وهدايا للاسترخاء." }, { title: "ذكريات مخصصة", body: "رسومات شخصية وصناديق مفاجآت مليئة بالمشاعر." }, { title: "مجموعات الاحتفال", body: "باقات أعياد الميلاد والمناسبات الخاصة." }] : [{ title: "Aroma & Relaxation Gifts", body: "Curated soothing reed diffusers and luxury comfort sets." }, { title: "Custom Memory Keepsakes", body: "Personalized illustration prints and sentimental surprise boxes." }, { title: "Celebration Surprise Kits", body: "All-in-one birthday, anniversary, and congratulations bundles." }]).map((item) => <article key={item.title} className="rounded-2xl border border-[#8a6800] bg-[#1b1d1e] p-5"><span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#493700] text-lg text-[#f5a20b]" aria-hidden="true">✧</span><h3 className="mt-4 flex items-center justify-between gap-2 text-sm font-semibold">{item.title}<span className="rounded bg-[#403000] px-2 py-1 text-[9px] uppercase tracking-wider text-[#ffad29]">{language === "ar" ? "قريبًا" : "Soon"}</span></h3><p className="mt-2 text-xs leading-5 text-[#b8b0a5]">{item.body}</p></article>)}</div><div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-[#f0a035] sm:flex-row sm:items-center"><span>{language === "ar" ? "هدفنا: ابتسامات حقيقية بهدايا أنيقة وفي المتناول." : "Our goal: genuine smiles through accessible, high-elegance gifts."}</span><span className="font-serif text-[#e2d0ae]">Freebie · Happiness... Always here</span></div></div></section>

    <CustomerReviews />

    <footer className="border-t border-[#eee5d8] bg-[#fdfbf8] px-5 py-8"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row"><div className="flex items-center gap-3"><Image src="/logo.png" alt="" width={34} height={34} /><span className="font-serif text-xl text-[#382b1d]">Freebie</span><span className="hidden text-xs text-[#9a8d7c] sm:inline">Happiness... Always here · السعادة... دايما هنا</span></div><div className="flex items-center gap-4"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-link"><Image src="/facebook.svg" alt="" width={15} height={15} /></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link"><Image src="/instagram.svg" alt="" width={15} height={15} /></a><a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok" className="social-link"><Image src="/tiktok.svg" alt="" width={15} height={15} /></a></div><p className="text-[10px] text-[#a29686]">© 2026 Freebie. Made with feeling.</p></div></footer>
    {selected.length > 0 && <aside aria-label={language === "ar" ? "ملخص الهدايا" : "Gift selection summary"} className="fixed inset-x-3 bottom-3 z-30 mx-auto max-w-3xl rounded-2xl border border-[#ead7b5] bg-[#fffdf9]/95 p-3 shadow-[0_12px_45px_rgba(54,38,18,.2)] backdrop-blur-lg sm:inset-x-5 sm:bottom-5 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-5"><div className="min-w-0"><p className="text-xs font-semibold text-[#382b1d]">{language === "ar" ? `تم اختيار ${selected.length} هدية` : `${selected.length} ${selected.length === 1 ? "gift" : "gifts"} selected`} <span className="font-normal text-[#8b7a64]">· {subtotal} EGP</span></p><p className="mt-1 truncate text-[10px] text-[#897d6d]">{selected.map((item) => item.name).join(" · ")}</p></div><a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-2 inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#27834a] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#1e6d3c] sm:mt-0 sm:w-auto"><span aria-hidden="true">◉</span>{language === "ar" ? "تابع عبر واتساب" : "Continue on WhatsApp"}</a></aside>}
  </main>;
}
