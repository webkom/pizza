"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [ratings, setRatings] = useState<
    { rating: number; userName: string }[]
  >([]);
  useEffect(() => {
    const fetchRating = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/rating"
      );
      const data = await response.json();
      console.log(JSON.stringify(data[0]));
      setRatings(data);
    };
    fetchRating();
  }, []);

  return (
    <main>
      <div className="ratingBox">
        {ratings.map((rating) => (
          <p key={rating.userName}>{rating.rating}</p>
        ))}
      </div>
    </main>
  );
}
