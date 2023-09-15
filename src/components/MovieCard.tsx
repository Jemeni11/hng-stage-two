import Image from "next/image";
import IMDb from "../../public/Icons/imdb.svg";
import Tomato from "../../public/Icons/tomato.svg";
import type { Genres, Movie } from "@/types";
import Link from "next/link";
import { useState } from "react";

type MovieCardProps = {
  id: Movie["id"];
  title: Movie["title"];
  poster_path: Movie["poster_path"];
  genre_ids: Movie["genre_ids"];
  vote_average: Movie["vote_average"];
  release_date: Movie["release_date"];
  popularity: Movie["popularity"];
  genre: Genres["genres"] | undefined;
};

export default function MovieCard({ id, title, poster_path, genre_ids, vote_average, release_date, popularity, genre }: MovieCardProps) {
  const genreNames = genre_ids.map((id) => genre!.find((genre) => genre.id === id)?.name);
  const genreString = genreNames?.join(", ");
  const [like, setLike] = useState<boolean>(false);

  return (
    <div>
      <div className="relative left-[80%] top-[7%] w-8 rounded-[50%] bg-[rgba(243,244,246,0.50)] p-[0.31rem]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className={`${like ? "text-rose-700" : "text-[#D1D5DB]"}`}
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setLike((prev) => !prev)}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <Link href={`movies/${id}`} className="mb-[1.44rem] flex flex-col gap-3" data-testid="movie-card">
        <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="movie poster"
          className="aspect-[0.675675675676] w-full bg-gray-500"
          width="250"
          height="370"
          data-testid="movie-poster"
        />
        <span className="text-xs font-bold leading-[normal] text-gray-400" data-testid="movie-release-date">
          {release_date.split("-")[0]}
        </span>
        <strong className="text-lg leading-[normal] text-gray-900" data-testid="movie-title">
          {title}
        </strong>
        <div className="flex justify-between">
          <div className="flex items-center gap-[0.62rem]">
            <Image src={IMDb} alt="IMDb" />
            <span className="text-xs font-normal leading-3 text-black">{vote_average.toFixed(1)} / 10</span>
          </div>
          <div className="flex items-center gap-[0.62rem]">
            <Image src={Tomato} alt="Rotten Tomato" />
            <span className="text-xs font-normal leading-3 text-black">{popularity.toFixed(0)}%</span>
          </div>
        </div>
        <span className="text-xs font-bold leading-[normal] text-gray-400">{genreString}</span>
      </Link>
    </div>
  );
}
