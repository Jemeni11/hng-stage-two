import Image from "next/image";
import Header from "@/components/Header";
import RightArrow from "../../public/Icons/RightArrow.svg";
import { getMoviesGenre, getTopRatedMovies } from "@/utils";
import type { Genres, isAuthenticated, Movie, TopRated } from "@/types";
import MovieCard from "@/components/MovieCard";
import Facebook from "../../public/Icons/Facebook.svg";
import Instagram from "../../public/Icons/Instagram.svg";
import Twitter from "../../public/Icons/Twitter.svg";
import Youtube from "../../public/Icons/Youtube.svg";

type HomeProps = {
  data: {
    authdata: isAuthenticated;
    top_rated: TopRated | undefined;
    genres: Genres | undefined;
  };
};

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Header />
      <Body topRatedMovies={data.top_rated?.results} genres={data.genres?.genres} />
      <Footer />
    </>
  );
}

function Body({ topRatedMovies, genres }: { topRatedMovies: TopRated["results"] | undefined; genres: Genres["genres"] | undefined }) {
  let topRatedMoviesSliced: Movie[] = [];

  if (topRatedMovies) {
    topRatedMoviesSliced = topRatedMovies.slice(0, 10);
  }

  return (
    <div className="w-full px-[5%] pt-[4.38rem] md:px-[6.25rem]">
      <div className="min-h-screen w-full">
        <section className="mb-11 flex items-center justify-between">
          <h2 className="text-4xl font-bold text-black">Featured Movie</h2>
          <button type="button" className="flex items-center gap-2">
            <span className="text-lg leading-6 text-rose-700">See more</span>
            <Image src={RightArrow} alt="see more" />
          </button>
        </section>
        <div className="mb-12 grid min-h-screen w-full grid-cols-1 gap-x-20 gap-y-[6.44rem] sm:grid-cols-2 md:mb-[9.19rem] md:grid-cols-3 lg:grid-cols-4">
          {!topRatedMovies && <div>No top rated movies...</div>}
          {topRatedMoviesSliced.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              genre_ids={movie.genre_ids}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              popularity={movie.popularity}
              genre={genres}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mb-8 flex w-full flex-col items-center justify-center gap-y-[2.12rem] md:mb-[4.6rem]">
      <div className="flex gap-x-12">
        <Image src={Facebook} alt="FaceBook" />
        <Image src={Instagram} alt="Instagram" />
        <Image src={Twitter} alt="Twitter" />
        <Image src={Youtube} alt="Youtube" />
      </div>
      <div className="flex gap-x-12">
        <span className="text-lg font-bold leading-[normal] text-gray-900">Conditions of Use</span>
        <span className="text-lg font-bold leading-[normal] text-gray-900">Privacy & Policy</span>
        <span className="text-lg font-bold leading-[normal] text-gray-900">Press Room</span>
      </div>
      <span className="text-lg font-bold leading-[normal] text-gray-500">© 2021 MovieBox by Adriana Eka Prayudha</span>
    </footer>
  );
}

export async function getServerSideProps() {
  // movie name           -> title
  // imdb rating          -> vote average
  // rotten tomato rating -> popularity
  // description          -> overview
  // video trailer        -> get manually
  // background           -> backdrop_path
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env["AUTH_TOKEN"]}`,
    },
  };
  let data = {};

  try {
    const res = await fetch("https://api.themoviedb.org/3/authentication", options);
    const authdata: isAuthenticated = await res.json();
    data = { ...data, authdata: authdata };
    console.log("getServerSideProps", data);
  } catch (error) {
    console.error("getServerSideProps", error);
  }

  const topRatedMovies = await getTopRatedMovies();
  data = { ...data, top_rated: topRatedMovies };

  const movieGenres = await getMoviesGenre();
  data = { ...data, genres: movieGenres };

  // Pass data to the page via props
  return { props: { data } };
}
