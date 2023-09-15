import type { ImageResponse, TopRated, Genres, MovieExpanded } from "@/types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env["AUTH_TOKEN"]}`,
  },
};

export function isUserAuthorized() {
  console.log(options);
  fetch("https://api.themoviedb.org/3/authentication", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

export async function getImages(movie_id: number) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/images`, options);
    const data: ImageResponse = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function sortAndFilterImages(image: ImageResponse[]) {}

export async function getTopRatedMovies() {
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);
    const data: TopRated = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getMoviesGenre() {
  try {
    const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options);
    const data: Genres = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getMovieData(movie_id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?append_to_response=videos%2Ccredits&language=en-US`,
      options,
    );
    const data: MovieExpanded = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
