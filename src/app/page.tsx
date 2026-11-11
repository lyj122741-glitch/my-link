"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const email = "lyj122741@gmail.com";
  const githubUrl = "https://github.com/lyj122741-glitch";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const skills = [
    { name: "React", dot: "bg-sky-400", bg: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200/60 dark:border-sky-800/40" },
    { name: "Next.js", dot: "bg-zinc-700 dark:bg-zinc-300", bg: "bg-zinc-100 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700" },
    { name: "TypeScript", dot: "bg-blue-500", bg: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/40" },
    { name: "JavaScript", dot: "bg-amber-400", bg: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200/60 dark:border-amber-800/40" },
    { name: "Tailwind CSS", dot: "bg-teal-400", bg: "bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border-teal-200/60 dark:border-teal-800/40" },
    { name: "Git & GitHub", dot: "bg-purple-400", bg: "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-800/40" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-violet-50/70 via-slate-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased selection:bg-purple-200 selection:text-purple-900">
      {/* Decorative Ambient Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-80 bg-gradient-to-b from-purple-300/30 via-indigo-200/20 to-transparent dark:from-purple-900/25 dark:via-indigo-900/15 blur-3xl"
        aria-hidden="true"
      />

      <main className="relative max-w-md w-full mx-auto px-4 py-10 sm:py-14 flex flex-col items-center gap-6">
        
        {/* Profile Card Header */}
        <section className="flex flex-col items-center text-center w-full">
          {/* Avatar with delicate ring */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500 via-pink-400 to-indigo-500 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-white dark:ring-zinc-900 shadow-lg bg-purple-100 dark:bg-zinc-800">
              <Image
                src="/yeonji-avatar.jpg"
                alt="이연지 프로필"
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            {/* Status dot */}
            <span
              className="absolute bottom-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900"
              title="활동 중"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            </span>
          </div>

          {/* Name & Role */}
          <div className="mt-4 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-100/90 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping opacity-75" />
              Frontend Developer
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">이연지</h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              Yeonji Lee • Web Developer
            </p>
          </div>

          {/* Catchphrase */}
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed max-w-sm">
            &ldquo;사용자의 일상에 자연스럽게 스며드는 직관적이고 유려한 웹을 만듭니다.&rdquo;
          </p>
        </section>

        {/* Developer Introduction (소개글 카드) */}
        <section className="w-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-zinc-200/70 dark:border-zinc-800/70 space-y-4">
          <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-semibold text-[11px] tracking-wider uppercase">
            <svg
              width="14"
              height="14"
              className="w-3.5 h-3.5 shrink-0"
              style={{ width: "14px", height: "14px" }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span>About Me</span>
          </div>

          {/* Bio Text */}
          <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            <p>
              안녕하세요! 복잡한 요구사항을 명확하고 쓰기 편한 사용자 경험으로 풀어내는 프론트엔드 개발자 <strong className="text-zinc-900 dark:text-white font-semibold">이연지</strong>입니다.
            </p>
            <p>
              단순히 화면을 구현하는 것에 그치지 않고, <strong>디테일한 인터랙션</strong>과 <strong>성능 최적화</strong>, 그리고 <strong>지속 가능한 클린 코드</strong> 아키텍처에 깊은 관심을 가지고 있습니다.
            </p>
            <p>
              문제를 마주했을 때 집요하게 원인을 파고들어 끝까지 해결해내는 과정에서 가장 큰 보람을 느낍니다.
            </p>
          </div>

          {/* 3 Key Pillars */}
          <div className="pt-1 grid grid-cols-3 gap-2">
            <div className="rounded-xl p-2.5 bg-purple-50/60 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/30 flex flex-col items-center text-center">
              <span className="w-6 h-6 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-xs mb-1">
                ✨
              </span>
              <h2 className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-100">사용자 경험</h2>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-tight">
                직관적 UI/UX
              </p>
            </div>

            <div className="rounded-xl p-2.5 bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/30 flex flex-col items-center text-center">
              <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-xs mb-1">
                ⚡
              </span>
              <h2 className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-100">모던 웹</h2>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-tight">
                Next.js & TS
              </p>
            </div>

            <div className="rounded-xl p-2.5 bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30 flex flex-col items-center text-center">
              <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-xs mb-1">
                🌱
              </span>
              <h2 className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-100">지속적 성장</h2>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-tight">
                기록과 공유
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="w-full space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${skill.bg} transition-transform duration-150 hover:scale-105`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${skill.dot}`} />
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Links & Connect Section */}
        <section className="w-full space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Links & Contact
            </span>
            <span className="text-[11px] text-zinc-400">편하게 연결해주세요</span>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3 rounded-xl bg-white/90 dark:bg-zinc-900/90 hover:bg-white dark:hover:bg-zinc-800/90 border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm hover:shadow-md hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-800 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <svg
                    width="16"
                    height="16"
                    className="w-4 h-4 fill-current shrink-0"
                    style={{ width: "16px", height: "16px" }}
                    viewBox="0 0 24 24"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-semibold flex items-center gap-1.5">
                    GitHub
                    <span className="text-[11px] font-normal text-purple-600 dark:text-purple-400">@lyj122741-glitch</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">프로젝트 및 코드 저장소 둘러보기</div>
                </div>
              </div>
              <svg
                width="14"
                height="14"
                className="w-3.5 h-3.5 text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all shrink-0"
                style={{ width: "14px", height: "14px" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Email Card */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    width="16"
                    height="16"
                    className="w-4 h-4 shrink-0"
                    style={{ width: "16px", height: "16px" }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-semibold">Email</div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">{email}</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1 shadow-xs ${
                    copied
                      ? "bg-emerald-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200"
                  }`}
                  aria-label="이메일 주소 복사"
                >
                  {copied ? (
                    <>
                      <svg
                        width="12"
                        height="12"
                        className="w-3 h-3 shrink-0"
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>복사완료!</span>
                    </>
                  ) : (
                    <>
                      <svg
                        width="12"
                        height="12"
                        className="w-3 h-3 shrink-0"
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>복사</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}`}
                  className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
                  title="메일 보내기"
                >
                  <svg
                    width="12"
                    height="12"
                    className="w-3 h-3 shrink-0"
                    style={{ width: "12px", height: "12px" }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Tech Blog / Notes Card */}
            <div className="group flex items-center justify-between p-3 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/70 dark:border-zinc-800/70 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shrink-0 shadow-sm">
                  <svg
                    width="16"
                    height="16"
                    className="w-4 h-4 shrink-0"
                    style={{ width: "16px", height: "16px" }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-semibold">Tech Blog & Study</div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">개발 회고와 기술 정리 기록</div>
                </div>
              </div>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                준비 중
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-2 pt-4 pb-2 text-center text-[11px] text-zinc-400 dark:text-zinc-500 space-y-1">
          <p>© 2026 Yeonji Lee. All rights reserved.</p>
          <p className="font-mono text-[10px] opacity-70">Crafted with Next.js & Tailwind CSS</p>
        </footer>

      </main>
    </div>
  );
}
