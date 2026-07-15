import quotes from "@/quotes/ro";

export function getDailyQuote() {
  const today = new Date().toISOString().split("T")[0];

  // verificăm dacă există deja un citat salvat pentru azi
  const saved = localStorage.getItem("dailyQuote");

  if (saved) {
    const data = JSON.parse(saved);

    if (data.date === today) {
      return data.quote;
    }
  }

  // alegem un citat random
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const newQuote = quotes[randomIndex];

  // îl salvăm pentru ziua respectivă
  localStorage.setItem(
    "dailyQuote",
    JSON.stringify({
      date: today,
      quote: newQuote,
    })
  );

  return newQuote;
}