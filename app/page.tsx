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


        {/* Copyright */}
        <div
          className="
            -mt-8

            px-5
            py-2.5

            rounded-2xl

            bg-white/40

            backdrop-blur-2xl

            border
            border-white/60

            shadow-[0_15px_40px_rgba(0,0,0,0.12)]

            text-sm

            text-gray-500

            font-medium

            hover:scale-105

            transition-all
            duration-300
          "
        >
          © 2026 All rights reserved ·{" "}

          <span
            className="
              font-bold

              bg-gradient-to-r
              from-indigo-500
              via-purple-500
              to-pink-500

              bg-clip-text

              text-transparent
            "
          >
            x.jew.dev
          </span>

        </div>

      </div>
    </main>
  );
}