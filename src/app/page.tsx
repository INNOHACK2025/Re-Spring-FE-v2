export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-secondary/20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <h1 className="text-6xl font-bold text-foreground">다시, 봄</h1>
        </div>

        <p className="text-2xl text-muted-foreground mb-4 leading-relaxed">
          고령 인력 매칭 & 사회복지사 업무 자동화 플랫폼
        </p>

        <p className="text-lg text-foreground/80 mb-12 leading-relaxed max-w-xl mx-auto">
          AI 기술로 시니어 일자리 매칭 과정을 자동화하여, 복지사 1인이 더 많은
          시니어를 효율적으로 케어할 수 있도록 돕습니다.
        </p>

        <p>시니어 매칭 시작하기</p>
      </div>
    </div>
  );
}
