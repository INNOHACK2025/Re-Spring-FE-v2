"use client";

import type { ReactElement } from "react";

// 공통 푸터 컴포넌트
export default function Footer(): ReactElement {
  return (
    <footer className="w-full border-t px-6 py-4 text-sm text-gray-500">
      © 2025 다시, 봄 – 시니어 케어·일자리 매칭 플랫폼
    </footer>
  );
}
