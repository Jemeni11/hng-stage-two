import { Genres } from "@/types";
import { createContext } from "react";

const configuration = {
  images: {
    base_url: "http://image.tmdb.org/t/p/",
    secure_base_url: "https://image.tmdb.org/t/p/",
    backdrop_sizes: ["w300", "w780", "w1280", "original"],
    logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    profile_sizes: ["w45", "w185", "h632", "original"],
    still_sizes: ["w92", "w185", "w300", "original"],
  },
  change_keys: [
    "adult",
    "air_date",
    "also_known_as",
    "alternative_titles",
    "biography",
    "birthday",
    "budget",
    "cast",
    "certifications",
    "character_names",
    "created_by",
    "crew",
    "deathday",
    "episode",
    "episode_number",
    "episode_run_time",
    "freebase_id",
    "freebase_mid",
    "general",
    "genres",
    "guest_stars",
    "homepage",
    "images",
    "imdb_id",
    "languages",
    "name",
    "network",
    "origin_country",
    "original_name",
    "original_title",
    "overview",
    "parts",
    "place_of_birth",
    "plot_keywords",
    "production_code",
    "production_companies",
    "production_countries",
    "releases",
    "revenue",
    "runtime",
    "season",
    "season_number",
    "season_regular",
    "spoken_languages",
    "status",
    "tagline",
    "title",
    "translations",
    "tvdb_id",
    "tvrage_id",
    "type",
    "video",
    "videos",
  ],
  backdrops: [
    {
      aspect_ratio: 1.778,
      height: 800,
      iso_639_1: null,
      file_path: "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
      vote_average: 5.622,
      vote_count: 20,
      width: 1422,
    },
  ],
  id: 550,
  logos: [
    {
      aspect_ratio: 1.041,
      height: 244,
      iso_639_1: "en",
      file_path: "/40uRxnaxKNIxZPVKVMizbe76a8h.png",
      vote_average: 0,
      vote_count: 0,
      width: 254,
    },
  ],
  posters: [
    {
      aspect_ratio: 0.667,
      height: 900,
      iso_639_1: "pt",
      file_path: "/r3pPehX4ik8NLYPpbDRAh0YRtMb.jpg",
      vote_average: 5.258,
      vote_count: 6,
      width: 600,
    },
  ],
  top_rated: {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: "",
        genre_ids: [4],
        id: 5,
        original_language: "en",
        original_title: "dummy",
        overview: "dummy",
        popularity: 85,
        poster_path: "Dsd",
        release_date: "",
        title: "",
        video: false,
        vote_average: 55,
        vote_count: 526,
      },
    ],
    total_pages: 1,
    total_results: 20,
  },
};

export const ConfigContext = createContext(configuration);

export const ConfigContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigContext.Provider value={configuration}>{children}</ConfigContext.Provider>;
};

export const genresObject = {
  genres: [
    {
      id: -1,
      name: "undefined",
    },
  ],
};

export const GenresContext = createContext(genresObject);

export const GenresContextProvider = ({ children, genreProp }: { children: React.ReactNode; genreProp: Genres | undefined }) => {
  if (!genreProp) {
    genreProp = genresObject;
  }
  return <GenresContext.Provider value={genreProp}>{children}</GenresContext.Provider>;
};
