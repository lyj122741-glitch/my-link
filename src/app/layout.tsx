import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이연지 | Developer Profile & Links",
  description: "사용자 중심의 가치를 만드는 프론트엔드 개발자 이연지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans selection:bg-purple-200 selection:text-purple-900 dark:selection:bg-purple-900 dark:selection:text-purple-100">
        {children}
      </body>
    </html>
  );
}

