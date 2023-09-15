import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ConfigContext } from "@/store/context";
import Logo from "../../public/Icons/TV.png";
import Search from "../../public/Icons/Search.svg";
import Menu from "../../public/Icons/Menu.svg";
import IMDb from "../../public/Icons/imdb.svg";
import Tomato from "../../public/Icons/tomato.svg";
import Play from "../../public/Icons/Play.svg";

export default function Header() {
  const config = useContext(ConfigContext);
  const imageTemplate = `bg-[url('${config.images.secure_base_url}${config.images.backdrop_sizes.includes("w1280") ? "w1280" : "original"}`;
  const listOfBackgroundImages = [
    `${imageTemplate}/f1hes6yVaZ7SACcjBvovkcCCnTf.jpg')]`,
    `${imageTemplate}/gq2i1x5pwmzWLauzgi1QhNra9BQ.jpg')]`,
    `${imageTemplate}/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg')]`,
    `${imageTemplate}/oSBGIgB7biYxgRhJ3CpiRTtXUQR.jpg')]`,
    `${imageTemplate}/xNLNyHrIV4du9png49BtM8Bahqk.jpg')]`,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % listOfBackgroundImages.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, [listOfBackgroundImages.length]);

  return (
    <header className={`min-h-screen bg-[url('https://image.tmdb.org/t/p/w1280/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg')] bg-cover bg-no-repeat`}>
      <Navbar />
      <MovieDetails />
    </header>
  );
}

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = () => {
    if (searchInput.trim() === "") return;
    alert(searchInput);
  };
  return (
    <div className="mx-auto min-h-[5rem] max-w-screen-xl bg-transparent px-4 py-[0.94rem] sm:px-6 lg:px-8 min-[1440px]:px-[6.035rem]">
      <div className="flex items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Link className="flex items-center gap-6" href="/">
            <Image src={Logo} alt="Home" />
            <span className="text-2xl font-bold leading-6 text-white">MovieBox</span>
          </Link>
        </div>

        <div className="hidden lg:block">
          <div className="inline-flex h-9 w-[525px] items-center justify-between gap-2.5 rounded-md border border-gray-300 px-2.5 py-1.5">
            <input
              className="w-full border-none bg-transparent text-base font-normal leading-normal text-white outline-none placeholder:text-white"
              type="text"
              name="movie_search_input"
              id="movie_search_input"
              placeholder="What do you want to watch?"
              value={searchInput} // I can't remember if it's supposed to be value or defaultValue I connect to state
              onChange={(event) => setSearchInput(event.target.value)}
            />
            <Image src={Search} alt="Search" className="hover:cursor-pointer" onClick={handleSearch} />
          </div>
        </div>

        <div className="flex items-center gap-[1.59rem]">
          <span className="hidden text-sm font-bold leading-6 text-white sm:block md:text-base">Sign In</span>
          <Image src={Menu} alt="Menu" className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const MovieDetails = () => {
  return (
    <section className="flex min-h-[calc(100vh_-_5rem)] flex-col gap-4 px-[5%] pt-8 md:pl-[6.12rem] md:pt-[4.88rem]">
      <h1 className="w-full text-5xl font-bold leading-[3.5rem] text-white md:w-[25.25rem]">John Wick 3 : Parabellum</h1>
      <div className="flex gap-[2.12rem]">
        <div className="flex items-center gap-[0.62rem]">
          <Image src={IMDb} alt="IMDb" />
          <span className="text-xs font-normal leading-3 text-white">7.4 / 10</span>
        </div>
        <div className="flex items-center gap-[0.62rem]">
          <Image src={Tomato} alt="Rotten Tomato" />
          <span className="text-xs font-normal leading-3 text-white">86%</span>
        </div>
      </div>
      <p className="w-full text-sm font-medium leading-[1.125rem] text-white md:w-[18.875rem]">
        John Wick is on the run after killing a member of the international assassins&apos; guild, and with a $14 million price tag on his
        head, he is the target of hit men and women everywhere.
      </p>
      <a
        href="https://youtu.be/M7XM597XO94?si=g5lxKVR6Ib6Xi7rX"
        target="_blank"
        className="flex w-max items-center gap-2 rounded-[0.375rem] bg-rose-700 px-4 py-[0.375rem]"
      >
        <Image src={Play} alt="Play" />
        <span className="text-sm font-bold uppercase leading-6 text-white">Watch Trailer</span>
      </a>
    </section>
  );
};
