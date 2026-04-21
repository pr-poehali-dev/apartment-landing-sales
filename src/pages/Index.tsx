import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/f17703db-a56c-466d-9eea-7fe9b4883293/files/ee795a31-8184-43e7-9ccf-ccb3aeb46b74.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/f17703db-a56c-466d-9eea-7fe9b4883293/files/787d41a2-86c4-476d-acef-a0211602749d.jpg";
const TERRACE_IMG = "https://cdn.poehali.dev/projects/f17703db-a56c-466d-9eea-7fe9b4883293/files/4dbc5a34-59c1-4d61-b616-e91eb1ae5015.jpg";

const NAV_ITEMS = [
  { label: "Преимущества", href: "#advantages" },
  { label: "Планировки", href: "#plans" },
  { label: "Галерея", href: "#gallery" },
  { label: "Локация", href: "#location" },
  { label: "Контакты", href: "#contacts" },
];

const ADVANTAGES = [
  {
    icon: "Building2",
    title: "Малоэтажная застройка",
    desc: "Всего 5 этажей — уютный масштаб, без толпы и суеты. Собственный двор и тишина.",
    accent: "#0ea5e9",
  },
  {
    icon: "Waves",
    title: "Собственная набережная",
    desc: "Дом у пруда с облагороженной набережной. Утренние прогулки — прямо из дома.",
    accent: "#1a5fa8",
  },
  {
    icon: "Leaf",
    title: "Квартиры с террасами",
    desc: "Первые этажи — с личными террасами и выходом в сад. Своё пространство на улице.",
    accent: "#0c2f5a",
  },
  {
    icon: "MapPin",
    title: "Индустриальный район",
    desc: "Развитая инфраструктура: школы, садики, ТЦ, остановки — всё рядом.",
    accent: "#2d8bce",
  },
  {
    icon: "Key",
    title: "Ключи в 2028 году",
    desc: "Успейте зафиксировать цену сейчас — входите в рынок на старте роста.",
    accent: "#c9a84c",
  },
  {
    icon: "ShieldCheck",
    title: "Комфорт-класс",
    desc: "Качественная отделка мест общего пользования, современные инженерные решения.",
    accent: "#0ea5e9",
  },
];

const PLANS = [
  {
    type: "Студия",
    area: "28–32",
    price: "от 3 600 000 ₽",
    priceM2: "128 000 ₽/м²",
    floors: "2–5 этаж",
    badge: "Хит продаж",
    features: ["Окна на пруд", "Европланировка"],
  },
  {
    type: "1-комнатная",
    area: "38–44",
    price: "от 4 800 000 ₽",
    priceM2: "122 000 ₽/м²",
    floors: "1–5 этаж",
    badge: null,
    features: ["Терраса на 1 этаже", "Гардеробная"],
  },
  {
    type: "2-комнатная",
    area: "55–68",
    price: "от 6 900 000 ₽",
    priceM2: "118 000 ₽/м²",
    floors: "1–5 этаж",
    badge: "Лучший выбор",
    features: ["Просторная кухня-гостиная", "Два санузла"],
  },
  {
    type: "3-комнатная",
    area: "78–92",
    price: "от 9 200 000 ₽",
    priceM2: "115 000 ₽/м²",
    floors: "1–5 этаж",
    badge: null,
    features: ["Панорамные окна", "Терраса на 1 этаже"],
  },
];

const GALLERY_ITEMS = [
  { src: HERO_IMG, label: "Вид на ЖК" },
  { src: INTERIOR_IMG, label: "Интерьер квартиры" },
  { src: TERRACE_IMG, label: "Терраса 1 этажа" },
  { src: HERO_IMG, label: "Набережная пруда" },
  { src: INTERIOR_IMG, label: "Кухня-гостиная" },
  { src: TERRACE_IMG, label: "Двор комплекса" },
];

