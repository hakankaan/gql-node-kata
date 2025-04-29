// Sample data for our GraphQL server
export interface Book {
  id: string;
  title: string;
  authorId: string;
}

export interface Author {
  id: string;
  name: string;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'The Awakening',
    authorId: '1',
  },
  {
    id: '2',
    title: 'City of Glass',
    authorId: '2',
  },
  {
    id: '3',
    title: 'The Hobbit',
    authorId: '3',
  },
];

export const authors: Author[] = [
  {
    id: '1',
    name: 'Kate Chopin',
  },
  {
    id: '2',
    name: 'Paul Auster',
  },
  {
    id: '3',
    name: 'J.R.R. Tolkien',
  },
]; 