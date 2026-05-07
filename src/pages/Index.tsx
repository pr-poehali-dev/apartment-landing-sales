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
  { icon: "Building2",   title: "Малоэтажность",     desc: "Всего 4 этажа — уютный масштаб, без толпы и суеты.", num: "01" },
  { icon: "Waves",       title: "Набережная пруда",   desc: "Облагороженная набережная прямо у дома — утренние прогулки без машин.", num: "02" },
  { icon: "Leaf",        title: "Террасы на 1 этаже", desc: "Квартиры первого этажа с личными террасами и выходом в зелёный сад.", num: "03" },
  { icon: "MapPin",      title: "Развитый район",     desc: "Индустриальный район Перми: школы, сады, ТЦ, остановки — всё рядом.", num: "04" },
  { icon: "Key",         title: "Ключи в 2027 году",  desc: "Зафиксируйте цену на старте. Надёжный застройщик.", num: "05" },
  { icon: "ShieldCheck", title: "Комфорт-класс",      desc: "Виниловые обои, напольное покрытие, сантехника и двери — уже включены.", num: "06" },
];

const PLANS = [
  { type: "Студия",       area: "22–32",   price: "от 3 900 000 ₽",   m2: "от 128 000 ₽/м²", floor: "2–4 эт.", badge: "Хит",          feat: ["Европланировка", "Окна на пруд"],   img: "https://cdn.poehali.dev/projects/f17703db-a56c-466d-9eea-7fe9b4883293/bucket/db611255-30c1-46dd-ad5c-27ec7ded3c71.png" },
  { type: "1-комнатная", area: "от 34,3", price: "от 5 104 149 ₽",   m2: "от 149 000 ₽/м²", floor: "1–4 эт.", badge: null,           feat: ["Терраса на 1 эт.", "Гардеробная"], img: "https://cdn.poehali.dev/projects/f17703db-a56c-466d-9eea-7fe9b4883293/bucket/4ffb42d6-e9b9-412b-ac14-bd94fa8f5a13.png" },
  { type: "2-комнатная", area: "от 44,4", price: "от 6 593 400 ₽",   m2: "от 148 000 ₽/м²", floor: "1–4 эт.", badge: "Лучший выбор", feat: ["Кухня-гостиная", "Лоджия"],        img: "https://cdn.poehali.dev/projects/f17703db-a56c-466d-9eea-7fe9b4883293/bucket/6f2bc4c9-3ad5-43f6-af73-8aef6f25dcfe.png" },
  { type: "Евро 3-комн.", area: "от 56,9", price: "от 8 108 250 ₽",  m2: "от 143 000 ₽/м²", floor: "1–4 эт.", badge: null,           feat: ["Три жилых комнаты", "2 санузла"],  img: "https://cdn.poehali.dev/projects/f17703db-a56c-466d-9eea-7fe9b4883293/bucket/08676f1d-f390-4fb8-b46d-333776a09a15.png" },
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

/* ─── Consents ─── */
function Consents({ dark = true }: { dark?: boolean }) {
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);
  const txt = dark ? "text-white/45" : "text-white/45";
  const lnk = "underline hover:text-white/90 transition-colors";
  return (
    <div className="flex flex-col gap-2 text-xs">
      <label className={`flex items-start gap-2 cursor-pointer ${txt}`}>
        <input type="checkbox" checked={c1} onChange={e => setC1(e.target.checked)} required className="mt-0.5 shrink-0 accent-[var(--c-pink)]" />
        <span>Согласен(а) с <a href="https://mega.perm.ru/policy/" target="_blank" rel="noopener noreferrer" className={lnk}>Политикой конфиденциальности</a></span>
      </label>
      <label className={`flex items-start gap-2 cursor-pointer ${txt}`}>
        <input type="checkbox" checked={c2} onChange={e => setC2(e.target.checked)} required className="mt-0.5 shrink-0 accent-[var(--c-pink)]" />
        <span>Даю <a href="https://mega.perm.ru/consent/" target="_blank" rel="noopener noreferrer" className={lnk}>согласие на обработку персональных данных</a></span>
      </label>
      <label className={`flex items-start gap-2 cursor-pointer ${txt}`}>
        <input type="checkbox" checked={c3} onChange={e => setC3(e.target.checked)} className="mt-0.5 shrink-0 accent-[var(--c-pink)]" />
        <span>Согласен(а) на рекламную рассылку от ООО СЗ Келш</span>
      </label>
    </div>
  );
}

