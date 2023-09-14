export type isAuthenticated = {
  success: boolean;
  status_code: number;
  status_message: string;
};

type ImageResponseUnit = {
  aspect_ratio: number;
  height: number;
  iso_639_1: null | string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type ImageResponse = {
  backdrops: ImageResponseUnit[];
  id: number;
  logos: ImageResponseUnit[];
  posters: ImageResponseUnit[];
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type ProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type Person = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
};

type Cast = Person & {
  cast_id: number;
  character: string;
  order: number;
};

type Crew = Person & {
  department: string;
  job: string;
};

export type MovieExpanded = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: {
    results: Video[];
  };
  credits: {
    cast: Cast[];
    crew: Crew[];
  };
  vote_average: number;
  vote_count: number;
};

type Video = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type Videos = {
  id: number;
  results: Video[];
};

export type TopRated = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: {
    id: number;
    name: string;
  }[];
};
