import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { authors, books, Book as DataBook, reviews, Review as DataReview } from './data.js';
import { Resolvers } from './generated/graphql.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const typeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf8');


const resolvers: Resolvers = {
  Node: {
    __resolveType(obj) {
      if ('pages' in obj) return 'Book';
      if ('bio' in obj) return 'Author';
      if ('rating' in obj) return 'Review';
      return null;
    },
  },
  Content: {
    __resolveType(obj) {
      if ('pages' in obj) return 'Book';
      if ('rating' in obj) return 'Review';
      return null;
    },
  },
  Query: {
    node: (_, { id }) => {
      const book = books.find(item => item.id === id);
      if (book) return { ...book, author: { id: '', name: '', books: [] } };

      const author = authors.find(item => item.id === id);
      if (author) return { ...author, books: [] };

      const review = reviews.find(item => item.id === id);
      if (review) return { 
        ...review, 
        book: { 
          id: '', 
          title: '', 
          createdAt: '', 
          author: { id: '', name: '', books: [] } 
        } 
      };

      return null;
    },
    books: () => {
      return books.map(book => ({
        ...book,
        author: { id: '', name: '', books: [] }
      }));
    },
    book: (_, { id }) => {
      const book = books.find(book => book.id === id);
      if (!book) return null;
      
      return {
        ...book,
        author: { id: '', name: '', books: [] }
      };
    },
    authors: () => {
      return authors.map(author => ({
        ...author,
        books: []
      }));
    },
    author: (_, { id }) => {
      const author = authors.find(author => author.id === id);
      if (!author) return null;
      
      return {
        ...author,
        books: []
      };
    },
    reviews: () => {
      return reviews.map(review => ({
        ...review,
        book: { 
          id: '', 
          title: '', 
          createdAt: '', 
          author: { id: '', name: '', books: [] } 
        }
      }));
    },
    review: (_, { id }) => {
      const review = reviews.find(review => review.id === id);
      if (!review) return null;
      
      return {
        ...review,
        book: { 
          id: '', 
          title: '', 
          createdAt: '', 
          author: { id: '', name: '', books: [] } 
        }
      };
    },
  },
  Mutation: {
    addBook: (_, { title, authorId, pages }) => {
      const authorExists = authors.find(author => author.id === authorId);
      if (!authorExists) {
        throw new Error(`Author with ID ${authorId} not found`);
      }

      const newBook = {
        id: String(books.length + 1),
        title,
        authorId,
        createdAt: new Date().toISOString(),
        pages: pages || null,
      };
      books.push(newBook);
      
      return {
        ...newBook,
        author: {
          id: authorExists.id,
          name: authorExists.name,
          bio: authorExists.bio,
          books: []
        }
      };
    },
    addAuthor: (_, { name, bio }) => {
      const newAuthor = {
        id: String(authors.length + 1),
        name,
        bio: bio || null,
      };
      authors.push(newAuthor);
      
      return {
        ...newAuthor,
        books: []
      };
    },
    addReview: (_, { bookId, title, rating, content }) => {
      const bookExists = books.find(book => book.id === bookId);
      if (!bookExists) {
        throw new Error(`Book with ID ${bookId} not found`);
      }

      const newReview = {
        id: String(reviews.length + 1),
        title,
        rating,
        content,
        bookId,
        createdAt: new Date().toISOString(),
      };
      reviews.push(newReview);
      
      return {
        ...newReview,
        book: {
          id: bookExists.id,
          title: bookExists.title,
          createdAt: bookExists.createdAt,
          pages: bookExists.pages,
          author: { 
            id: '',
            name: '',
            bio: '',
            books: [] 
          }
        }
      };
    },
  },
  Book: {
    author: (parent) => {
      const authorId = 'authorId' in parent ? (parent as unknown as DataBook).authorId : '';
      const author = authors.find(author => author.id === authorId);
      
      if (!author) throw new Error(`Author not found for book ${parent.id}`);
      
      return {
        ...author,
        books: []
      };
    },
  },
  Author: {
    books: (parent) => {
      const matchingBooks = books.filter(book => book.authorId === parent.id);
      
      return matchingBooks.map(book => ({
        ...book,
        author: {
          id: parent.id,
          name: parent.name,
          bio: parent.bio,
          books: []
        }
      }));
    },
  },
  Review: {
    book: (parent) => {
      const bookId = 'bookId' in parent ? (parent as unknown as DataReview).bookId : '';
      const book = books.find(book => book.id === bookId);
      
      if (!book) throw new Error(`Book not found for review ${parent.id}`);
      
      return {
        ...book,
        author: {
          id: '',
          name: '',
          bio: '',
          books: []
        }
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
