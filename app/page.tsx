const LINKS = {
  telegram: "https://t.me/viktor_emil",
  viber: "https://viber.me/380635861629",
  instagram: "https://www.instagram.com/vanya335e/",
};

export default function Home() {
  return (
    <main className="pageShell" aria-label="Выбор мессенджера">
      <nav className="contacts" aria-label="Связаться с нами">
        <a className="contactButton telegram" href={LINKS.telegram} target="_blank" rel="noopener noreferrer" aria-label="Написать в Telegram">
          <i><img src="/icons/telegram.svg" alt="" /></i><span>Telegram</span><b>→</b>
        </a>
        <a className="contactButton viber" href={LINKS.viber} target="_blank" rel="noopener noreferrer" aria-label="Написать в Viber">
          <i><img src="/icons/viber.svg" alt="" /></i><span>Viber</span><b>→</b>
        </a>
        <a className="contactButton instagram" href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Написать в Instagram">
          <i><img src="/icons/instagram.svg" alt="" /></i><span>Instagram</span><b>→</b>
        </a>
      </nav>
    </main>
  );
}
