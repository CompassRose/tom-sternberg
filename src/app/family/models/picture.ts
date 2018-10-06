// export interface Picture {
//   reference: string;
//   name: string;
//   image: string;
//   keyword: string;
//   description: string;
//   searchable: string[];
// }

export class Picture {
  _id: string;
  title: String;
  image: String;
  keyword: String;
  description: String;
  tags: [String];
}
