import { useRouter } from "next/router";
import Link from "next/link";
import LoadingSpinner from "@/components/LoadingSpinner";
import Head from "next/head";
import Image from "next/image";
import { DM_Sans_Font } from "@/pages/_app";
import { Poppins } from "next/font/google";
import type { MovieExpanded } from "@/types";
import TV from "../../../public/Icons/tv.svg";
import Home from "../../../public/Icons/Home.svg";
import MovieProjector from "../../../public/Icons/Movie Projector.svg";
import TVSeries from "../../../public/Icons/TV Show.svg";
import Upcoming from "../../../public/Icons/Calendar.svg";
import Logout from "../../../public/Icons/Logout.svg";
import PlayButton from "../../../public/Icons/PlayButton.svg";
import ExpandDownArrow from "../../../public/Icons/ExpandDownArrow.svg";
import Star from "../../../public/Icons/Star.svg";
import Tickets from "../../../public/Icons/Tickets.svg";
import List from "../../../public/Icons/List.svg";
import ListWhite from "../../../public/Icons/ListWhite.svg";
import { getMovieData } from "@/utils";

const Poppins_Font = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function Movies({ data }: { data: { movieData: MovieExpanded } }) {
  const router = useRouter();
  const slug = router.query.slug;

  if (!slug) {
    return <LoadingSpinner />;
  }

  if (!data.movieData) {
    router.push("/404");
  }

  const posterImagePath = `https://image.tmdb.org/t/p/original${data.movieData.poster_path}`;
  const backDropImagePath = `https://image.tmdb.org/t/p/w1280${data.movieData.backdrop_path}`;

  const videosYouTubeTrailerSort = data.movieData.videos.results.filter(
    (video) => video.site === "YouTube" && video.type.includes("Trailer"),
  );
  let doesTrailerExist = false;
  let trailerLink = "";
  if (videosYouTubeTrailerSort.length > 0) {
    doesTrailerExist = true;
    trailerLink = `https://www.youtube.com/watch?v=${videosYouTubeTrailerSort[0].key}`;
  }

  const writers = data.movieData.credits.crew.filter((crew) => crew.department === "Writing");
  const writersNames = [...new Set(writers.map((writer) => writer.name))];

  const directors = data.movieData.credits.crew.filter((crew) => crew.job === "Director");
  const directorNames = [...new Set(directors.map((director) => director.name))];

  const actors = data.movieData.credits.cast.filter((cast) => cast.known_for_department === "Acting");
  const sortedActors = [...new Set(actors)].sort((a, b) => b.popularity - a.popularity);
  const topThreeActors = sortedActors.slice(0, 3).map((actor) => actor.name);

  return (
    <>
      <Head>
        <title>{data.movieData.title} | MovieBox</title>
      </Head>
      <div className={`${Poppins_Font.className} grid grid-cols-[4rem_calc(100vw_-_5rem)] sm:grid-cols-[14.125rem_calc(100vw_-_16rem)]`}>
        <aside className="flex min-h-screen w-16 flex-col justify-between rounded-r-[2.81rem] border-e bg-white pb-4 pt-[3.25rem] sm:w-[14.125rem]">
          <div className="mb-8 py-4 sm:mb-[4.8rem] sm:px-5">
            <div className="flex items-center justify-center gap-6">
              <Image src={TV} alt="TV" />
              <span className={`${DM_Sans_Font.className} hidden text-2xl font-bold leading-6 text-[#333] sm:block`}>MovieBox</span>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-4 sm:mb-8 sm:gap-[1.13rem]">
            <Link href="/" className="flex items-center justify-center gap-[0.94rem] py-7 sm:justify-normal sm:pl-[2.62rem]">
              <Image src={Home} alt="Home" />
              <span className="hidden text-xl font-semibold leading-[normal] text-[#666] sm:block">Home</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center gap-[0.94rem] border-r-[6px] border-r-[#BE123C] bg-[#BE123C1A] py-7 sm:justify-normal sm:pl-[2.62rem]"
            >
              <Image src={MovieProjector} alt="Movies" />
              <span className="hidden text-xl font-semibold leading-[normal] text-[#BE123C] sm:block">Movies</span>
            </Link>
            <Link href="/TVSeries" className="flex items-center justify-center gap-[0.94rem] py-7 sm:justify-normal sm:pl-[2.62rem]">
              <Image src={TVSeries} alt="TV Series" />
              <span className="hidden text-xl font-semibold leading-[normal] text-[#666] sm:block">TV Series</span>
            </Link>
            <Link href="/Upcoming" className="flex items-center justify-center gap-[0.94rem] py-7 sm:justify-normal sm:pl-[2.62rem]">
              <Image src={Upcoming} alt="Upcoming" />
              <span className="hidden text-xl font-semibold leading-[normal] text-[#666] sm:block">Upcoming</span>
            </Link>
          </div>
          <div className="mx-7 mb-6 hidden flex-col gap-y-2 rounded-[1.25rem] border border-[#BE123CB2] bg-[#F8E7EB66] px-4 pb-4 pt-10 sm:flex">
            <p className="text-[0.9375rem] font-semibold leading-[normal] text-[#333333CC]">Play movie quizzes and earn free tickets</p>
            <p className="text-[0.725rem] font-medium leading-[normal] text-[#666]">50k people are playing now</p>
            <button type="button" className="rounded-[1.875rem] bg-[#BE123C33] px-[1.06rem] py-[0.38rem]">
              <span className="text-xs font-medium text-[#BE123C]">Start playing</span>
            </button>
          </div>
          <button type="button" className="flex items-center justify-center gap-[0.62rem] py-2 sm:justify-normal sm:pl-[2.62rem]">
            <Image src={Logout} alt="Log out" />
            <span className="hidden text-xl font-semibold leading-[normal] text-[#666] sm:block">Log out</span>
          </button>
        </aside>
        <div className="flex max-w-[calc(100vw_-_5rem)] flex-col items-center px-[5%] pt-[2.38rem] sm:w-[calc(100vw_-_16rem)] sm:max-w-[calc(100vw_-_16rem)] sm:px-[2.75rem]">
          {doesTrailerExist && (
            <a
              href={trailerLink}
              target="_blank"
              className="absolute top-[50vw] z-10 flex min-w-[5vw] flex-col items-center justify-center gap-1 drop-shadow-[0px_2px_4px_rgba(0,0,0,0.25)] sm:top-[30vw] md:top-[12.5vw] md:gap-[0.56rem] xl:top-[12rem] xl:min-w-[6.875rem]"
            >
              <Image src={PlayButton} alt="play" className="z-20 w-12" />
              <span className="text-xs font-bold text-[#E8E8E8] md:text-base lg:text-[1.5625rem]">Watch Trailer</span>
            </a>
          )}
          <Image
            src={backDropImagePath}
            alt="Trailer"
            className="mb-[1.94rem] hidden aspect-[2.6681514476614] rounded-[1.25rem] bg-gray-400 md:block"
            width={1280}
            height={600}
          />
          <Image
            src={posterImagePath}
            alt="Trailer"
            className="mb-[1.94rem] aspect-[0.675675675676] rounded-lg bg-gray-400 md:hidden"
            width={370}
            height={250}
          />
          <div className="flex w-full flex-col gap-[1.62rem] px-[1.19rem] xl:flex-row">
            <div className="w-full xl:w-[68%]">
              <div className="mb-3 flex flex-col gap-4 md:mb-6 md:gap-8 xl:flex-row">
                <p className="text-lg font-medium text-[#404040] md:text-[1.4375rem]">
                  <span data-testid="movie-title">{data.movieData.title}</span>
                  <span className="font-bold"> • </span>
                  <span data-testid="movie-release-date">{new Date(data.movieData.release_date).toUTCString()}</span>
                  {data.movieData.adult && (
                    <>
                      <span className="font-bold"> • </span>
                      <span>Adult</span>
                    </>
                  )}
                  <span className="font-bold"> • </span>
                  <span data-testid="movie-runtime">{data.movieData.runtime}</span>
                </p>
                <div className="flex flex-wrap gap-[0.69rem]">
                  {data.movieData.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="max-h-8 rounded-[0.9375rem] border border-[#F8E7EB] px-[1.09rem] py-[0.22rem] text-[0.9375rem] font-medium text-[#B91C1C]"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mb-5 text-base text-[#333] md:text-xl" data-testid="movie-overview">
                {data.movieData.overview}
              </p>
              <div className="mb-3 flex flex-col gap-2 md:mb-[0.94rem] md:gap-[1.94rem]">
                {directorNames.length > 0 && (
                  <p className="mt-4 text-base font-normal leading-[normal] md:text-xl">
                    <span className="text-[#333]">Director : </span>
                    <span className="text-[#BE123C]">{directorNames.join(", ")}</span>
                  </p>
                )}
                {writersNames.length > 0 && (
                  <p className="mt-4 text-base font-normal leading-[normal] md:text-xl">
                    <span className="text-[#333]">Writers : </span>
                    <span className="text-[#BE123C]">{writersNames.join(", ")}</span>
                  </p>
                )}
                {sortedActors.length > 0 && (
                  <p className="mt-4 text-base font-normal leading-[normal] md:text-xl">
                    <span className="text-[#333]">Stars : </span>
                    <span className="text-[#BE123C]">{topThreeActors.join(", ")}</span>
                  </p>
                )}
              </div>
              <div className="flex flex-col xl:flex-row">
                <button
                  type="button"
                  className="whitespace-nowrap rounded-[0.63rem] bg-[#BE123C] px-3 py-[0.78rem] text-base font-medium text-white md:px-[1.22rem] md:text-xl"
                >
                  Top rated movie #65
                </button>
                <div className="flex w-full items-center justify-between py-[0.78rem] pl-3 pr-4 md:pl-6 md:pr-[1.63rem]">
                  <span className="text-base font-medium text-[#333] md:text-xl">Awards 9 nominations</span>
                  <Image src={ExpandDownArrow} alt="expand" />
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[32%]">
              <div className="mb-6 flex w-full items-center justify-end font-medium">
                <Image src={Star} alt="star" className="mr-[0.56rem]" />
                <span className="text-[1.5625rem] text-[#E8E8E8]">{data.movieData.vote_average.toFixed(1)} </span>
                <span className="text-lg text-[#666] md:text-xl">| 350k</span>
              </div>
              <button
                type="button"
                className="mb-3 flex w-full items-center justify-center gap-[0.62rem] rounded-[0.625rem] bg-[#BE123C] px-[5.38rem] py-[0.64rem]"
              >
                <Image src={Tickets} alt="Tickets" />
                <span className="shrink-0 text-base font-medium text-white drop-shadow-[0px_2px_4px_rgba(0,0,0,0.20)] md:text-xl">
                  See Showtimes
                </span>
              </button>
              <button
                type="button"
                className="mb-[2.06rem] flex w-full items-center justify-center gap-1 rounded-[0.625rem] border border-[#BE123C] bg-[rgba(190,18,60,0.10)] px-[3.94rem] py-4 md:gap-3"
              >
                <Image src={List} alt="List" />
                <span className="shrink-0 text-[0.9rem] font-medium text-[#333] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.20)] md:text-xl">
                  More watch options
                </span>
              </button>
              <div className=" flex h-full w-full overflow-x-hidden rounded-[0.625rem] bg-threemoviesstack bg-cover bg-no-repeat xl:h-[14.3125rem]">
                <p className="relative top-[calc(100%_-_2.625rem)] inline-flex h-[2.625rem] w-full items-center justify-center gap-3 rounded-[0.63rem] bg-[#12121280] px-4 py-[0.64rem] xl:top-[11.6875rem]">
                  <Image src={ListWhite} alt="List" className="hidden text-white md:block" />
                  <span className="text-sm font-medium text-[#E8E8E8] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] xl:text-sm">
                    The Best Movies and Shows in September
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const movie_id = +params.slug;

  const movieData = await getMovieData(movie_id);

  let data = { movieData: movieData };

  return { props: { data } };
}
