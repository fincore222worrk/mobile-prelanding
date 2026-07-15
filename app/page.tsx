"use client";

import { useEffect, useState } from "react";

const LINKS = {
  offer: "#",
  telegram: "https://t.me/username",
  instagram: "https://instagram.com/username",
  viber: "viber://chat?number=%2B00000000000",
};

export default function Home() {
  const [offerHref, setOfferHref] = useState(LINKS.offer);

  useEffect(() => {
    if (!LINKS.offer.startsWith("http")) return;
    const destination = new URL(LINKS.offer);
    new URLSearchParams(window.location.search).forEach((value, key) => {
      destination.searchParams.set(key, value);
    });
    setOfferHref(destination.toString());
  }, []);

  return (
    <main className="linksPage">
      <nav className="linkButtons" aria-label="Ссылки для перехода">
        <a className="linkButton primary" href={offerHref}>Узнать подробнее <span>→</span></a>
        <a className="linkButton telegram" href={LINKS.telegram} target="_blank" rel="noopener noreferrer">Telegram <span>→</span></a>
        <a className="linkButton instagram" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram <span>→</span></a>
        <a className="linkButton viber" href={LINKS.viber}>Viber <span>→</span></a>
      </nav>
    </main>
  );
}
