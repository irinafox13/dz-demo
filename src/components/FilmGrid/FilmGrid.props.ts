export interface FilmCardProps  {
  films: {
    id: number,
    name: string,
    image: string,
    rating: string,
    inFavorite: boolean,
  }[]
}