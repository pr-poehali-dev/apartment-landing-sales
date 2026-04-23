import { useState } from "react";
import Icon from "@/components/ui/icon";

/* ─── Фото из Google Drive ─── */
const GD = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

const IMG_HERO = GD("1XA7Qv9jswAxz5BAiNAFKJAu1M0btAd52");

const IMG_FINISH = [
  GD("1BxmbqrV_CqRHw4kUf_AFtaSuYC0tchUP"),
  GD("18RZTXWLVEJkxPLot4MLE0Vn9yDz9f8Mr"),
  GD("18Y4UMXE9wPED3OtgCxSOniI-4xzHREAb"),
  GD("1lsR2F-6pj0-k6tASpRJ0Hh33hDglwZkU"),
];

const NAV = [
  { label: "Преимущества", href: "#advantages" },
  { label: "Планировки",   href: "#plans" },
  { label: "Галерея",      href: "#gallery" },
  { label: "Локация",      href: "#location" },
  { label: "Контакты",     href: "#contacts" },
];

const ADVANTAGES = [
  { icon: "Building2",    title: "Малоэтажность",         desc: "Всего 5 этажей — уютный масштаб, без толпы и суеты.", accent: "var(--c-forest)" },
  { icon: "Waves",        title: "Набережная пруда",       desc: "Облагороженная набережная прямо у дома — утренние прогулки без машин.", accent: "var(--c-sky)" },
  { icon: "Leaf",         title: "Террасы на 1 этаже",     desc: "Квартиры первого этажа с личными террасами и выходом в зелёный сад.", accent: "var(--c-teal)" },
  { icon: "MapPin",       title: "Развитый район",         desc: "Индустриальный район Перми: школы, сады, ТЦ, остановки — всё рядом.", accent: "var(--c-forest)" },
  { icon: "Key",          title: "Ключи в 2027 году",      desc: "Зафиксируйте цену на старте.", accent: "var(--c-sky)" },
  { icon: "ShieldCheck",  title: "Комфорт-класс",          desc: "Качественная отделка, современные инженерные решения, видеонаблюдение.", accent: "var(--c-teal)" },
];

const PLANS = [
  { type: "Студия",        area: "28–32", price: "от 3 600 000 ₽", m2: "128 000 ₽/м²", floor: "2–5 эт.", badge: "Хит",          feat: ["Европланировка", "Окна на пруд"], emoji: "🏠" },
  { type: "1-комнатная",  area: "38–44", price: "от 4 800 000 ₽", m2: "122 000 ₽/м²", floor: "1–5 эт.", badge: null,           feat: ["Терраса на 1 эт.", "Гардеробная"], emoji: "🛋️" },
  { type: "2-комнатная",  area: "55–68", price: "от 6 900 000 ₽", m2: "118 000 ₽/м²", floor: "1–5 эт.", badge: "Лучший выбор", feat: ["Кухня-гостиная", "2 санузла"],    emoji: "🪟" },
  { type: "Евро 3-комн.", area: "78–92", price: "от 9 200 000 ₽", m2: "115 000 ₽/м²", floor: "1–5 эт.", badge: null,           feat: ["Панорамные окна", "Терраса на 1 эт."], emoji: "🌿" },
];

const GALLERY = [
  { src: GD("1wLuhmSY0dF9k4LVPC6tNSuzz9VBeLWuo"), label: "Вид на ЖК" },
  { src: GD("1vzEGQNuKB3AC3nBBxYYxORoNjZt-_rTQ"), label: "Фасад" },
  { src: GD("1ZSpGEJKHhja1oFEEpKOnkA9o5RWMO9N9"), label: "Территория" },
  { src: GD("10AJRH3Xnqi3FxRx8LHgEMONZIAlvogGq"), label: "Набережная" },
  { src: GD("1CJrgIg_vWCC6kQl5dgmvlU4AIL7N-T5-"), label: "Двор" },
  { src: GD("1Ht_JjVdv3dHjw_7XSH6cuPgBXHM2z9JA"), label: "Вид на пруд" },
];

