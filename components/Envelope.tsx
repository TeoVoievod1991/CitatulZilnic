"use client";

import { useEffect, useState } from "react";
import { getDailyQuote } from "@/lib/getDailyQuote";

type Quote = {
  text: string;
  author: string;
};

export default function Envelope() {
  const [openedToday, setOpenedToday] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const [quote, setQuote] = useState<Quote | null>(null);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const dailyQuote = getDailyQuote();
    setQuote(dailyQuote);

    const lastOpen = localStorage.getItem("lastOpen");

    if (lastOpen === today) {
      setOpenedToday(true);
    }
  }, [today]);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();

      const tomorrow = new Date();
      tomorrow.setHours(24, 0, 0, 0);

      const diff = tomorrow.getTime() - now.getTime();

      if (diff <= 0) {
        localStorage.removeItem("lastOpen");
        localStorage.removeItem("dailyQuote");
        window.location.reload();
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
          2,
          "0"
        )}:${String(seconds).padStart(2, "0")}`
      );
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOpen = () => {
    localStorage.setItem("lastOpen", today);
    setOpenedToday(true);
  };


  if (openedToday && quote) {
    return (
      <div className="pop-animation relative mt-10 w-[520px] overflow-hidden rounded-[36px] border border-white/40 bg-white/75 p-12 shadow-[0_30px_90px_rgba(0,0,0,0.12)] backdrop-blur-2xl">

        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-200/30 blur-3xl" />

        <div className="absolute left-8 top-2 select-none text-[120px] font-serif text-gray-200">
          “
        </div>

        <div className="relative z-10">

          <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-gray-900">
            Citatul zilei
          </h2>

          <p className="text-center text-2xl italic leading-10 text-gray-700">
            „{quote.text}”
          </p>

          <div className="mt-10 flex justify-center">
            <div className="h-px w-24 bg-gray-300" />
          </div>

          <p className="mt-8 text-center text-lg font-medium tracking-wide text-gray-500">
            — {quote.author}
          </p>

          <div className="mx-auto mt-10 w-[260px] rounded-2xl border border-gray-200/70 bg-white/60 p-4 text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400">
              Revino pentru următorul citat în
            </p>

            <p className="mt-2 text-3xl font-bold tracking-widest text-gray-900">
              {timeLeft}
            </p>

          </div>

        </div>
      </div>
    );
  }


  return (
    <button
      onClick={handleOpen}
      className="group mt-10 transition duration-300 active:scale-95"
    >
      <div className="relative flex h-52 w-80 items-center justify-center overflow-hidden rounded-[32px] border border-white/50 bg-white/75 shadow-[0_25px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_35px_90px_rgba(0,0,0,0.18)]">

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl transition group-hover:scale-125" />

        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-purple-200/40 blur-3xl" />

        <span className="relative z-10 text-7xl transition duration-500 group-hover:scale-110">
          ✉️
        </span>

      </div>
    </button>
  );
}