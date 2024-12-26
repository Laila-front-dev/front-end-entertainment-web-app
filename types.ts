export interface DiscoverResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  genres: any;
  total_pages: number;
  results: MoviesResult[];
  id: number;
  title: string;
  body: string;
}
export interface DiscoverResponseTv {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  genres: any;
  total_pages: number;
  results: TvResult[];
  id: number;
  title: string;
  body: string;
}

// movie

export type DetailsResponse = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  original_title: string;
  tagline: string;
  runtime: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spoken_languages: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  genres: any;
  release_date: string;
  overview: string;
  homepage: string;
  imdb_id: string;
  first_air_date: string;
  last_air_date: string;
  original_name: string;
};

export type MoviesResult = {
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
  media_type: string;
  original_language: string;
  original_name: string;
  first_air_date: string;
};

export type MoviesResponse = {
  total_pages: number;
  results: MoviesResult[];
};

export type TrendingResult = {
  results: TrendingResult[];
  id: number;
  title: string;
  backdrop_path: string;
  release_date: string;
  media_type: string;
  original_language: string;
  original_name: string;
  first_air_date: string;
};

export type TrendingResponse = {
  total_pages: number;
  results: TrendingResult[];
};

// Tv

export type TvResult = {
  release_date: string;
  title: string;
  id: number;
  original_name: string;
  backdrop_path: string;
  first_air_date: string;
  media_type: string;
  original_language: string;
};

export type TvResponse = {
  total_pages: number;
  results: TvResult[];
};

export type TrendingTvResult = {
  results: TrendingTvResult[];
  title: string;
  release_date: string;
  // results: TrendingTvResult[];
  id: number;
  original_name: string;
  backdrop_path: string;
  first_air_date: string;
  media_type: string;
  original_language: string;
};

export type TrendingTvResponse = {
  total_pages: number;
  results: TrendingTvResult[];
};