const INFRA = [
  { icon: "GraduationCap", label: "Школы",       items: ["СОШ №102 — 5 мин", "СОШ №145 — 8 мин"] },
  { icon: "Baby",          label: "Детские сады", items: ["МДОУ №310 — 4 мин", "МДОУ №175 — 7 мин"] },
  { icon: "ShoppingCart",  label: "Магазины",     items: ["Магнит — 3 мин", "ТЦ Семья — 10 мин"] },
  { icon: "Bus",           label: "Транспорт",    items: ["Остановка — 2 мин", "Центр — 25 мин"] },
  { icon: "Stethoscope",   label: "Медицина",     items: ["Поликлиника №5 — 10 мин", "ГКБ №21 — 15 мин"] },
];

/* ─── Lead Form ─── */
function LeadForm({ dark = false }: { dark?: boolean }) {
  const [name, setName]   = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent]   = useState(false);

  if (sent) {
    return (
      <div className={`rounded-2xl p-8 text-center ${dark ? "bg-white/10" : "bg-white"}`}>
        <div className="text-4xl mb-3">✓</div>
        <p className={`text-lg font-bold ${dark ? "text-white" : ""}`} style={dark ? {} : { color: "var(--c-dark)" }}>Заявка принята!</p>
        <p className={`mt-1 text-sm ${dark ? "text-white/60" : "text-gray-500"}`}>Перезвоним в течение 15 минут</p>
      </div>
    );
  }

  const inp = dark
    ? "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/25 text-white placeholder-white/45 focus:outline-none focus:border-white/60 text-sm"
    : "w-full px-4 py-3 rounded-xl border text-sm focus:outline-none"

  const borderColor = dark ? {} : { borderColor: "var(--c-mint)", background: "white", color: "var(--c-dark)" };

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-3">
      <input type="text"  placeholder="Ваше имя"          value={name}  onChange={e => setName(e.target.value)}  className={inp} style={borderColor} required />
      <input type="tel"   placeholder="+7 (___) ___-__-__" value={phone} onChange={e => setPhone(e.target.value)} className={inp} style={borderColor} required />
      <button
        type="submit"
        className="w-full py-3.5 rounded-xl font-semibold text-white text-sm mt-1 transition-all duration-300 hover:-translate-y-0.5"
        style={{ background: "var(--c-forest)" }}
      >
        Получить консультацию
      </button>
      <p className={`text-xs text-center ${dark ? "text-white/40" : "text-gray-400"}`}>
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
      </p>
    </form>
  );
}

function MortgageCalc() {
  const [price, setPrice] = useState(3568000);
  const [down, setDown] = useState(30);
  const [years, setYears] = useState(25);
  const rate = 6;

  const loanAmount = price * (1 - down / 100);
  const monthlyRate = rate / 100 / 12;
  const n = years * 12;
  const payment = Math.round(loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1));
  const totalPay = Math.round(payment * n);
  const overpay = Math.round(totalPay - loanAmount);

  const fmt = (v: number) => v.toLocaleString("ru-RU");

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-7">
        {/* Стоимость */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium" style={{ color: "var(--c-dark)" }}>Стоимость квартиры</span>
            <span className="font-bold text-sm" style={{ color: "var(--c-forest)" }}>{fmt(price)} ₽</span>
          </div>
          <input type="range" min={3568000} max={8000000} step={50000} value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="w-full accent-[var(--c-teal)] h-2 rounded-full cursor-pointer" />
          <div className="flex justify-between text-xs text-gray-400 mt-1"><span>3,6 млн</span><span>8 млн</span></div>
        </div>

        {/* Первый взнос */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium" style={{ color: "var(--c-dark)" }}>Первоначальный взнос</span>
            <span className="font-bold text-sm" style={{ color: "var(--c-forest)" }}>{down}% — {fmt(Math.round(price * down / 100))} ₽</span>
          </div>
          <input type="range" min={30} max={90} step={1} value={down}
            onChange={e => setDown(Number(e.target.value))}
            className="w-full accent-[var(--c-teal)] h-2 rounded-full cursor-pointer" />
          <div className="flex justify-between text-xs text-gray-400 mt-1"><span>30%</span><span>90%</span></div>
        </div>

        {/* Срок */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium" style={{ color: "var(--c-dark)" }}>Срок кредита</span>
            <span className="font-bold text-sm" style={{ color: "var(--c-forest)" }}>{years} лет</span>
          </div>
          <input type="range" min={5} max={30} step={1} value={years}
            onChange={e => setYears(Number(e.target.value))}
            className="w-full accent-[var(--c-teal)] h-2 rounded-full cursor-pointer" />
          <div className="flex justify-between text-xs text-gray-400 mt-1"><span>5 лет</span><span>30 лет</span></div>
        </div>

        <div className="text-xs text-gray-400 leading-relaxed">
          Ставка 6% — семейная ипотека с господдержкой. Расчёт ориентировочный.
        </div>
      </div>

      {/* Результат */}
      <div className="rounded-2xl p-8 flex flex-col gap-5" style={{ background: "var(--c-dark)" }}>
        <div>
          <div className="text-white/50 text-sm mb-1">Ежемесячный платёж</div>
          <div className="font-black text-white" style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}>
            {fmt(payment)} ₽
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 space-y-3">
          {[
            { label: "Сумма кредита", val: `${fmt(Math.round(loanAmount))} ₽` },
            { label: "Переплата", val: `${fmt(overpay)} ₽` },
            { label: "Ставка", val: `${rate}%` },
          ].map(r => (
            <div key={r.label} className="flex justify-between">
              <span className="text-white/50 text-sm">{r.label}</span>
              <span className="text-white font-semibold text-sm">{r.val}</span>
            </div>
          ))}
        </div>
        <a href="#contacts"
          className="mt-2 w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:opacity-90"
          style={{ background: "var(--c-mint)", color: "var(--c-dark)" }}>
          Получить персональное предложение
        </a>
      </div>
    </div>
  );
}

