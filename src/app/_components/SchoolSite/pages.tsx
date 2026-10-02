"use client";
import Image from "next/image";
import { useState } from "react";
import { FiSearch, FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { Link } from "@/navigation";
import { commonRu } from "../../../../locales/en/common";
import { mockData as schoolData } from "../../[locale]/school-info/_helpers/mockData";
import { mockData as books } from "../../[locale]/e-library/_helpers/mockData";
import { Arrow, Cta, Invitation, PageHeading, useCopy } from "./shell";
import { useLocale } from "next-intl";
export function SchoolPage() {
  const c = useCopy();
  return (
    <>
      <PageHeading index={0} />
      <section className="wrap split-section">
        <div className="framed-image">
          <Image
            width={1280}
            height={960}
            src="/images/main_info_first.jpeg"
            alt="Semey New School"
          />
          <span>SEMEY NEW SCHOOL · EST. 2022</span>
        </div>
        <div>
          <span className="eyebrow">{c.welcome}</span>
          <h2>{c.welcomeTitle}</h2>
          <p>{c.welcomeText}</p>
          <Cta href="/contact-us">{c.visit}</Cta>
        </div>
      </section>
      <section className="wrap information-section">
        <div className="section-heading">
          <h2>{c.nav[0]}</h2>
          <span className="eyebrow">SNS · 01</span>
        </div>
        <div className="information-list" lang="ru">
          {schoolData.map((item, i) => (
            <details key={item.title} open={i === 0}>
              <summary>
                <span className="row-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.title}
                <span className="details-plus">+</span>
              </summary>
              <p>{item.value}</p>
            </details>
          ))}
        </div>
      </section>
      <Invitation />
    </>
  );
}
export function MissionPage() {
  const c = useCopy();
  const locale = useLocale();
  const keys = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
  ];
  const values =
    locale === "en"
      ? [
          "Excellence",
          "Inclusivity",
          "Integrity",
          "Collaboration",
          "Innovation",
          "Resilience",
          "Service",
          "Empowerment",
        ]
      : [
          "Кемелдік",
          "Инклюзивтілік",
          "Адалдық",
          "Ынтымақтастық",
          "Инновация",
          "Табандылық",
          "Қызмет ету",
          "Мүмкіндік беру",
        ];
  const descriptions =
    locale === "en"
      ? [
          "High standards in learning, character and personal growth.",
          "A welcoming environment where everyone feels valued.",
          "Honesty and ethical principles in every decision.",
          "Working together with students, families and our community.",
          "Curiosity, creativity and continuous exploration.",
          "The confidence and persistence to overcome challenges.",
          "Kindness and a positive contribution to our community.",
          "Taking responsibility for learning and growing as a leader.",
        ]
      : [
          "Білімде, мінезде және жеке дамуда жоғары нәтижеге ұмтылу.",
          "Әр адам бағаланатын және құрметтелетін орта.",
          "Әр шешімде адалдық пен адамгершілік қағидаларын сақтау.",
          "Оқушылармен, отбасылармен және қауымдастықпен бірге жұмыс істеу.",
          "Қызығушылық, шығармашылық және үздіксіз ізденіс.",
          "Қиындықтарды жеңуге көмектесетін сенімділік пен табандылық.",
          "Мейірімділік және қауымдастыққа оң үлес қосу.",
          "Оқуға жауапкершілік алып, көшбасшы ретінде өсу.",
        ];
  return (
    <>
      <PageHeading index={1} />
      <section className="wrap mission-intro">
        <span className="eyebrow">01 / {c.nav[1]}</span>
        <h2>
          {locale === "ru" ? commonRu.ourMissionOneTitle : c.welcomeTitle}
        </h2>
        <p>{locale === "ru" ? commonRu.ourMissionOneText : c.welcomeText}</p>
      </section>
      <section className="values-section">
        <div className="wrap">
          <div className="section-heading">
            <h2>
              {locale === "ru"
                ? commonRu.ourMissionTwoTitle
                : locale === "en"
                  ? "The values we live by."
                  : "Біздің құндылықтарымыз."}
            </h2>
            <span className="eyebrow">SNS · 02</span>
          </div>
          <div className="values-grid">
            {keys.map((key, i) => (
              <article key={key}>
                <span className="row-number">0{i + 1}</span>
                <h3>
                  {locale === "ru"
                    ? commonRu[`ourMissionTwoText${key}`]
                    : values[i]}
                </h3>
                <p>
                  {locale === "ru"
                    ? commonRu[`ourMissionTwoText${key}Desc`]
                    : descriptions[i]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap split-section">
        <Image
          width={1280}
          height={960}
          className="rounded-image"
          src="/images/main_info_second.jpeg"
          alt={c.cards[1]}
          loading="lazy"
        />
        <div>
          <span className="eyebrow">SNS · 03</span>
          <h2>
            {locale === "ru" ? commonRu.ourMissionThreeTitle : c.lifeTitle}
          </h2>
          <p>
            {locale === "ru" ? commonRu.ourMissionThreeText : c.cardText[1]}
          </p>
        </div>
      </section>
      <Invitation />
    </>
  );
}
export function LibraryPage() {
  const c = useCopy();
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("");
  const filtered = books.filter(
    (b) =>
      `${b.title} ${b.author} ${b.grade}`
        .toLowerCase()
        .includes(search.trim().toLowerCase()) &&
      (!subject || subject === b.title),
  );
  return (
    <>
      <PageHeading index={2} />
      <section className="wrap library-section">
        <div className="library-tools">
          <label className="search-field">
            <FiSearch />
            <input
              aria-label={c.search}
              type="search"
              placeholder={c.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <select
            aria-label={c.all}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">{c.all}</option>
            {books.map((b) => (
              <option key={b.title}>{b.title}</option>
            ))}
          </select>
        </div>
        <p className="results-count" aria-live="polite">
          {c.found}: {filtered.length}
        </p>
        <div className="book-grid">
          {filtered.map((b) => (
            <article className="book-card" key={b.title}>
              <div className="book-cover">
                <Image width={1280} height={960} src={b.image} alt={b.title} />
                <span>
                  {b.grade} {c.grade}
                </span>
              </div>
              <div>
                <span className="eyebrow">SNS / LIBRARY</span>
                <h2 lang="ru">{b.title}</h2>
                <p>
                  {c.author}: <span lang="ru">{b.author}</span>
                </p>
                <span className="book-tag">
                  {b.grade} {c.grade}
                </span>
              </div>
            </article>
          ))}
        </div>
        {!filtered.length && (
          <div className="empty-state">
            <FiSearch />
            <p>{c.empty}</p>
            <button
              className="button"
              onClick={() => {
                setSearch("");
                setSubject("");
              }}
            >
              {c.all}
            </button>
          </div>
        )}
        <p className="catalog-note">{c.catalogNote}</p>
      </section>
      <Invitation />
    </>
  );
}
export function GraduatesPage() {
  const c = useCopy();
  return (
    <>
      <PageHeading index={3} />
      <section className="wrap split-section">
        <div>
          <span className="eyebrow">{c.next}</span>
          <h2>{c.graduatesTitle}</h2>
          <p>{c.graduatesText}</p>
          <Cta href="/e-library">{c.nav[2]}</Cta>
        </div>
        <Image
          width={1280}
          height={960}
          className="rounded-image"
          src="/images/main_info_fourth.jpeg"
          alt={c.nav[3]}
        />
      </section>
      <section className="wrap graduates-grid">
        {c.steps.map((s, i) => (
          <article key={s}>
            <span className="row-number">0{i + 1}</span>
            <h3>{s}</h3>
            <p>{c.stepsText[i]}</p>
            <Link
              className="text-link"
              href={i === 0 ? "/e-library" : "/contact-us"}
            >
              {c.learn}
              <Arrow diagonal />
            </Link>
          </article>
        ))}
      </section>
      <Invitation />
    </>
  );
}
export function ContactPage() {
  const c = useCopy();
  return (
    <>
      <PageHeading index={4} />
      <section className="wrap contact-layout">
        <div className="contact-cards">
          <article>
            <FiMapPin />
            <div>
              <span className="eyebrow">{c.addressLabel}</span>
              <h2>{c.address}</h2>
            </div>
          </article>
          <article>
            <FiPhone />
            <div>
              <span className="eyebrow">{c.phone}</span>
              <a href="tel:+77222565813">+7 (7222) 56-58-13</a>
            </div>
          </article>
          <article>
            <FiMail />
            <div>
              <span className="eyebrow">{c.email}</span>
              <a href="mailto:vkkia@mail.kz">vkkia@mail.kz</a>
            </div>
          </article>
          <article>
            <FiClock />
            <div>
              <span className="eyebrow">SNS</span>
              <p>{c.hours}</p>
            </div>
          </article>
        </div>
        <div className="visit-card">
          <Image
            width={1280}
            height={960}
            src="/images/main_info_first.jpeg"
            alt="Semey New School"
          />
          <div>
            <span className="eyebrow">{c.invitation}</span>
            <h2>{c.invitationTitle}</h2>
            <p>{c.invitationText}</p>
            <a
              className="button"
              href="https://www.google.com/maps/search/?api=1&query=Semey+Baiseitova+5"
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.directions}
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
      <section className="wrap contact-actions">
        <a className="button" href="tel:+77222565813">
          {c.call}
          <FiPhone />
        </a>
        <a className="button button-outline" href="mailto:vkkia@mail.kz">
          {c.write}
          <FiMail />
        </a>
      </section>
    </>
  );
}
