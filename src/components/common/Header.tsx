"use client";

import type { ReactElement } from "react";

// 공통 헤더 컴포넌트
export default function Header(): ReactElement {
  return (
    <header className="w-full border-b px-6 py-4">
      <h1 className="text-xl font-semibold">🌸 다시, 봄 - 복지사 대시보드</h1>
    </header>
  );
}