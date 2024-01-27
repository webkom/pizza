'use client';
import { useEffect, useState } from 'react';



export default function Home() {
  const [ratings, setRatings] = useState([])
  useEffect( () => {
    const fetchRating = async () => {
      const response = await fetch("http://localhost:3000/api/rating")
      const data = await response.json()
      console.log(JSON.stringify(data[0]))
      setRatings(data)
    }
    fetchRating()
  }, [])

  return (
    <main>
      <div className='ratingBox'>{ratings.map(rating => <p>{rating.rating}</p>)}</div>
    </main>
  )
}
