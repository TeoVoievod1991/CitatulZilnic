import Link from "next/link";

export default function Header() {
  return (
    <header className="text-center space-y-4">

      {/* Recomandarea zilei */}
      <Link
        href="/recomandari"
        className="
          fixed

          left-5
          bottom-5

          md:top-1/2
          md:-translate-y-1/2
          md:bottom-auto

          group

          overflow-hidden

          px-6
          py-4

          rounded-3xl

          bg-gradient-to-br
          from-white/70
          via-white/35
          to-white/10

          backdrop-blur-3xl

          border
          border-white/80

          shadow-[0_20px_60px_rgba(0,0,0,0.18)]

          text-gray-900

          font-semibold

          hover:scale-105
          hover:-translate-y-1

          daily-glow

          transition-all
          duration-300

          z-50
        "
      >
        <span className="relative z-10 flex items-center gap-2">
          ✨ Recomandarea zilei
        </span>
      </Link>



      {/* Titlu */}
      <h1
        className="
          premium-title

          text-5xl
          md:text-7xl

          font-black

          tracking-tight

          drop-shadow-sm
        "
      >
        Citatul Zilnic
      </h1>



      {/* Subtitlu */}
      <p
        className="
          text-lg
          md:text-xl

          text-gray-600

          max-w-xl
          mx-auto

          font-medium

          opacity-90
        "
      >
        O doză de inspirație în fiecare zi.
      </p>



      {/* Linie decorativă */}
      <div
        className="
          mx-auto

          mt-5

          h-1

          w-24

          rounded-full

          bg-gradient-to-r
          from-indigo-400
          via-purple-400
          to-pink-400

          opacity-70
        "
      />



      {/* Instagram Glass Button */}
      <a
        href="https://instagram.com/x.jew.dev"
        target="_blank"
        rel="noopener noreferrer"

        className="
          fixed

          right-5
          bottom-5

          z-50

          group

          flex

          h-16
          w-16

          items-center
          justify-center

          overflow-hidden

          rounded-[1.5rem]

          bg-gradient-to-br
          from-white/80
          via-white/30
          to-white/10

          backdrop-blur-3xl

          border
          border-white/90

          shadow-[0_25px_70px_rgba(0,0,0,0.25)]

          hover:scale-110
          hover:-translate-y-2

          transition-all
          duration-500
        "
      >

        {/* Reflexie sticlă */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-white/80
            via-transparent
            to-transparent

            pointer-events-none
          "
        />


        {/* Glow Instagram */}
        <div
          className="
            absolute

            -bottom-8
            -right-8

            h-20
            w-20

            rounded-full

            bg-pink-500/40

            blur-3xl
          "
        />


        {/* Icon Instagram */}
        <span
          className="
            relative
            z-10

            flex

            h-10
            w-10

            items-center
            justify-center

            rounded-2xl

            bg-gradient-to-tr
            from-yellow-400
            via-pink-500
            to-purple-600

            text-3xl

            font-bold

            text-white

            shadow-lg

            group-hover:scale-110

            transition-transform
            duration-300
          "
        >
          ◎
        </span>

      </a>


    </header>
  );
}