/* ─── Lead Form ─── */
function LeadForm() {
  const [name, setName]   = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent]   = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl p-8 text-center glass-card">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
          <Icon name="Check" size={24} className="text-white" />
        </div>
        <p className="text-lg font-bold text-white">Заявка принята!</p>
        <p className="mt-1 text-sm text-white/50">Перезвоним в течение 15 минут</p>
      </div>
    );
  }

  const inp = "w-full px-4 py-3.5 rounded-xl bg-white/6 border border-white/12 text-white placeholder-white/30 focus:outline-none focus:border-white/35 text-sm transition-colors";

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-3">
      <input type="text"  placeholder="Ваше имя"          value={name}  onChange={e => setName(e.target.value)}  className={inp} required />
      <input type="tel"   placeholder="+7 (___) ___-__-__" value={phone} onChange={e => setPhone(e.target.value)} className={inp} required />
      <Consents />
      <button
        type="submit"
        className="w-full py-3.5 rounded-full font-bold text-white text-sm mt-1 transition-all duration-300 hover:-translate-y-0.5"
        style={{ background: "linear-gradient(135deg, var(--c-pink) 0%, var(--c-orange) 100%)" }}
      >
        Получить консультацию
      </button>
    </form>
  );
}

function MortgageCalc() {
  const [price, setPrice] = useState(3900000);
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

  const rangeStyle = "w-full h-1.5 rounded-full cursor-pointer appearance-none";

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-8">
        {[
          { label: "Стоимость квартиры", val: `${fmt(price)} ₽`, min: 3900000, max: 9200000, step: 50000, v: price, set: setPrice, lo: "3,9 млн", hi: "9,2 млн" },
          { label: "Первоначальный взнос", val: `${down}% — ${fmt(Math.round(price * down / 100))} ₽`, min: 30, max: 90, step: 1, v: down, set: setDown, lo: "30%", hi: "90%" },
          { label: "Срок кредита", val: `${years} лет`, min: 5, max: 30, step: 1, v: years, set: setYears, lo: "5 лет", hi: "30 лет" },
        ].map(r => (
          <div key={r.label}>
            <div className="flex justify-between mb-3">
              <span className="text-sm text-white/50">{r.label}</span>
              <span className="font-bold text-sm text-white">{r.val}</span>
            </div>
            <input type="range" min={r.min} max={r.max} step={r.step} value={r.v}
              onChange={e => r.set(Number(e.target.value))}
              className={rangeStyle}
              style={{ accentColor: "var(--c-pink)" }} />
            <div className="flex justify-between text-xs text-white/25 mt-1"><span>{r.lo}</span><span>{r.hi}</span></div>
          </div>
        ))}
        <p className="text-xs text-white/25 leading-relaxed">
          Ставка 6% — семейная ипотека с господдержкой. Расчёт ориентировочный.*
        </p>
      </div>

      <div className="rounded-3xl p-8 flex flex-col gap-5" style={{ background: "linear-gradient(135deg, rgba(222,65,149,0.15) 0%, rgba(242,119,66,0.15) 100%)", border: "1px solid rgba(222,65,149,0.2)" }}>
        <div>
          <div className="text-white/40 text-xs uppercase tracking-widest mb-2">Ежемесячный платёж</div>
          <div className="font-black text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
            {fmt(payment)} ₽
          </div>
        </div>
        <div className="border-t border-white/8 pt-5 space-y-3">
          {[
            { label: "Сумма кредита", val: `${fmt(Math.round(loanAmount))} ₽` },
            { label: "Переплата",     val: `${fmt(overpay)} ₽` },
            { label: "Ставка",        val: `${rate}%` },
          ].map(r => (
            <div key={r.label} className="flex justify-between">
              <span className="text-white/40 text-sm">{r.label}</span>
              <span className="text-white font-semibold text-sm">{r.val}</span>
            </div>
          ))}
        </div>
        <a href="#contacts"
          className="mt-2 w-full text-center py-3.5 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
          Получить персональное предложение
        </a>
      </div>
    </div>
  );
}

