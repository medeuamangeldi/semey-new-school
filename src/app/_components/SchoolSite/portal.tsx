"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { quarters as schedules } from "../../[locale]/portal/_components/Schedule/_helpers/mockData";
import { quarters as grades } from "../../[locale]/portal/_components/Grades/_helpers/mockData";
import { useCopy } from "./shell";
export default function PortalPage() {
  const params = useParams();
  const section = typeof params.slug === "string" ? params.slug : "schedule";
  const c = useCopy();
  const [day, setDay] = useState("Monday");
  const [quarter, setQuarter] = useState(0);
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({
    name: "Саина Алина",
    phone: "+7 777 777 77 77",
    email: "alinasaina@gmail.com",
    grade: "9 A",
  });
  const [draft, setDraft] = useState(profile);
  useEffect(() => {
    try {
      const p = localStorage.getItem("sns-demo-profile");
      if (p) setProfile(JSON.parse(p));
    } catch {}
  }, []);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const title =
    section === "grades"
      ? c.grades
      : section === "profile"
        ? c.profile
        : c.schedule;
  return (
    <>
      <div className="portal-heading">
        <span className="eyebrow">MY SNS / {c.student}</span>
        <h1>
          {title}
          <span className="title-dot">.</span>
        </h1>
        <span className="demo-badge">{c.demoLabel}</span>
      </div>
      {section === "profile" ? (
        <section className="profile-card">
          <div className="profile-top">
            <span className="avatar">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <div>
              <h2>{profile.name}</h2>
              <p>{profile.grade}</p>
            </div>
            <button
              className="button button-outline"
              onClick={() => {
                if (!editing) setDraft(profile);
                setEditing(!editing);
                setSaved(false);
              }}
            >
              {editing ? c.close : c.edit}
            </button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              localStorage.setItem("sns-demo-profile", JSON.stringify(draft));
              setProfile(draft);
              setEditing(false);
              setSaved(true);
            }}
          >
            {(["name", "phone", "email", "grade"] as const).map((key, i) => (
              <label key={key}>
                {[c.first, c.phone, "Email", c.grade][i]}
                <input
                  value={editing ? draft[key] : profile[key]}
                  type={key === "email" ? "email" : "text"}
                  required
                  readOnly={!editing}
                  onChange={(e) =>
                    setDraft({ ...draft, [key]: e.target.value })
                  }
                />
              </label>
            ))}
            {editing && (
              <button className="button" type="submit">
                {c.save}
              </button>
            )}
            {saved && <p role="status">{c.saved}</p>}
          </form>
        </section>
      ) : section === "grades" ? (
        <section className="portal-panel">
          <label className="quarter-select">
            {c.grades}
            <select
              value={quarter}
              onChange={(e) => setQuarter(Number(e.target.value))}
            >
              {grades.map((q, i) => (
                <option key={q.title} value={i}>
                  {q.title} · {q.period}
                </option>
              ))}
            </select>
          </label>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>{c.subject}</th>
                  <th>{c.grades}</th>
                  <th>{c.absence}</th>
                  <th>{c.final}</th>
                </tr>
              </thead>
              <tbody>
                {grades[quarter].grades.map((row) => (
                  <tr key={row.subject}>
                    <th scope="row" lang="ru">
                      {row.subject}
                    </th>
                    <td>
                      <div className="grade-list">
                        {row.grades.map((g, i) => (
                          <span className={`grade grade-${g}`} key={i}>
                            {g}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td>{row.absence}</td>
                    <td>
                      <strong className="final-grade">
                        {row.finalQuarterGrade}
                      </strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <section className="portal-panel">
          <label className="quarter-select">
            {c.schedule}
            <select
              value={quarter}
              onChange={(e) => setQuarter(Number(e.target.value))}
            >
              {schedules.map((q, i) => (
                <option value={i} key={q.id}>
                  {q.name} · {q.start}–{q.end}
                </option>
              ))}
            </select>
          </label>
          <div className="day-tabs" role="group" aria-label={c.schedule}>
            {days.map((d, i) => (
              <button
                key={d}
                aria-pressed={day === d}
                className={day === d ? "active" : ""}
                onClick={() => setDay(d)}
              >
                {c.dayNames[i]}
              </button>
            ))}
          </div>
          <div className="lesson-list">
            {(schedules[quarter].schedule as any)[day].subjects.map(
              (lesson: any, i: number) => (
                <article key={lesson.name}>
                  <span className="lesson-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="eyebrow">{lesson.time}</span>
                    <h3 lang="ru">{lesson.name}</h3>
                    <p lang="ru">{lesson.teacher}</p>
                  </div>
                  <span className="lesson-room" lang="ru">
                    {lesson.cabinet}
                  </span>
                </article>
              ),
            )}
          </div>
        </section>
      )}
    </>
  );
}
