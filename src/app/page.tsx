import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8 bg-white dark:bg-black font-sans">
      <main className="flex flex-col items-center sm:items-start gap-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm sm:text-base text-zinc-800 dark:text-zinc-200 space-y-2">
          <li>
            Get started by editing{" "}
            <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-xs sm:text-sm font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-black text-white dark:bg-white dark:text-black gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-sm font-medium h-12 px-6 w-full sm:w-auto shadow-sm"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert dark:invert-0"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-zinc-200 dark:border-zinc-800 transition-colors flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-900 text-sm font-medium h-12 px-6 w-full sm:w-auto text-zinc-900 dark:text-zinc-100"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
