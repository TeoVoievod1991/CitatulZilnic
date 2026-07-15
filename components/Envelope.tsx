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
      <div
        className="
          pop-animation
          glass-shine

          relative
          mt-10

          w-[520px]
          max-w-[90vw]

          overflow-hidden

          rounded-[3rem]

          bg-gradient-to-br
          from-white/60
          via-white/30
          to-white/10

          backdrop-blur-[45px]

          border
          border-white/70

          p-12

          shadow-[0_40px_120px_rgba(0,0,0,0.22)]
        "
      >

        {/* Reflexie sticlă */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-white/50
            via-transparent
            to-transparent

            pointer-events-none
          "
        />


        {/* Glow-uri */}
        <div
          className="
            absolute
            -right-24
            -top-24

            h-72
            w-72

            rounded-full

            bg-blue-300/30

            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -bottom-24
            -left-24

            h-72
            w-72

            rounded-full

            bg-purple-300/30

            blur-[100px]
          "
        />


        <div className="absolute left-8 top-2 select-none text-[150px] font-serif text-white/40">
          “
        </div>


        <div className="relative z-10">

          <h2
            className="
              mb-10

              text-center

              text-4xl

              font-bold

              tracking-tight

              text-gray-900
            "
          >
            Citatul zilei
          </h2>


          <p
            className="
              text-center

              text-3xl

              italic

              leading-relaxed

              text-gray-800
            "
          >
            „{quote.text}”
          </p>


          <div className="mx-auto mt-10 h-[2px] w-28 bg-white/80" />


          <p
            className="
              mt-8

              text-center

              text-xl

              font-medium

              text-gray-600
            "
          >
            — {quote.author}
          </p>


          <div
  className="
    glass-shine

    relative
    overflow-hidden

    mx-auto

    mt-10

    w-[240px]

    rounded-[1.8rem]

    bg-gradient-to-br
    from-white/60
    via-white/30
    to-white/10

    backdrop-blur-3xl

    border
    border-white/70

    p-4

    text-center

    shadow-[0_20px_60px_rgba(0,0,0,0.14)]
  "
>

  {/* Glow mic */}
  <div
    className="
      absolute

      -top-16
      left-1/2

      -translate-x-1/2

      h-28
      w-28

      rounded-full

      bg-indigo-400/30

      blur-[60px]
    "
  />


  <div className="relative z-10">

    <p
      className="
        text-[9px]

        font-bold

        uppercase

        tracking-[0.35em]

        text-gray-500
      "
    >
      Următorul citat în
    </p>


    <p
      className="
        mt-2

        text-3xl

        font-black

        tracking-[0.18em]

        bg-gradient-to-r

        from-gray-900

        via-indigo-600

        to-purple-600

        bg-clip-text

        text-transparent

        drop-shadow-md
      "
    >
      {timeLeft}
    </p>


    <div
      className="
        mx-auto

        mt-3

        h-[3px]

        w-14

        rounded-full

        bg-gradient-to-r

        from-indigo-400

        via-purple-400

        to-pink-400
      "
    />

  </div>

</div>

        </div>

      </div>
    );
  }


  return (
    <button
      onClick={handleOpen}
      className="
        group
        mt-10

        transition-all
        duration-500

        active:scale-95
      "
    >

      <div
        className="
          glass-shine

          relative

          flex

          h-60
          w-96
          max-w-[90vw]

          items-center
          justify-center

          overflow-hidden

          rounded-[3rem]

          bg-gradient-to-br
          from-white/60
          via-white/30
          to-white/10

          backdrop-blur-[45px]

          border
          border-white/70

          shadow-[0_40px_100px_rgba(0,0,0,0.18)]

          transition-all
          duration-500

          group-hover:-translate-y-3

          group-hover:shadow-[0_50px_120px_rgba(0,0,0,0.25)]
        "
      >

        {/* Reflexie */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-white/50
            via-transparent
            to-transparent
          "
        />


        {/* Lumini */}
        <div
          className="
            absolute

            -right-20
            -top-20

            h-64
            w-64

            rounded-full

            bg-blue-300/40

            blur-[100px]

            transition

            group-hover:scale-125
          "
        />


        <div
          className="
            absolute

            -bottom-20
            -left-20

            h-64
            w-64

            rounded-full

            bg-purple-300/40

            blur-[100px]
          "
        />


        <span
          className="
            relative
            z-10

            text-[100px]

            transition-all
            duration-500

            group-hover:scale-125

            group-hover:rotate-6
          "
        >
          ✉️
        </span>


      </div>

    </button>
  );
}