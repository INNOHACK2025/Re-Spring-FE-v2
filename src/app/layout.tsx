import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "다시, 봄 - 고령 인력 매칭 플랫폼",
  description: "시니어 일자리 매칭 및 사회복지사 업무 자동화 플랫폼",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