function LeadForm({ light = false }: { light?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls = light
    ? "w-full px-4 py-3 rounded-xl border border-blue-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 text-base font-body"
    : "w-full px-4 py-3 rounded-xl border border-white/30 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white text-base font-body backdrop-blur";

  if (sent) {
    return (
      <div className={`rounded-2xl p-8 text-center ${light ? "bg-blue-50" : "bg-white/10 backdrop-blur"}`}>
        <div className="text-4xl mb-3">✓</div>
        <p className={`text-lg font-semibold ${light ? "text-blue-900" : "text-white"}`}>Заявка отправлена!</p>
        <p className={`mt-2 text-sm ${light ? "text-gray-500" : "text-white/70"}`}>Мы свяжемся с вами в течение 15 минут</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputCls}
        required
      />
      <input
        type="tel"
        placeholder="+7 (___) ___-__-__"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={inputCls}
        required
      />
      <button
        type="submit"
        className="w-full text-center mt-1 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300"
        style={{ background: "var(--brand-blue)" }}
      >
        Получить консультацию
      </button>
      <p className={`text-xs text-center ${light ? "text-gray-400" : "text-white/50"}`}>
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
      </p>
    </form>
  );
}

export default function Index() {
  const [activeGallery, setActiveGallery] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-body">

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "rgba(12,47,90,0.93)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--brand-sky)" }}
              >
                <Icon name="Building2" size={16} className="text-white" />
              </div>
              <span className="text-white font-bold text-lg tracking-wide">АНДРОНОВСКИЙ</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="tel:+73422000000"
              className="flex items-center gap-2 text-white font-semibold text-sm hover:text-sky-300 transition-colors"
            >
              <Icon name="Phone" size={15} />
              +7 (342) 200-00-00
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(12,47,90,0.83) 0%, rgba(26,95,168,0.65) 60%, rgba(13,148,215,0.4) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 opacity-20"
          style={{ background: "linear-gradient(0deg, rgba(14,165,233,0.5), transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-6"
                style={{ background: "linear-gradient(135deg, #bae6fd, #e0f2fe)", color: "var(--brand-navy)" }}
              >
                <Icon name="MapPin" size={12} />
                Индустриальный район, Пермь
              </div>
              <h1
                className="font-black text-white leading-tight mb-4"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                  fontFamily: "'Golos Text', sans-serif",
                }}
              >
                ЖК<br />
                <span style={{ color: "var(--brand-sky)" }}>Андроновский</span>
              </h1>
              <p className="text-white/85 text-xl mb-3 font-medium">
                Квартиры комфорт-класса у пруда
              </p>
              <p className="text-white/65 text-base mb-8 leading-relaxed max-w-lg">
                Малоэтажный дом в 5 этажей с собственной набережной. Квартиры с террасами на первых этажах. Ключи в 2028 году.
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div>
                  <div className="text-sky-300 font-black text-4xl leading-none">
                    3,6 <span className="text-2xl">млн</span>
                  </div>
                  <div className="text-white/60 text-sm mt-1">от, цена квартиры</div>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <div className="text-sky-300 font-black text-4xl leading-none">5</div>
                  <div className="text-white/60 text-sm mt-1">этажей в доме</div>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <div className="text-sky-300 font-black text-4xl leading-none">2028</div>
                  <div className="text-white/60 text-sm mt-1">год сдачи</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#plans"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "var(--brand-blue)" }}
                >
                  <Icon name="LayoutDashboard" size={18} />
                  Смотреть планировки
                </a>
                <a
                  href="tel:+73422000000"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-white border-2 border-white/80 bg-transparent hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon name="Phone" size={18} />
                  Позвонить
                </a>
              </div>
            </div>

            {/* Hero CTA Card */}
            <div>
              <div
                className="rounded-3xl p-8 max-w-sm ml-auto"
                style={{
                  background: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                }}
              >
                <h3 className="font-bold text-xl mb-2" style={{ color: "var(--brand-navy)" }}>
                  Узнать стоимость
                </h3>
                <p className="text-gray-500 text-sm mb-5">Получите подборку квартир под ваш бюджет</p>
                <LeadForm light />
              </div>
            </div>
          </div>
        </div>

        <a
          href="#advantages"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        >
          <Icon name="ChevronDown" size={32} />
        </a>
      </section>

      {/* ПРЕИМУЩЕСТВА */}
      <section id="advantages" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: "linear-gradient(135deg, #bae6fd, #e0f2fe)", color: "var(--brand-navy)" }}
            >
              Почему Андроновский
            </span>
            <h2 className="section-title">Уникальные черты<br />комплекса</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg">
              Малоэтажный дом у воды — редкость для Перми. Здесь есть то, чего не найти в обычных новостройках.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {ADVANTAGES.map((adv) => (
              <div
                key={adv.title}
                className="rounded-2xl p-7 transition-all duration-300 hover:shadow-xl group"
                style={{
                  background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 100%)",
                  border: "1px solid #dbeafe",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: adv.accent }}
                >
                  <Icon name={adv.icon} size={22} className="text-white" fallback="Star" />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--brand-navy)" }}>
                  {adv.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg, #0c2f5a 0%, #1a5fa8 50%, #2d8bce 100%)" }}
          >
            <div>
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-2">Хотите узнать подробнее?</h3>
              <p className="text-white/70">Наш менеджер ответит на все вопросы и покажет планировки</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href="tel:+73422000000"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-white border-2 border-white/80 bg-transparent hover:bg-white/15 transition-all duration-300"
              >
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
              <a
                href="#contacts"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 bg-white hover:bg-blue-50"
                style={{ color: "var(--brand-navy)" }}
              >
                <Icon name="MessageCircle" size={18} />
                Написать
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ПЛАНИРОВКИ */}
      <section id="plans" className="py-24" style={{ background: "linear-gradient(180deg, #f0f7ff 0%, #e8f4fd 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: "linear-gradient(135deg, #bae6fd, #e0f2fe)", color: "var(--brand-navy)" }}
            >
              Варианты квартир
            </span>
            <h2 className="section-title">Планировки</h2>
            <p className="text-gray-500 mt-4 text-lg">
              Студии, 1-, 2-, 3-комнатные квартиры. Есть квартиры с террасами на 1 этаже.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {PLANS.map((plan) => (
              <div
                key={plan.type}
                className="rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
                style={{ border: "1px solid #dbeafe" }}
              >
                <div
                  className="relative h-44 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #e8f4fd 0%, #bae6fd 100%)" }}
                >
                  {plan.badge && (
                    <span
                      className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
                      style={{ background: "var(--brand-blue)" }}
                    >
                      {plan.badge}
                    </span>
                  )}
                  <div className="text-center">
                    <div className="text-5xl mb-2">🏠</div>
                    <div className="font-bold text-lg" style={{ color: "var(--brand-navy)" }}>
                      {plan.area} м²
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg" style={{ color: "var(--brand-navy)" }}>
                      {plan.type}
                    </h3>
                    <span className="text-xs text-gray-400">{plan.floors}</span>
                  </div>
                  <div className="text-2xl font-black mb-1" style={{ color: "var(--brand-blue)" }}>
                    {plan.price}
                  </div>
                  <div className="text-xs text-gray-400 mb-4">{plan.priceM2}</div>
                  <ul className="space-y-1 mb-5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="Check" size={13} className="text-sky-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contacts"
                    className="block w-full text-center py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300"
                    style={{ background: "var(--brand-blue)" }}
                  >
                    Узнать подробнее
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              Нет подходящего варианта? Уточните у менеджера — есть ещё не опубликованные лоты
            </p>
            <a
              href="tel:+73422000000"
              className="inline-flex items-center gap-2 font-semibold text-lg hover:underline"
              style={{ color: "var(--brand-blue)" }}
            >
              <Icon name="Phone" size={18} />
              +7 (342) 200-00-00
            </a>
          </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: "linear-gradient(135deg, #bae6fd, #e0f2fe)", color: "var(--brand-navy)" }}
            >
              Посмотрите сами
            </span>
            <h2 className="section-title">Галерея</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ aspectRatio: i === 0 || i === 3 ? "16/10" : "4/3" }}
                onClick={() => setActiveGallery(i)}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-sm">{item.label}</span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur flex items-center justify-center">
                    <Icon name="ZoomIn" size={14} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="tel:+73422000000"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--brand-blue)" }}
            >
              <Icon name="Phone" size={18} />
              Записаться на показ
            </a>
          </div>
        </div>

        {activeGallery !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setActiveGallery(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white"
              onClick={() => setActiveGallery(null)}
            >
              <Icon name="X" size={32} />
            </button>
            <img
              src={GALLERY_ITEMS[activeGallery].src}
              alt=""
              className="max-w-full max-h-full rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </section>

      {/* ЛОКАЦИЯ */}
      <section id="location" className="py-24" style={{ background: "linear-gradient(180deg, #f0f7ff 0%, #e8f4fd 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
              style={{ background: "linear-gradient(135deg, #bae6fd, #e0f2fe)", color: "var(--brand-navy)" }}
            >
              Где находится
            </span>
            <h2 className="section-title">Локация</h2>
            <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
              Индустриальный район Перми — устоявшийся городской район с развитой инфраструктурой.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="rounded-3xl overflow-hidden shadow-xl" style={{ height: "420px" }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=56.245%2C58.095&z=14&l=map&pt=56.245%2C58.095%2Cpm2rdm"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="Карта ЖК Андроновский"
              />
            </div>

            <div>
              <h3 className="font-bold text-2xl mb-6" style={{ color: "var(--brand-navy)" }}>
                Рядом с домом
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: "GraduationCap",
                    label: "Школы",
                    items: ["СОШ №102 — 5 мин пешком", "СОШ №145 — 8 мин пешком"],
                  },
                  {
                    icon: "Baby",
                    label: "Детские сады",
                    items: ["МДОУ №310 — 4 мин пешком", "МДОУ №175 — 7 мин пешком"],
                  },
                  {
                    icon: "ShoppingCart",
                    label: "Магазины и ТЦ",
                    items: ["Магнит — 3 мин", "ТЦ Семья — 10 мин"],
                  },
                  {
                    icon: "Bus",
                    label: "Транспорт",
                    items: ["Остановка автобуса — 2 мин", "До центра — 25 мин"],
                  },
                  {
                    icon: "Stethoscope",
                    label: "Медицина",
                    items: ["Поликлиника №5 — 10 мин", "ГКБ №21 — 15 мин"],
                  },
                ].map((cat) => (
                  <div key={cat.label} className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "#e0f2fe" }}
                    >
                      <Icon name={cat.icon} size={18} className="text-sky-600" fallback="MapPin" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: "var(--brand-navy)" }}>
                        {cat.label}
                      </div>
                      {cat.items.map((item) => (
                        <div key={item} className="text-gray-500 text-sm">{item}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "var(--brand-navy)" }}
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Хотите увидеть всё вживую?</h3>
              <p className="text-white/60 text-sm">Организуем бесплатный выезд на объект</p>
            </div>
            <a
              href="tel:+73422000000"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              style={{ background: "var(--brand-blue)" }}
            >
              <Icon name="Car" size={18} />
              Поехать на объект
            </a>
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section
        id="contacts"
        className="py-24"
        style={{ background: "linear-gradient(135deg, #0c2f5a 0%, #1a5fa8 50%, #2d8bce 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sky-300 text-sm font-semibold uppercase tracking-widest mb-4">
              Оставить заявку
            </span>
            <h2
              className="font-black text-white mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontFamily: "'Golos Text', sans-serif" }}
            >
              Получите консультацию<br />
              <span style={{ color: "var(--brand-sky)" }}>бесплатно</span>
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Отвечаем за 15 минут в рабочее время. Подберём планировку под ваш бюджет.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
            <div
              className="rounded-3xl p-8"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <h3 className="text-white font-bold text-xl mb-6">Оставить заявку</h3>
              <LeadForm />
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: "Phone",
                  label: "Телефон отдела продаж",
                  content: (
                    <a href="tel:+73422000000" className="text-white text-xl font-bold hover:text-sky-300 transition-colors">
                      +7 (342) 200-00-00
                    </a>
                  ),
                },
                {
                  icon: "Clock",
                  label: "Режим работы",
                  content: <div className="text-white font-semibold">Пн–Вс: 9:00 – 20:00</div>,
                },
                {
                  icon: "MapPin",
                  label: "Адрес офиса продаж",
                  content: (
                    <>
                      <div className="text-white font-semibold">г. Пермь, Индустриальный район</div>
                      <div className="text-white/60 text-sm">Уточните у менеджера</div>
                    </>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <Icon name={item.icon} size={20} className="text-sky-300" fallback="Info" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">{item.label}</div>
                    {item.content}
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                {["WhatsApp", "Telegram"].map((app) => (
                  <a
                    key={app}
                    href="#"
                    className="px-5 py-3 rounded-xl font-medium text-white text-sm transition-colors hover:bg-white/20"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    {app}
                  </a>
                ))}
              </div>

              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <p className="text-white font-semibold mb-1">Быстрый звонок</p>
                <p className="text-white/60 text-sm mb-4">Оставьте номер — перезвоним за 15 минут</p>
                <div className="flex gap-3">
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="flex-1 px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white text-sm"
                    style={{ border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)" }}
                  />
                  <button
                    className="px-5 py-3 rounded-xl font-semibold text-white text-sm transition-colors"
                    style={{ background: "var(--brand-sky)" }}
                  >
                    Звонок
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--brand-navy)" }} className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "var(--brand-sky)" }}
              >
                <Icon name="Building2" size={14} className="text-white" />
              </div>
              <span className="text-white font-bold">АНДРОНОВСКИЙ</span>
            </div>
            <div className="text-white/40 text-sm text-center">
              © 2024 ЖК Андроновский, Пермь. Все права защищены.{" "}
              Проектная декларация на сайте застройщика.
            </div>
            <a href="tel:+73422000000" className="text-white/70 hover:text-white text-sm transition-colors">
              +7 (342) 200-00-00
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}