export interface Heroes {
  id: number,
  name: string,
  slug: string,
  powerstats: object,
  appearance: object,
  biography: Biografy,
  work:object,
  connections: object,
  images: Image,
}
interface Biografy{
  aliases: string[],
  alignment: string,
  alterEgos: string,
  firstAppearance: string,
  fullName: string,
  placeOfBirth: string,
  publisher :string,
}
interface Image {
  xs: string,
  sm: string,
  md: string,
  lg: string
}
