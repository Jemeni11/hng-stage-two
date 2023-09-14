import Image from "next/image";
import IMDb from "../../public/Icons/imdb.svg";
import Tomato from "../../public/Icons/tomato.svg";
import type { Genres, Movie } from "@/types";
import Link from "next/link";

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

  return (
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
  );
}
