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
