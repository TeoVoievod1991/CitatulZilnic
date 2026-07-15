import Header from "@/components/Header";
import Envelope from "@/components/Envelope";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-zinc-100">
      <div className="blob blob-blue" />
      <div className="blob blob-purple" />
      <div className="blob blob-pink" />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-16 px-6">
        <Header />
        <Envelope />
      </div>
    </main>
  );
}