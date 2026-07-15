import Link from "next/link";
import { recommendations } from "@/lib/recommendations";

export default function Recomandari() {
  const day = Math.floor(Date.now() / 86400000);
  const recommendation = recommendations[day % recommendations.length];

  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center p-6">

      {/* Fundal animat */}
      <div className="blob blob-blue" />
      <div className="blob blob-purple" />
      <div className="blob blob-pink" />


      {/* Card Liquid Glass */}
      <div
        className="
          relative
          z-10

          w-full
          max-w-2xl

          rounded-[3rem]

          bg-gradient-to-br
          from-white/60
          via-white/25
          to-white/10

          backdrop-blur-[45px]

          border
          border-white/70

          shadow-[0_35px_120px_rgba(0,0,0,0.25)]

          p-8
          md:p-12

          overflow-hidden

          pop-animation

          glass-shine
        "
      >

        {/* Reflexie mare de sticlă */}
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


        {/* Glow interior sus */}
        <div
          className="
            absolute

            -top-40
            -left-40

            w-96
            h-96

            rounded-full

            bg-white/50

            blur-[90px]

            pointer-events-none
          "
        />


        {/* Glow mov jos */}
        <div
          className="
            absolute

            -bottom-40
            -right-40

            w-96
            h-96

            rounded-full

            bg-purple-400/30

            blur-[100px]

            pointer-events-none
          "
        />


        <div className="relative z-10">


          {/* Icon */}
          <div className="text-center">

            <div
              className="
                mx-auto

                w-28
                h-28

                rounded-[2.5rem]

                flex
                items-center
                justify-center

                bg-white/40

                backdrop-blur-2xl

                border
                border-white/70

                shadow-[0_20px_50px_rgba(0,0,0,0.15)]

                text-6xl
              "
            >
              ✨
            </div>


            <h1
              className="
                mt-8

                text-5xl
                md:text-6xl

                font-bold

                tracking-tight

                text-gray-900
              "
            >
              Recomandarea zilei
            </h1>


            <div
              className="
                inline-flex

                mt-6

                px-6
                py-3

                rounded-full

                bg-white/40

                backdrop-blur-xl

                border
                border-white/60

                shadow-lg

                text-gray-800

                font-medium
              "
            >
              {recommendation.type}
            </div>

          </div>



          {/* Titlu */}
          <div className="mt-10 text-center">

            <h2
              className="
                text-4xl

                font-bold

                text-gray-900
              "
            >
              {recommendation.title}
            </h2>


            {recommendation.info && (
              <p
                className="
                  mt-3

                  text-lg

                  text-gray-600
                "
              >
                {recommendation.info}
              </p>
            )}

          </div>



          {/* Descriere */}
          <div
            className="
              mt-10

              rounded-[2rem]

              bg-white/35

              backdrop-blur-2xl

              border
              border-white/60

              shadow-inner

              p-7
            "
          >

            <h3
              className="
                text-xl

                font-semibold

                text-gray-900
              "
            >
              Despre
            </h3>


            <p
              className="
                mt-3

                text-gray-700

                text-lg

                leading-relaxed
              "
            >
              {recommendation.description}
            </p>

          </div>



          {/* Motiv */}
          {recommendation.reason && (
            <div
              className="
                mt-5

                rounded-[2rem]

                bg-gradient-to-br

                from-white/50

                to-white/20

                backdrop-blur-2xl

                border
                border-white/70

                p-7
              "
            >

              <h3
                className="
                  text-xl

                  font-semibold

                  text-gray-900
                "
              >
                💡 De ce merită?
              </h3>


              <p
                className="
                  mt-3

                  text-gray-700

                  text-lg

                  leading-relaxed
                "
              >
                {recommendation.reason}
              </p>

            </div>
          )}



          {/* Buton */}
          <Link
            href="/"
            className="
              mt-8

              block

              text-center

              rounded-3xl

              bg-black/80

              backdrop-blur-xl

              border
              border-white/20

              text-white

              py-5

              font-semibold

              shadow-xl

              hover:scale-[1.03]

              hover:bg-black

              transition-all

              duration-300
            "
          >
            ← Înapoi la citatul zilei
          </Link>


        </div>

      </div>

    </main>
  );
}