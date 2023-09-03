interface Image {
  id: string;
  url: string;
}

export interface IBreed {
  id: string;
  url: string;
  image?: Image[];
}
