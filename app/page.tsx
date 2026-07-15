"use client";

import { useEffect, useState } from "react";

// РЕДАКТИРОВАТЬ САЙТ НУЖНО ЗДЕСЬ: замените тексты и ссылку на свои.
const SITE = {
  brand: "NOVA",
  eyebrow: "Полезный материал • 5 минут чтения",
  title: "Простой подход, который помогает чувствовать себя лучше каждый день",
  subtitle:
    "Разбираем понятную систему из трёх шагов — без сложных терминов, жёстких ограничений и лишних обещаний.",
  button: "Узнать подробности",
  offerUrl: "#offer", // Вставьте сюда конечную ссылку, например: https://example.com
};

const benefits = [
  ["01", "Понятный старт", "Короткая инструкция, с которой легко начать уже сегодня."],
  ["02", "Удобный формат", "Подход легко встроить в привычный распорядок дня."],
  ["03", "Фокус на главном", "Только практичные рекомендации без информационного шума."],
];

const reviews = [
  ["Марина, 34", "«Наконец-то всё объяснено простыми словами. Прочитала за несколько минут и сразу поняла, с чего начать.»"],
  ["Алексей, 41", "«Понравилось, что нет сложных схем. Всё коротко, спокойно и по делу.»"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offerHref, setOfferHref] = useState(SITE.offerUrl);

  useEffect(() => {
    if (!SITE.offerUrl.startsWith("http")) return;
    const destination = new URL(SITE.offerUrl);
    const incoming = new URLSearchParams(window.location.search);
    incoming.forEach((value, key) => destination.searchParams.set(key, value));
    setOfferHref(destination.toString());
  }, []);

  return (
    <main>
      <header className="header">
        <a className="logo" href="#top" aria-label="На главную">{SITE.brand}<i /></a>
        <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Открыть меню">
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#method" onClick={() => setMenuOpen(false)}>Как это работает</a>
          <a href="#stories" onClick={() => setMenuOpen(false)}>Отзывы</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>Вопросы</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span />{SITE.eyebrow}</p>
          <h1>{SITE.title}</h1>
          <p className="lead">{SITE.subtitle}</p>
          <a className="primaryButton" href={offerHref} id="offer">{SITE.button}<b>→</b></a>
          <p className="microcopy">Бесплатно • Без регистрации • Доступ сразу</p>
        </div>
        <div className="heroVisual" aria-hidden="true">
          <div className="orb orbOne" /><div className="orb orbTwo" />
          <div className="phoneCard">
            <div className="cardTop"><span>ВАШ ПЛАН</span><em>01 / 03</em></div>
            <div className="dial"><strong>5</strong><small>минут в день</small></div>
            <div className="progress"><i /><i /><i /></div>
            <p>Небольшие шаги.<br />Заметные перемены.</p>
          </div>
          <div className="floatNote noteOne">✓ Легко начать</div>
          <div className="floatNote noteTwo">★ 4.9 из 5</div>
        </div>
      </section>

      <section className="trustBar">
        <span>ПОНЯТНО</span><i /> <span>ПРАКТИЧНО</span><i /> <span>ДОСТУПНО</span>
      </section>

      <section className="section method" id="method">
        <p className="sectionKicker">СИСТЕМА ИЗ ТРЁХ ШАГОВ</p>
        <div className="sectionHeading">
          <h2>Меньше сложности.<br />Больше ясности.</h2>
          <p>Мы собрали основные идеи в короткую последовательность, чтобы вам не пришлось тратить часы на поиск информации.</p>
        </div>
        <div className="benefitGrid">
          {benefits.map(([number, title, text]) => <article key={number}>
            <span>{number}</span><h3>{title}</h3><p>{text}</p>
          </article>)}
        </div>
      </section>

      <section className="section stories" id="stories">
        <div><p className="sectionKicker">ИСТОРИИ ЧИТАТЕЛЕЙ</p><h2>Просто попробовать.<br />Легко продолжать.</h2></div>
        <div className="reviewList">
          {reviews.map(([name, text]) => <blockquote key={name}><div className="stars">★★★★★</div><p>{text}</p><footer>{name}<span>Проверенный читатель</span></footer></blockquote>)}
        </div>
      </section>

      <section className="section faq" id="faq">
        <p className="sectionKicker">ОТВЕЧАЕМ КОРОТКО</p><h2>Частые вопросы</h2>
        <details><summary>Сколько времени займёт знакомство с материалом?<b>+</b></summary><p>Основную часть можно прочитать примерно за пять минут. Возвращайтесь к ней в любое удобное время.</p></details>
        <details><summary>Подойдёт ли это новичку?<b>+</b></summary><p>Да. Материал написан простым языком и не требует предварительной подготовки.</p></details>
        <details><summary>Нужно ли регистрироваться?<b>+</b></summary><p>Нет. Нажмите кнопку, чтобы сразу перейти к подробной информации.</p></details>
      </section>

      <section className="finalCta">
        <p className="sectionKicker">ГОТОВЫ НАЧАТЬ?</p>
        <h2>Один небольшой шаг<br />может изменить многое.</h2>
        <a className="primaryButton light" href={offerHref}>{SITE.button}<b>→</b></a>
      </section>

      <footer className="footer"><a className="logo" href="#top">{SITE.brand}<i /></a><p>Информационный материал. Результаты могут отличаться.</p><span>© 2026</span></footer>
    </main>
  );
}
