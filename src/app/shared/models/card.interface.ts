export interface CardInterface{
  idCard: number;
  img: string;
  status: Status;
}

enum Status {
  "back",
  "front",
  "matched"
}
