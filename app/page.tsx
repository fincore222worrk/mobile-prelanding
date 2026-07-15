"use client";

import { useEffect, useState } from "react";

// Все основные настройки прокладки находятся здесь.
// Замените тексты и вставьте конечную ссылку в offerUrl.
const CONFIG = {
  brand: "NOVA",
  label: "НОВЫЙ МАТЕРИАЛ",
  title: "Об этом простом способе сейчас говорят всё чаще",
  description:
    "Мы собрали главное в коротком материале. Узнайте, почему этот подход привлёк столько внимания и как он работает.",
  points: ["Понятное объяснение", "Чтение займёт 3 минуты", "Доступ без регистрации"],
  button: "УЗНАТЬ ПОДРОБНЕЕ",
  offerUrl: "#", // Пример: https://example.com
  telegramUrl: "https://t.me/username", // Замените username
  instagramUrl: "https://instagram.com/username", // Замените username
  viberUrl: "viber://chat?number=%2B00000000000", // Вставьте номер после %2B
};

export default function Home() {
  const [offerHref, setOfferHref] = useState(CONFIG.offerUrl);

  useEffect(() => {
    if (!CONFIG.offerUrl.startsWith("http")) return;
    const destination = new URL(CONFIG.offerUrl);
    new URLSearchParams(window.location.search).forEach((value, key) => {
      destination.searchParams.set(key, value);
    });
    setOfferHref(destination.toString());
  }, []);

  return (
    <main className="phonePage">
      <header className="topbar">
        <span className="logo">{CONFIG.brand}<i /></span>
        <span className="adMark">РЕКЛАМА</span>
      </header>

      <article>
        <div className="creative" aria-hidden="true">
          <div className="glow glowOne" />
          <div className="glow glowTwo" />
          <span className="creativeLabel">ПРОСТО • БЫСТРО • ПОНЯТНО</span>
          <div className="creativeCard">
            <span>КРАТКИЙ ГАЙД</span>
            <strong>3</strong>
            <small>простых шага</small>
            <div className="creativeLines"><i /><i /><i /></div>
          </div>
          <div className="bubble bubbleLeft">✓ Легко начать</div>
          <div className="bubble bubbleRight">3 мин</div>
        </div>

        <div className="content">
          <p className="label">{CONFIG.label}</p>
          <h1>{CONFIG.title}</h1>
          <p className="description">{CONFIG.description}</p>

          <ul>
            {CONFIG.points.map((point) => (
              <li key={point}><span>✓</span>{point}</li>
            ))}
          </ul>

          <a className="cta" href={offerHref}>
            {CONFIG.button}<b>→</b>
          </a>
          <p className="socialTitle">ИЛИ НАПИШИТЕ НАМ</p>
          <div className="socialButtons">
            <a className="social telegram" href={CONFIG.telegramUrl} target="_blank" rel="noopener noreferrer">
              <i>✈</i><span>Telegram</span>
            </a>
            <a className="social instagram" href={CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer">
              <i>◎</i><span>Instagram</span>
            </a>
            <a className="social viber" href={CONFIG.viberUrl}>
              <i>☎</i><span>Viber</span>
            </a>
          </div>
          <p className="safeText">Нажимая кнопку, вы перейдёте на страницу с подробной информацией</p>
        </div>
      </article>

      <footer>Информационный материал • 18+</footer>
    </main>
  );
}
