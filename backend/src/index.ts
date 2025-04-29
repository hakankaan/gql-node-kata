import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { authors, books, Book as DataBook } from './data.js';
import { Resolvers } from './generated/graphql.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const typeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf8');

const resolvers: Resolvers = {
  Query: {
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
  },
  Mutation: {
    addBook: (_, { title, authorId }) => {
      const authorExists = authors.find(author => author.id === authorId);
      if (!authorExists) {
        throw new Error(`Author with ID ${authorId} not found`);
      }

      const newBook = {
        id: String(books.length + 1),
        title,
        authorId,
      };
      books.push(newBook);
      
      return {
        id: newBook.id,
        title: newBook.title,
        authorId: newBook.authorId,
        author: {
          id: authorExists.id,
          name: authorExists.name,
          books: []
        }
      };
    },
    addAuthor: (_, { name, }) => {
      const newAuthor = {
        id: String(authors.length + 1),
        name,
      };
      authors.push(newAuthor);
      
     
      return {
        id: newAuthor.id,
        name: newAuthor.name,
        books: []
      };
    },
  },
  Book: {
    author: (parent) => {
     
      const authorId = 'authorId' in parent ? (parent as unknown as DataBook).authorId : '';

      
      const author = authors.find(author => author.id === authorId);
      
      if (!author) throw new Error(`Author not found for book ${parent.id}`);
      
      return {
        id: author.id,
        name: author.name,
        books: []
      };
    },
  },
  Author: {
    books: (parent) => {
      const matchingBooks = books.filter(book => book.authorId === parent.id);
      
     
      return matchingBooks.map(book => ({
        id: book.id,
        title: book.title,
        author: {
          id: parent.id,
          name: parent.name,
          books: []
        }
      }));
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
