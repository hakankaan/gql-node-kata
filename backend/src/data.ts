
export interface Node {
  id: string;
}

export interface Content {
  title: string;
  createdAt: string;
}

export interface Book extends Node, Content {
  id: string;
  title: string;
  createdAt: string;
  pages?: number;
  authorId: string;
}

export interface Author extends Node {
  id: string;
  name: string;
  bio?: string;
}

export interface Review extends Node, Content {
  id: string;
  title: string;
  createdAt: string;
  rating: number;
  content: string;
  bookId: string;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'The Awakening',
    authorId: '1',
    createdAt: '2022-01-10T12:00:00Z',
    pages: 320
  },
  {
    id: '2',
    title: 'City of Glass',
    authorId: '2',
    createdAt: '2020-05-15T14:30:00Z',
    pages: 203
  },
  {
    id: '3',
    title: 'The Hobbit',
    authorId: '3',
    createdAt: '2018-11-20T09:15:00Z',
    pages: 295
  },
  {
    id: '4',
    title: 'The Great Gatsby',
    authorId: '3',
    createdAt: '2019-06-12T11:45:00Z',
    pages: 180
  },
  {
    id: '5',
    title: 'To Kill a Mockingbird',
    authorId: '2',
    createdAt: '2021-03-05T13:20:00Z',
    pages: 281
  },
  {
    id: '6',
    title: '1984',
    authorId: '3',
    createdAt: '2020-09-10T15:30:00Z',
    pages: 328
  },
  {
    id: '7',
    title: 'Pride and Prejudice',
    authorId: '1',
    createdAt: '2018-04-20T10:10:00Z',
    pages: 279
  },
  {
    id: '8',
    title: 'The Catcher in the Rye',
    authorId: '2',
    createdAt: '2017-11-15T12:30:00Z',
    pages: 234
  },
  {
    id: '9',
    title: 'The Picture of Dorian Gray',
    authorId: '3',
    createdAt: '2016-08-25T14:45:00Z',
    pages: 304
  },
  {
    id: '10',
    title: 'The Adventures of Sherlock Holmes',
    authorId: '2',
    createdAt: '2015-05-30T16:50:00Z',
    pages: 320
  }
];

export const authors: Author[] = [
  {
    id: '1',
    name: 'Kate Chopin',
    bio: 'Kate Chopin was an American author of short stories and novels.'
  },
  {
    id: '2',
    name: 'Paul Auster',
    bio: 'Paul Auster is an American writer and director.'
  },
  {
    id: '3',
    name: 'J.R.R. Tolkien',
    bio: 'John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic.'
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    title: 'A masterpiece',
    createdAt: '2023-02-15T10:20:00Z',
    rating: 5,
    content: 'One of the best books I have ever read!',
    bookId: '1'
  },
  {
    id: '2',
    title: 'Intriguing',
    createdAt: '2022-07-22T16:45:00Z',
    rating: 4,
    content: 'A fascinating read with complex characters.',
    bookId: '2'
  },
  {
    id: '3',
    title: 'Classic adventure',
    createdAt: '2021-12-05T08:30:00Z',
    rating: 5,
    content: 'A timeless adventure for all ages.',
    bookId: '3'
  }
]; 