export default function Index() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Golos Text', sans-serif", background: "var(--c-sand)" }}>

      {/* ═══ NAVBAR ═══ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "rgba(44,74,67,0.95)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--c-teal)" }}>
              <Icon name="Building2" size={16} className="text-white" />
            </div>
            <span className="text-white font-bold text-base tracking-widest uppercase">Андроновский</span>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {NAV.map(n => (
              <a key={n.href} href={n.href} className="text-sm text-white/75 hover:text-white transition-colors font-medium">{n.label}</a>
            ))}
          </div>

          <a href="tel:+73422000000" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-sm font-semibold">
            <Icon name="Phone" size={14} />
            +7 (342) 200-00-00
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG_HERO})` }} />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 pt-36 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">

            {/* Text — 3 cols */}
            <div className="lg:col-span-3 anim-up">
              <span className="badge-mint inline-flex items-center gap-1.5 mb-6">
                <Icon name="MapPin" size={11} />
                Индустриальный район, Пермь
              </span>

              <h1
                className="font-black mb-3 leading-none"
                style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)", textShadow: "0 2px 18px rgba(0,0,0,0.28)", letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--c-sand)" }}
              >
                ЖК Андроновский
              </h1>

              <p className="text-white/70 text-base mb-10 max-w-lg leading-relaxed">
                Малоэтажный дом с набережной пруда. Квартиры с личными террасами. Чистовая отделка.
              </p>

              {/* Stats — АКЦЕНТ */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { val: "3,6", unit: "млн", label: "от, цена квартиры" },
                  { val: "5",   unit: "эт.", label: "этажей в доме" },
                  { val: "2027",unit: "",    label: "год сдачи" },
                ].map(s => (
                  <div key={s.val} className="flex flex-col px-6 py-4 rounded-2xl glass-light">
                    <div className="font-black leading-none tabular-nums" style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)", color: "var(--c-forest)" }}>
                      {s.val}<span style={{ fontSize: "clamp(1.2rem, 2vw, 1.7rem)", opacity: 0.75, marginLeft: "0.2em" }}>{s.unit}</span>
                    </div>
                    <div className="text-sm mt-1 font-medium" style={{ color: "var(--c-dark)", opacity: 0.6 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#plans" className="btn-primary">
                  <Icon name="LayoutDashboard" size={17} />
                  Смотреть планировки
                </a>
                <a href="tel:+73422000000" className="btn-outline-white">
                  <Icon name="Phone" size={17} />
                  Позвонить
                </a>
              </div>
            </div>

            {/* Form card — 2 cols */}
            <div className="lg:col-span-2 anim-up d3">
              <div className="glass-light rounded-3xl p-7 max-w-sm mx-auto lg:ml-auto lg:mr-0">
                <h3 className="font-bold text-xl mb-1" style={{ color: "var(--c-dark)" }}>Узнать стоимость</h3>
                <p className="text-gray-500 text-sm mb-5">Подберём квартиру под ваш бюджет</p>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>

        <a href="#advantages" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors animate-bounce">
          <Icon name="ChevronDown" size={30} />
        </a>

        {/* Бегущая строка */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3" style={{ background: "var(--c-sand)" }}>
          <div className="flex whitespace-nowrap" style={{ animation: "ticker 18s linear infinite" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="flex items-center gap-6 px-8 text-sm font-bold tracking-widest uppercase" style={{ color: "var(--c-forest)" }}>
                СТАРТ ПРОДАЖ
                <span style={{ color: "var(--c-teal)", fontSize: "1.1em" }}>★</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* ═══ ПРЕИМУЩЕСТВА ═══ */}
      <section id="advantages" className="py-24 sand-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Уникальные черты<br />комплекса</h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto text-lg">
              Малоэтажный дом у воды — редкость для Перми.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {ADVANTAGES.map(adv => (
              <div
                key={adv.title}
                className="card-lift rounded-2xl p-7 bg-white"
                style={{ border: "1px solid rgba(174,218,197,0.45)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform hover:scale-110"
                  style={{ background: adv.accent }}>
                  <Icon name={adv.icon} size={20} className="text-white" fallback="Star" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--c-dark)" }}>{adv.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="forest-gradient rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-1">Хотите узнать подробнее?</h3>
              <p className="text-white/65">Менеджер ответит и покажет все планировки</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a href="#contacts"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--c-sand)", color: "var(--c-dark)" }}>
                <Icon name="MessageCircle" size={17} />
                Написать
              </a>
              <a href="tel:+73422000000" className="btn-outline-white"><Icon name="Phone" size={17} />Позвонить</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ПЛАНИРОВКИ ═══ */}
      <section id="plans" className="py-24 mint-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-mint inline-block mb-4">Варианты квартир</span>
            <h2 className="section-title">Планировки</h2>
            <p className="text-gray-500 mt-4 text-lg">Студии и квартиры 1–3 комнаты. На 1 этаже — с личными террасами.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {PLANS.map(p => (
              <div key={p.type} className="card-lift bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(174,218,197,0.40)" }}>
                <div className="relative h-40 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--c-mint) 0%, #c3e8d8 100%)" }}>
                  {p.badge && (
                    <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
                      style={{ background: "var(--c-forest)" }}>
                      {p.badge}
                    </span>
                  )}
                  <div className="text-center">
                    <div className="text-5xl mb-1">{p.emoji}</div>
                    <div className="font-bold" style={{ color: "var(--c-dark)" }}>{p.area} м²</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-base" style={{ color: "var(--c-dark)" }}>{p.type}</h3>
                    <span className="text-xs text-gray-400">{p.floor}</span>
                  </div>
                  <div className="text-xl font-black mb-0.5" style={{ color: "var(--c-forest)" }}>{p.price}</div>
                  <div className="text-xs text-gray-400 mb-4">{p.m2}</div>
                  <ul className="space-y-1.5 mb-5">
                    {p.feat.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="Check" size={13} className="shrink-0" style={{ color: "var(--c-teal)" } as React.CSSProperties} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contacts"
                    className="block w-full text-center py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:opacity-90"
                    style={{ background: "var(--c-forest)" }}>
                    Узнать подробнее
                  </a>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* ═══ СПОСОБЫ ОПЛАТЫ ═══ */}
      <section className="py-24 sand-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Способы оплаты</h2>
            <p className="text-gray-500 mt-4 text-lg">Выберите удобный для вас формат — подберём условия</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "Baby",
                title: "Семейная ипотека",
                desc: "Ставка от 6% годовых для семей с детьми. Первоначальный взнос от 30%. Срок до 30 лет.",
                accent: "var(--c-teal)",
              },
              {
                icon: "ArrowLeftRight",
                title: "Трейд-ин",
                desc: "Продадим вашу текущую квартиру и зачтём стоимость в счёт новой. Быстро и без лишних хлопот.",
                accent: "var(--c-forest)",
              },
              {
                icon: "Banknote",
                title: "Полная оплата",
                desc: "Внесите всю сумму единовременно и зафиксируйте лучшую цену без переплат.",
                accent: "var(--c-sky)",
              },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-8 card-lift"
                style={{ border: "1px solid rgba(174,218,197,0.45)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: item.accent }}>
                  <Icon name={item.icon} size={22} className="text-white" fallback="CreditCard" />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "var(--c-dark)" }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="forest-gradient rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-1">Получите персональное предложение</h3>
              <p className="text-white/65">Рассчитаем платёж и подберём оптимальный способ оплаты</p>
            </div>
            <a href="#contacts"
              className="px-7 py-3.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              style={{ background: "var(--c-sand)", color: "var(--c-dark)" }}>
              <Icon name="Calculator" size={17} />
              Рассчитать
            </a>
          </div>
        </div>
      </section>

      {/* ═══ ИПОТЕЧНЫЙ КАЛЬКУЛЯТОР ═══ */}
      <section className="py-24 mint-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Ипотечный калькулятор</h2>
            <p className="text-gray-500 mt-4 text-lg">Рассчитайте платёж по семейной ипотеке — ставка 6%</p>
          </div>
          <MortgageCalc />
        </div>
      </section>

      {/* ═══ ГАЛЕРЕЯ ═══ */}
      <section id="gallery" className="py-24 sand-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-mint inline-block mb-4">Посмотрите сами</span>
            <h2 className="section-title">Галерея</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {GALLERY.map((g, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ aspectRatio: (i === 0 || i === 3) ? "16/10" : "4/3" }}
                onClick={() => setLightbox(i)}
              >
                <img src={g.src} alt={g.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(44,74,67,0.65), transparent)" }}>
                  <span className="text-white font-medium text-sm">{g.label}</span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(81,123,113,0.6)", backdropFilter: "blur(4px)" }}>
                    <Icon name="ZoomIn" size={14} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="tel:+73422000000" className="btn-primary">
              <Icon name="CalendarDays" size={17} />
              Записаться на показ
            </a>
          </div>
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(12,20,18,0.93)" }}
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-5 right-5 text-white/60 hover:text-white" onClick={() => setLightbox(null)}>
              <Icon name="X" size={30} />
            </button>
            <img src={GALLERY[lightbox].src} alt="" className="max-w-full max-h-full rounded-2xl" onClick={e => e.stopPropagation()} />
          </div>
        )}
      </section>

      {/* ═══ ЧИСТОВАЯ ОТДЕЛКА ═══ */}
      <section className="py-24 mint-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge-mint inline-block mb-5">Без лишних хлопот</span>
              <h2 className="section-title mb-5">Чистовая<br />отделка</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Заезжайте и живите сразу. Квартиры сдаются с чистовой отделкой — выровненные стены, напольное покрытие, сантехника, межкомнатные двери.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Стяжка и выравнивание стен",
                  "Ламинат / плитка в санузле",
                  "Сантехника и розетки",
                  "Межкомнатные двери",
                  "Горизонтальная разводка отопления",
                ].map(feat => (
                  <li key={feat} className="flex items-center gap-3 text-base" style={{ color: "var(--c-dark)" }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--c-mint)" }}>
                      <Icon name="Check" size={11} style={{ color: "var(--c-forest)" } as React.CSSProperties} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              <a href="#contacts" className="btn-primary">
                <Icon name="MessageCircle" size={17} />
                Получить прайс-лист
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {IMG_FINISH.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
                  <img src={src} alt={`Отделка ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ЛОКАЦИЯ ═══ */}
      <section id="location" className="py-24 mint-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-mint inline-block mb-4">Где находится</span>
            <h2 className="section-title">Локация</h2>
            <p className="text-gray-500 mt-4 text-lg max-w-lg mx-auto">
              ул. 1-я Гиринская, 33 — Индустриальный район, устоявшийся и с развитой инфраструктурой.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--c-forest)" }}>
                  <Icon name="MapPin" size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-base" style={{ color: "var(--c-dark)" }}>г. Пермь, ул. 1-я Гиринская, д. 33</div>
                  <div className="text-gray-400 text-sm">Индустриальный район</div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg" style={{ height: "360px" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=56.175725%2C57.958974&z=16&l=map&pt=56.175725%2C57.958974%2Cpm2rdm"
                  width="100%" height="100%" style={{ border: 0 }} title="Карта ЖК Андроновский"
                />
              </div>
            </div>

            <div>
              <h3 className="font-bold text-2xl mb-6" style={{ color: "var(--c-dark)" }}>Рядом с домом</h3>
              <div className="space-y-3">
                {INFRA.map(cat => (
                  <div key={cat.label} className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm" style={{ border: "1px solid rgba(174,218,197,0.35)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "var(--c-mint)" }}>
                      <Icon name={cat.icon} size={17} style={{ color: "var(--c-forest)" } as React.CSSProperties} fallback="MapPin" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-0.5" style={{ color: "var(--c-dark)" }}>{cat.label}</div>
                      {cat.items.map(i => <div key={i} className="text-gray-500 text-sm">{i}</div>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "var(--c-dark)" }}>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Хотите увидеть вживую?</h3>
              <p className="text-white/55 text-sm">Организуем бесплатный выезд на объект</p>
            </div>
            <a href="tel:+73422000000" className="btn-primary shrink-0">
              <Icon name="Car" size={17} />
              Поехать на объект
            </a>
          </div>
        </div>
      </section>

      {/* ═══ КОНТАКТЫ ═══ */}
      <section id="contacts" className="py-24 forest-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--c-mint)" }}>
              Оставить заявку
            </span>
            <h2 className="font-black text-white mb-3" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Консультация<br />
              <span style={{ color: "var(--c-mint)" }}>бесплатно</span>
            </h2>
            <p className="text-white/65 text-lg max-w-lg mx-auto">
              Отвечаем за 15 минут. Подберём квартиру под ваш бюджет.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Form */}
            <div className="glass-dark rounded-3xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Оставить заявку</h3>
              <LeadForm dark />
            </div>

            {/* Info */}
            <div className="space-y-6">
              {[
                { icon: "Phone",   label: "Телефон",    val: "+7 (342) 200-00-00", href: "tel:+73422000000", sub: null },
                { icon: "Clock",   label: "Режим работы", val: "Пн–Пт: 9:00–20:00", href: null, sub: "Сб: 10:00–17:00" },
                { icon: "MapPin",  label: "Офис продаж", val: "Гостиница «Урал», ул. Ленина, 58, 1 эт.", href: null, sub: "г. Пермь" },
              ].map(row => (
                <div key={row.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 glass-dark mt-0.5">
                    <Icon name={row.icon} size={20} style={{ color: "var(--c-mint)" } as React.CSSProperties} fallback="Info" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">{row.label}</div>
                    {row.href
                      ? <a href={row.href} className="text-white font-semibold text-lg hover:text-[#AEDAC5] transition-colors">{row.val}</a>
                      : <div className="text-white font-semibold leading-snug">{row.val}</div>
                    }
                    {row.sub && <div className="text-white/50 text-sm mt-0.5">{row.sub}</div>}
                  </div>
                </div>
              ))}

              {/* Quick callback */}
              <div className="glass-dark rounded-2xl p-5 mt-2">
                <p className="text-white font-semibold mb-1">Быстрый звонок</p>
                <p className="text-white/55 text-xs mb-4">Оставьте номер — перезвоним за 15 минут</p>
                <div className="flex gap-2">
                  <input type="tel" placeholder="+7 (___) ___-__-__"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/35 focus:outline-none text-sm" />
                  <button className="px-5 py-3 rounded-xl font-semibold text-white text-sm transition-colors hover:opacity-90"
                    style={{ background: "var(--c-teal)" }}>
                    Звонок
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ДИСКЛЕЙМЕРЫ ═══ */}
      <section style={{ background: "#1e2f2c" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Кредитный дисклеймер */}
          <div className="mb-6 px-5 py-4 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Важно</p>
            <p className="text-white/55 text-xs leading-relaxed">
              ИЗУЧИТЕ ВСЕ УСЛОВИЯ КРЕДИТА (ЗАЙМА) НА САЙТЕ В СООТВЕТСТВУЮЩЕМ РАЗДЕЛЕ. ОЦЕНИВАЙТЕ СВОИ ФИНАНСОВЫЕ ВОЗМОЖНОСТИ И РИСКИ
            </p>
          </div>

          {/* Рекламные дисклеймеры */}
          <div className="space-y-3">
            {[
              `*Реклама. Застройщик ООО СЗ «КЕЛШ», ИНН 5902050200. Проектная декларация на сайте наш.дом.рф. В рекламе указана квартира №1, S=22,3 м², цена 3 568 000 ₽ в ЖК Андроновский на ул. 1-я Гиринская, 33. Цена актуальна на 01.04.2026 г. пока квартира есть в наличии. Акция действует 01.04.2026 – 30.04.2026. Подробности акции уточняйте в офисе продаж застройщика. Рекламодатель может изменить сроки и условия акции. Не является публичной офертой.`,
              `*Реклама. Застройщик ООО СЗ «КЕЛШ», ИНН 5902050200. Проектная декларация на сайте наш.дом.рф. В рекламе указана квартира №1, S=22,3 м², цена 3 568 000 ₽ в ЖК Андроновский на ул. 1-я Гиринская, 33. Цена актуальна на 01.04.2026 г. пока квартира есть в наличии. При покупке квартиры в ЖК – кладовая в подарок. Акция действует 01.04.2026 – 30.04.2026. Количество кладовых, участвующих в акции, ограничено. Подробности акции уточняйте в офисе продаж застройщика. Рекламодатель может изменить сроки и условия акции. Не является публичной офертой.`,
              `*Реклама. Застройщик ООО СЗ «КЕЛШ», ИНН 5902050200. Проектная декларация на сайте наш.дом.рф. При покупке квартиры в ЖК Андроновский на ул. 1-я Гиринская, 33, дарим кладовую. Акция действует 01.04.2026 – 30.04.2026. Количество кладовых, участвующих в акции, ограничено. Подробности акции уточняйте в офисе продаж застройщика. Рекламодатель может изменить сроки и условия акции. Не является публичной офертой.`,
              `*Реклама. Застройщик ООО СЗ «КЕЛШ», ИНН 5902050200. Проектная декларация на сайте наш.дом.рф. Расчет ипотечного платежа произведен на основании стоимости квартиры №60, S=22,3 м², цена 3 586 000 ₽ в ЖК Андроновский на ул. 1-я Гиринская, 33. Цена актуальна на 01.04.2026 г. пока квартира есть в наличии. Кредит предоставляет АО «Альфа-Банк». Генеральная лицензия ЦБ РФ № 1326 от 16.01.2015 г. ПСК 23,155% — 32,115%. Ставка 6% годовых по программе «Ипотека с господдержкой для семей с одним ребенком младше 7 лет, а также для семей с ребёнком с особыми потребностями». Валюта: российский рубль. ПВ от 30,1%. Срок кредита до 30 лет. Максимальная сумма кредита 6 млн руб. Банк вправе отказать в выдаче кредита без объяснения причин. Подробнее об условиях кредитования на alfabank.ru. Архитектурная модель здания отрисована без учета окружающей застройки и прилегающего рельефа и может отличаться от фактической. Срок акции 01.04.2026 – 30.04.2026. Подробности акции уточняйте в офисе продаж застройщика. Рекламодатель может изменить сроки и условия акции. Не является публичной офертой.`,
            ].map((text, i) => (
              <p key={i} className="text-white/35 text-xs leading-relaxed">{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: "var(--c-dark)" }} className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "var(--c-teal)" }}>
              <Icon name="Building2" size={13} className="text-white" />
            </div>
            <span className="text-white font-bold text-sm tracking-widest uppercase">Андроновский</span>
          </div>
          <div className="text-white/30 text-xs text-center">
            © 2026 ЖК Андроновский. Застройщик ООО СЗ «КЕЛШ», ИНН 5902050200. Проектная декларация на наш.дом.рф
          </div>
          <a href="tel:+73422000000" className="text-white/50 hover:text-white text-sm transition-colors">
            +7 (342) 200-00-00
          </a>
        </div>
      </footer>
    </div>
  );
}