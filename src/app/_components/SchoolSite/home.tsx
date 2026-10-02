"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiPlay, FiPause, FiArrowDown, FiX } from "react-icons/fi";
import { Link } from "@/navigation";
import { Arrow, Cta, Invitation, useCopy } from "./shell";
export default function HomePage() {
  const c = useCopy();
  const video = useRef<HTMLVideoElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.current?.pause();
      setPaused(true);
    }
  }, []);
  return (
    <>
      <section className="hero">
        <Image
          width={1280}
          height={960}
          className="hero-poster"
          priority
          sizes="100vw"
          src="/images/main_info_fourth.jpeg"
          alt={c.videoAlt}
        />
        <video
          ref={video}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/main_info_fourth.jpeg"
          aria-hidden="true"
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <span className="eyebrow">{c.eyebrow}</span>
          <h1>
            {c.hero[0]}
            <br />
            <em>{c.hero[1]}</em>
          </h1>
          <p>{c.intro}</p>
          <div className="hero-actions">
            <Cta href="/school-info">{c.discover}</Cta>
            <button
              className="film-button"
              onClick={() => dialog.current?.showModal()}
            >
              <span>
                <FiPlay />
              </span>
              {c.film}
            </button>
          </div>
        </div>
        <div className="wrap hero-bottom">
          <a href="#welcome">
            {c.scroll}
            <FiArrowDown />
          </a>
          <button
            aria-label={paused ? c.playVideo : c.pauseVideo}
            className="video-control"
            onClick={() => {
              if (paused) video.current?.play();
              else video.current?.pause();
              setPaused(!paused);
            }}
          >
            {paused ? <FiPlay /> : <FiPause />}
          </button>
        </div>
        <span className="hero-wordmark" aria-hidden="true">
          SNS
        </span>
      </section>
      <section id="welcome" className="welcome wrap">
        <span className="eyebrow">{c.welcome}</span>
        <div className="welcome-grid">
          <h2>{c.welcomeTitle}</h2>
          <div>
            <p>{c.welcomeText}</p>
            <Link className="text-link" href="/mission">
              {c.nav[1]}
              <Arrow diagonal />
            </Link>
          </div>
        </div>
        <div className="stats">
          {["2022", "28", "2", "08—17"].map((value, i) => (
            <div key={value}>
              <strong>{value}</strong>
              <span>{c.stats[i]}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="life-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{c.life}</span>
              <h2>{c.lifeTitle}</h2>
            </div>
            <Link className="text-link" href="/school-info">
              {c.nav[0]}
              <Arrow diagonal />
            </Link>
          </div>
          <div className="life-grid">
            {["fourth", "second", "third"].map((img, i) => (
              <Link
                className="life-card"
                key={img}
                href={["/e-library", "/mission", "/school-info"][i]}
              >
                <div className="life-image">
                  <Image
                    width={1280}
                    height={960}
                    src={`/images/main_info_${img}.jpeg`}
                    alt={c.cards[i]}
                    loading="lazy"
                  />
                  <span className="image-index">0{i + 1}</span>
                  <span className="card-arrow">
                    <Arrow diagonal />
                  </span>
                </div>
                <h3>{c.cards[i]}</h3>
                <p>{c.cardText[i]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="statement">
        <div className="wrap">
          <span className="eyebrow">SEMEY NEW SCHOOL</span>
          <p>{c.footer}</p>
          <Link className="text-link" href="/mission">
            {c.nav[1]}
            <Arrow diagonal />
          </Link>
        </div>
        <span aria-hidden="true">SNS</span>
      </section>
      <Invitation />
      <dialog
        ref={dialog}
        className="film-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            dialog.current?.close();
            const v = dialog.current?.querySelector("video");
            v?.pause();
          }
        }}
        onClose={() => dialog.current?.querySelector("video")?.pause()}
      >
        <button aria-label={c.close} onClick={() => dialog.current?.close()}>
          <FiX />
        </button>
        <video controls playsInline preload="none" src="/herovideo.mp4" />
        <p>{c.film}</p>
      </dialog>
    </>
  );
}
