export interface ICategory {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IDish {
  _id: string;
  name: string;
  category_id: ICategory;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}
