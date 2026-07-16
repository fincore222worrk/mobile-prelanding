"use client";

import { useEffect } from "react";

// Замените заглушки настоящими ссылками, когда они будут готовы.
const LINKS = {
  telegram: "https://t.me/viktor_emil",
  viber: "https://viber.me/380635861629",
  instagram: "https://www.instagram.com/vanya335e/",
};

const features = [
  ["✓", "Зрозумілі умови"],
  ["↗", "Швидкий зв’язок"],
  ["⌾", "Захист даних"],
];

export default function Home() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="pageShell">
      <div className="decor" aria-hidden="true">
        <i className="mist mistOne" /><i className="mist mistTwo" />
        <i className="ring ringOne" /><i className="ring ringTwo" />
        <i className="dotGrid dotOne" /><i className="dotGrid dotTwo" />
      </div>

      <header className="topbar reveal visible">
        <a className="brand" href="#top" aria-label="На початок">bonus<span>bank</span></a>
      </header>

      <section className="hero" id="top">
        <div className="intro reveal visible">
          <p className="eyebrow"><span />ЗАРОБЛЯЙ РАЗОМ З НАМИ</p>
          <h1>Заробіток кожного<br />місяця</h1>
          <p className="subtitle">Щомісячна оплата. Швидко, просто та без зайвих складнощів.</p>
        </div>

        <div className="offers reveal">
          <article className="offerCard mainOffer">
            <div><span className="bankName">ПУМБ</span></div>
            <p><strong>2 000</strong><b>₴</b></p>
          </article>
          <article className="offerCard secondOffer">
            <div><span className="bankName">А-Банк</span></div>
            <p><strong>500</strong><b>₴</b></p>
          </article>
        </div>

        <div className="featureGrid reveal">
          {features.map(([icon, label]) => (
            <article className="featureCard" key={label}><i>{icon}</i><span>{label}</span></article>
          ))}
        </div>

        <article className="benefitCard reveal">
          <div className="benefitHead"><span>ВАШІ ПЕРЕВАГИ</span><i>03</i></div>
          <ul>
            <li><i>✓</i><span>Пояснюємо умови програми</span></li>
            <li><i>✓</i><span>Допомагаємо на кожному етапі</span></li>
            <li><i>✓</i><span>Підтримка без вихідних</span></li>
          </ul>
        </article>

        <section className="contacts reveal" aria-labelledby="contact-title">
          <p id="contact-title">ОБЕРІТЬ ЗРУЧНИЙ МЕСЕНДЖЕР</p>
          <a className="contactButton telegram" href={LINKS.telegram} target="_blank" rel="noopener noreferrer"><i><img src="/icons/telegram.svg" alt="" /></i><span>Telegram</span><b>→</b></a>
          <a className="contactButton viber" href={LINKS.viber} target="_blank" rel="noopener noreferrer"><i><img src="/icons/viber.svg" alt="" /></i><span>Viber</span><b>→</b></a>
          <a className="contactButton instagram" href={LINKS.instagram} target="_blank" rel="noopener noreferrer"><i><img src="/icons/instagram.svg" alt="" /></i><span>Instagram</span><b>→</b></a>
        </section>

      </section>

      <footer><span>© 2026 bonusbank</span><p>Інформаційна партнерська сторінка • 18+</p></footer>
    </main>
  );
}