export default function Index() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen dark-section" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* ═══ NAVBAR ═══ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "rgba(26,52,46,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(174,218,197,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
              <Icon name="Building2" size={15} className="text-white" />
            </div>
            <span className="text-white font-black text-sm tracking-widest uppercase">Андроновский</span>
          </div>

          <div className="hidden md:flex items-center gap-7">
            {NAV.map(n => (
              <a key={n.href} href={n.href} className="text-sm text-white/50 hover:text-white transition-colors font-medium">{n.label}</a>
            ))}
          </div>

          <a href="tel:+73422000000" className="flex items-center gap-1.5 font-bold text-sm transition-all duration-300 px-4 py-2 rounded-full"
            style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))", color: "white" }}>
            <Icon name="Phone" size={13} />
            Позвонить
          </a>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG_HERO})` }} />
        <div className="absolute inset-0 hero-overlay" />

        {/* Декоративная вертикальная линия */}
        <div className="absolute left-0 top-0 bottom-0 w-1 hidden lg:block" style={{ background: "linear-gradient(180deg, transparent, var(--c-pink), var(--c-orange), transparent)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 pt-36 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">

            {/* Text */}
            <div className="lg:col-span-3 anim-up">

              {/* Старт продаж */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="badge-pink">
                  <Icon name="Zap" size={10} className="inline mr-1" />
                  Старт продаж
                </span>
                <span className="badge-outline">Кладовая в подарок*</span>
              </div>

              <h1
                className="font-black mb-2 leading-none"
                style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)", letterSpacing: "-0.02em", color: "white" }}
              >
                ЖК<br />
                <span className="text-gradient">Андроновский</span>
              </h1>

              <p className="text-white/55 text-base mb-10 max-w-lg leading-relaxed mt-4" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
                Малоэтажный дом у пруда в Индустриальном районе Перми.<br />Квартиры с террасами. Чистовая отделка.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mb-10">
                {[
                  { val: "3,9", unit: "млн", label: "от, цена квартиры" },
                  { val: "4",   unit: "эт.", label: "этажа в доме" },
                  { val: "2027",unit: "",    label: "год сдачи" },
                ].map(s => (
                  <div key={s.val} className="flex flex-col px-5 py-4 rounded-2xl glass-card">
                    <div className="font-black leading-none tabular-nums text-white" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
                      {s.val}<span className="text-white/40" style={{ fontSize: "0.45em", marginLeft: "0.2em" }}>{s.unit}</span>
                    </div>
                    <div className="text-xs mt-1 text-white/35 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#plans" className="btn-primary">
                  <Icon name="LayoutDashboard" size={16} />
                  Смотреть планировки
                </a>
                <a href="#contacts" className="btn-outline-white">
                  <Icon name="MessageCircle" size={16} />
                  Получить консультацию
                </a>
              </div>
            </div>

            {/* Form card */}
            <div className="lg:col-span-2 anim-up d3">
              <div className="rounded-3xl p-7 max-w-sm mx-auto lg:ml-auto lg:mr-0" style={{ background: "rgba(28,55,48,0.85)", backdropFilter: "blur(24px)", border: "1px solid rgba(174,218,197,0.18)" }}>
                <div className="mb-5">
                  <div className="gradient-line w-10 mb-4" />
                  <h3 className="font-black text-white text-xl mb-1">Узнать стоимость</h3>
                  <p className="text-white/40 text-sm">Подберём квартиру под ваш бюджет</p>
                </div>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>

        <a href="#advantages" className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/25 hover:text-white/60 transition-colors animate-bounce">
          <Icon name="ChevronDown" size={28} />
        </a>

        {/* Бегущая строка */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3" style={{ background: "linear-gradient(90deg, var(--c-pink), var(--c-orange))" }}>
          <div className="flex whitespace-nowrap ticker-track">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} className="flex items-center gap-5 px-8 text-xs font-black tracking-widest uppercase shrink-0 text-white/90">
                КЛАДОВАЯ В ПОДАРОК
                <span className="opacity-60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .ticker-track { animation: ticker 20s linear infinite; }
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        input[type=range]::-webkit-slider-thumb {
          background: linear-gradient(135deg, var(--c-pink), var(--c-orange));
        }
      `}</style>

      {/* ═══ ПРЕИМУЩЕСТВА ═══ */}
      <section id="advantages" className="py-24 darker-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="badge-mint mb-5 inline-block">Почему мы</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="section-title text-white">
                Уникальные черты<br /><span className="text-gradient">комплекса</span>
              </h2>
              <p className="text-white/40 max-w-xs text-sm leading-relaxed">
                Малоэтажный дом у воды — редкость для Перми. Здесь есть всё для комфортной жизни.
              </p>
            </div>
            <div className="gradient-line w-20 mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {ADVANTAGES.map(adv => (
              <div
                key={adv.title}
                className="card-lift rounded-2xl p-7 group cursor-default"
                style={{ background: "rgba(81,123,113,0.14)", border: "1px solid rgba(174,218,197,0.15)" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
                    <Icon name={adv.icon} size={19} className="text-white" fallback="Star" />
                  </div>
                  <span className="text-4xl font-black text-white/6 tabular-nums">{adv.num}</span>
                </div>
                <h3 className="font-bold text-white text-base mb-2">{adv.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg, rgba(222,65,149,0.12) 0%, rgba(242,119,66,0.12) 100%)", border: "1px solid rgba(222,65,149,0.2)" }}>
            <div>
              <h3 className="text-white font-black text-2xl md:text-3xl mb-1">Хотите узнать подробнее?</h3>
              <p className="text-white/40">Менеджер ответит и покажет все планировки</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a href="#contacts" className="btn-primary">
                <Icon name="MessageCircle" size={16} />
                Написать
              </a>
              <a href="tel:+73422000000" className="btn-outline-white">
                <Icon name="Phone" size={16} />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ПЛАНИРОВКИ ═══ */}
      <section id="plans" className="py-24 dark-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-mint mb-5 inline-block">Варианты квартир</span>
            <h2 className="section-title text-white mb-3">Планировки</h2>
            <p className="text-white/40 text-base">Студии и квартиры 1–3 комнаты. На 1 этаже — с личными террасами.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {PLANS.map(p => (
              <div key={p.type} className="card-lift rounded-2xl overflow-hidden flex flex-col"
                style={{ background: "rgba(81,123,113,0.16)", border: "1px solid rgba(174,218,197,0.18)" }}>
                <div className="relative bg-white/5 flex items-center justify-center p-4" style={{ height: "200px" }}>
                  {p.badge && (
                    <span className="absolute top-3 left-3 z-10 badge-pink">{p.badge}</span>
                  )}
                  <img src={p.img} alt={`Планировка ${p.type}`} className="w-full h-full object-contain" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white text-base">{p.type}</h3>
                    <span className="text-xs text-white/30">{p.floor}</span>
                  </div>
                  <div className="text-xs text-white/30 mb-1">{p.area} м²</div>
                  <div className="text-lg font-black mb-1 text-gradient">{p.price}</div>
                  <div className="text-xs text-white/25 mb-4">{p.m2}</div>
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {p.feat.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
                          <Icon name="Check" size={9} className="text-white" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contacts"
                    className="block w-full text-center py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
                    Узнать подробнее
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ СПОСОБЫ ОПЛАТЫ ═══ */}
      <section className="py-24 darker-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="badge-mint mb-5 inline-block">Условия покупки</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="section-title text-white">
                Способы <span className="text-gradient">оплаты</span>
              </h2>
              <p className="text-white/40 max-w-xs text-sm leading-relaxed">
                Выберите удобный для вас формат — подберём условия
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              { icon: "Baby",          title: "Семейная ипотека",           desc: "Ставка от 6% годовых для семей с детьми. Первоначальный взнос от 30%. Срок до 30 лет.", num: "01" },
              { icon: "ArrowLeftRight",title: "Трейд-ин",                   desc: "Продадим вашу текущую квартиру и зачтём стоимость в счёт новой. Быстро и без лишних хлопот.", num: "02" },
              { icon: "Banknote",      title: "Полная оплата",              desc: "Внесите всю сумму единовременно и зафиксируйте лучшую цену без переплат.", num: "03" },
            ].map(item => (
              <div key={item.title} className="card-lift rounded-2xl p-8 group"
                style={{ background: "rgba(81,123,113,0.14)", border: "1px solid rgba(174,218,197,0.15)" }}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
                    <Icon name={item.icon} size={20} className="text-white" fallback="CreditCard" />
                  </div>
                  <span className="text-4xl font-black text-white/6 tabular-nums">{item.num}</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg, rgba(222,65,149,0.12), rgba(242,119,66,0.12))", border: "1px solid rgba(222,65,149,0.2)" }}>
            <div>
              <h3 className="text-white font-black text-2xl md:text-3xl mb-1">Получите персональное предложение</h3>
              <p className="text-white/40">Рассчитаем платёж и подберём оптимальный способ оплаты</p>
            </div>
            <a href="#contacts" className="btn-primary shrink-0">
              <Icon name="Calculator" size={16} />
              Рассчитать
            </a>
          </div>
        </div>
      </section>

      {/* ═══ ИПОТЕЧНЫЙ КАЛЬКУЛЯТОР ═══ */}
      <section className="py-24 dark-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-mint mb-5 inline-block">Ипотека</span>
            <h2 className="section-title text-white mb-3">Ипотечный <span className="text-gradient">калькулятор</span></h2>
            <p className="text-white/40 text-base">Рассчитайте платёж по семейной ипотеке — ставка 6%*</p>
          </div>
          <MortgageCalc />
        </div>
      </section>

      {/* ═══ ГАЛЕРЕЯ ═══ */}
      <section id="gallery" className="py-24 darker-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-mint mb-5 inline-block">Посмотрите сами</span>
            <h2 className="section-title text-white">Галерея</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {GALLERY.map((g, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
                onClick={() => setLightbox(i)}
              >
                <img src={g.src} alt={g.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(8,15,13,0.9) 0%, transparent 60%)" }}>
                  <div className="flex items-center gap-2">
                    <Icon name="ZoomIn" size={16} className="text-white/70" />
                    <span className="text-white text-sm font-medium">{g.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="tel:+73422000000" className="btn-primary">
              <Icon name="CalendarDays" size={16} />
              Записаться на показ
            </a>
          </div>
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(4,8,7,0.96)" }}
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors" onClick={() => setLightbox(null)}>
              <Icon name="X" size={28} />
            </button>
            <img src={GALLERY[lightbox].src} alt="" className="max-w-full max-h-full rounded-2xl" onClick={e => e.stopPropagation()} />
          </div>
        )}
      </section>

      {/* ═══ ЧИСТОВАЯ ОТДЕЛКА ═══ */}
      <section className="py-24 dark-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-mint mb-5 inline-block">Без лишних хлопот</span>
              <h2 className="section-title text-white mb-4">Чистовая<br /><span className="text-gradient">отделка</span></h2>
              <p className="text-white/45 text-base leading-relaxed mb-8">
                Заезжайте и живите сразу. Квартиры сдаются с чистовой отделкой — эстетичные виниловые обои светлых оттенков, напольное покрытие, сантехника, межкомнатные двери.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Виниловые обои светлых оттенков",
                  "Напольное покрытие",
                  "Сантехника",
                  "Межкомнатные двери",
                  "Горизонтальная разводка отопления",
                ].map(feat => (
                  <li key={feat} className="flex items-center gap-3 text-white/70 text-base">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
                      <Icon name="Check" size={10} className="text-white" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              <a href="#contacts" className="btn-primary">
                <Icon name="MessageCircle" size={16} />
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
      <section id="location" className="py-24 darker-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-mint mb-5 inline-block">Где находится</span>
            <h2 className="section-title text-white mb-3">Локация</h2>
            <p className="text-white/40 text-base max-w-lg mx-auto">
              ул. 1-я Гиринская, 33 — Индустриальный район, устоявшийся и с развитой инфраструктурой.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
                  <Icon name="MapPin" size={17} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-base">г. Пермь, ул. 1-я Гиринская, д. 33</div>
                  <div className="text-white/35 text-sm">Индустриальный район</div>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden" style={{ height: "360px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=56.175725%2C57.958974&z=16&l=map&pt=56.175725%2C57.958974%2Cpm2rdm"
                  width="100%" height="100%" style={{ border: 0 }} title="Карта ЖК Андроновский"
                />
              </div>
            </div>

            <div>
              <h3 className="font-black text-white text-xl mb-6">Рядом с домом</h3>
              <div className="space-y-3">
                {INFRA.map(cat => (
                  <div key={cat.label} className="flex gap-4 p-4 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
                      <Icon name={cat.icon} size={16} className="text-white" fallback="MapPin" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm mb-0.5">{cat.label}</div>
                      {cat.items.map(i => <div key={i} className="text-white/40 text-sm">{i}</div>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ КОНТАКТЫ ═══ */}
      <section id="contacts" className="py-24 darker-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-mint mb-5 inline-block">Связаться с нами</span>
            <h2 className="font-black text-white mb-3" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", lineHeight: 1.1 }}>
              Консультация<br /><span className="text-gradient">бесплатно</span>
            </h2>
            <p className="text-white/40 text-base max-w-lg mx-auto">
              Отвечаем за 15 минут. Подберём квартиру под ваш бюджет.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Form */}
            <div className="rounded-3xl p-8" style={{ background: "rgba(81,123,113,0.18)", border: "1px solid rgba(174,218,197,0.2)" }}>
              <div className="gradient-line w-10 mb-5" />
              <h3 className="text-white font-black text-xl mb-6">Оставить заявку</h3>
              <LeadForm />
            </div>

            {/* Info */}
            <div className="space-y-5">
              {[
                { icon: "Phone",  label: "Телефон",     val: "+7 (342) 200-00-00", href: "tel:+73422000000", sub: null },
                { icon: "Clock",  label: "Режим работы", val: "Пн–Пт: 9:00–20:00",  href: null, sub: "Сб: 10:00–17:00" },
                { icon: "MapPin", label: "Офис продаж",  val: "Гостиница «Урал», ул. Ленина, 58, 1 эт.", href: null, sub: "г. Пермь" },
              ].map(row => (
                <div key={row.label} className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: "rgba(81,123,113,0.14)", border: "1px solid rgba(174,218,197,0.15)" }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
                    <Icon name={row.icon} size={18} className="text-white" fallback="Info" />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs uppercase tracking-wider mb-1">{row.label}</div>
                    {row.href
                      ? <a href={row.href} className="text-white font-bold text-base hover:text-gradient transition-colors">{row.val}</a>
                      : <div className="text-white font-semibold text-base leading-snug">{row.val}</div>
                    }
                    {row.sub && <div className="text-white/35 text-sm mt-0.5">{row.sub}</div>}
                  </div>
                </div>
              ))}

              {/* Quick callback */}
              <div className="rounded-2xl p-5" style={{ background: "rgba(222,65,149,0.08)", border: "1px solid rgba(222,65,149,0.2)" }}>
                <p className="text-white font-bold mb-1">Быстрый звонок</p>
                <p className="text-white/40 text-xs mb-4">Оставьте номер — перезвоним за 15 минут</p>
                <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <input type="tel" placeholder="+7 (___) ___-__-__"
                      className="flex-1 px-4 py-3 rounded-xl bg-white/6 border border-white/12 text-white placeholder-white/30 focus:outline-none text-sm" />
                    <button type="submit" className="px-5 py-3 rounded-full font-bold text-white text-sm transition-all hover:-translate-y-0.5"
                      style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
                      Звонок
                    </button>
                  </div>
                  <Consents />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ДИСКЛЕЙМЕРЫ ═══ */}
      <section style={{ background: "#111e1b" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 px-5 py-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Важно</p>
            <p className="text-white/30 text-xs leading-relaxed">
              ИЗУЧИТЕ ВСЕ УСЛОВИЯ КРЕДИТА (ЗАЙМА) НА САЙТЕ В СООТВЕТСТВУЮЩЕМ РАЗДЕЛЕ. ОЦЕНИВАЙТЕ СВОИ ФИНАНСОВЫЕ ВОЗМОЖНОСТИ И РИСКИ
            </p>
          </div>

          <div className="space-y-3">
            {[
              `*Реклама. Застройщик ООО СЗ «КЕЛШ», ИНН 5902050200. Проектная декларация на сайте наш.дом.рф. В рекламе указана квартира №37, S=22,3 м2, цена 3 852 637 ₽ в ЖК Андроновский на ул. 1-я Гиринская, 33. Цена актуальна на 01.05.2026 г. пока квартира есть в наличии. Акция действует 01.05.2026 - 31.05.2026. Подробности акции уточняйте в офисе продаж застройщика. Рекламодатель может изменить сроки и условия акции. Не является публичной офертой.`,
              `*Реклама. Застройщик ООО СЗ «КЕЛШ», ИНН 5902050200. Проектная декларация на сайте наш.дом.рф. В рекламе указана квартира №37, S=22,3 м2, цена 3 852 637 ₽ в ЖК Андроновский на ул. 1-я Гиринская, 33. Цена актуальна на 01.05.2026 г. пока квартира есть в наличии. При покупке квартиры в ЖК - кладовая в подарок. Акция действует 01.05.2026 - 31.05.2026. Количество кладовых, участвующих в акции, ограничено. Подробности акции уточняйте в офисе продаж застройщика. Рекламодатель может изменить сроки и условия акции. Не является публичной офертой.`,
              `*Реклама. Застройщик ООО СЗ «КЕЛШ», ИНН 5902050200. Проектная декларация на сайте наш.дом.рф. При покупке квартиры в ЖК Андроновский на ул. 1-я Гиринская, 33, дарим кладовую. Акция действует 01.05.2026 - 31.05.2026. Количество кладовых, участвующих в акции, ограничено. Подробности акции уточняйте в офисе продаж застройщика. Рекламодатель может изменить сроки и условия акции. Не является публичной офертой.`,
              `*Реклама. Застройщик ООО СЗ «КЕЛШ», ИНН 5902050200. Проектная декларация на сайте наш.дом.рф. Расчет ипотечного платежа произведен на основании стоимости квартиры №37, S=22,3 м2, цена 3 852 637 ₽ в ЖК Андроновский на ул. 1-я Гиринская, 33. Цена актуальна на 01.05.2026 г. пока квартира есть в наличии. Кредит предоставляет АО «Альфа-Банк». Генеральная лицензия ЦБ РФ № 1326 от 16.01.2015 г. ПСК 16,483% - 25,584%. Ставка 6% годовых по программе «Ипотека с господдержкой для семей с одним ребенком младше 7 лет, а также для семей с ребёнком с особыми потребностями». Валюта: российский рубль. ПВ от 30,1%. Срок кредита до 30 лет. Максимальная сумма кредита 6 млн руб. Банк вправе отказать в выдаче кредита без объяснения причин. Подробнее об условиях кредитования на alfabank.ru. Архитектурная модель здания отрисована без учета окружающей застройки и прилегающего рельефа и может отличаться от фактической. Срок акции 01.05.2026 - 31.05.2026. Подробности акции уточняйте в офисе продаж застройщика. Рекламодатель может изменить сроки и условия акции. Не является публичной офертой.`,
            ].map((text, i) => (
              <p key={i} className="text-white/20 text-xs leading-relaxed">{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: "var(--c-dark)" }} className="py-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, var(--c-pink), var(--c-orange))" }}>
              <Icon name="Building2" size={13} className="text-white" />
            </div>
            <span className="text-white font-black text-sm tracking-widest uppercase">Андроновский</span>
          </div>
          <div className="text-white/20 text-xs text-center">
            © 2026 ЖК Андроновский. Застройщик ООО СЗ «КЕЛШ», ИНН 5902050200. Проектная декларация на наш.дом.рф
          </div>
          <a href="tel:+73422000000" className="text-white/35 hover:text-white text-sm transition-colors font-medium">
            +7 (342) 200-00-00
          </a>
        </div>
      </footer>
    </div>
  );
}