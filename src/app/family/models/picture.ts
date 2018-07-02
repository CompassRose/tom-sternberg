export class Picture {
  reference: string;
  name: string;
  image: string;
  keyword: string;
  bio: string;
  hello: string;

  constructor( reference: string, name: string, image: string, bio: string, keyword: string) {
    this.reference = reference;
    this.name = name;
    this.image = image;
    this.bio = bio;
    this.keyword = keyword;
  }
}


