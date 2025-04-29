import { gql } from '@apollo/client';


export const BOOK_FIELDS = gql`
  fragment BookFields on Book {
    id
    title
    createdAt
    pages
    author {
      id
      name
    }
  }
`;

export const AUTHOR_FIELDS = gql`
  fragment AuthorFields on Author {
    id
    name
    bio
  }
`;

export const REVIEW_FIELDS = gql`
  fragment ReviewFields on Review {
    id
    title
    createdAt
    rating
    content
    book {
      id
      title
    }
  }
`;


export const QUERIES = {

  GET_ALL_CONTENT: gql`
    query GetAllContent {
      books {
        __typename
        id
        title
        createdAt
      }
      reviews {
        __typename
        id
        title
        createdAt
      }
    }
  `,


  GET_NODE: gql`
    query GetNode($id: ID!) {
      node(id: $id) {
        __typename
        id
        ... on Book {
          title
          createdAt
          pages
          author {
            id
            name
          }
        }
        ... on Author {
          name
          bio
        }
        ... on Review {
          title
          createdAt
          rating
          content
          book {
            id
            title
          }
        }
      }
    }
  `,


  GET_BOOKS: gql`
    query GetBooks {
      books {
        ...BookFields
      }
    }
    ${BOOK_FIELDS}
  `,


  GET_BOOK: gql`
    query GetBook($id: ID!) {
      book(id: $id) {
        ...BookFields
      }
    }
    ${BOOK_FIELDS}
  `,


  GET_AUTHORS: gql`
    query GetAuthors {
      authors {
        ...AuthorFields
        books {
          id
          title
        }
      }
    }
    ${AUTHOR_FIELDS}
  `,


  GET_AUTHOR: gql`
    query GetAuthor($id: ID!) {
      author(id: $id) {
        ...AuthorFields
        books {
          id
          title
          createdAt
        }
      }
    }
    ${AUTHOR_FIELDS}
  `,


  GET_REVIEWS: gql`
    query GetReviews {
      reviews {
        ...ReviewFields
      }
    }
    ${REVIEW_FIELDS}
  `,


  GET_REVIEW: gql`
    query GetReview($id: ID!) {
      review(id: $id) {
        ...ReviewFields
      }
    }
    ${REVIEW_FIELDS}
  `
};


export const MUTATIONS = {

  ADD_BOOK: gql`
    mutation AddBook($title: String!, $authorId: ID!, $pages: Int) {
      addBook(title: $title, authorId: $authorId, pages: $pages) {
        ...BookFields
      }
    }
    ${BOOK_FIELDS}
  `,


  ADD_AUTHOR: gql`
    mutation AddAuthor($name: String!, $bio: String) {
      addAuthor(name: $name, bio: $bio) {
        ...AuthorFields
      }
    }
    ${AUTHOR_FIELDS}
  `,


  ADD_REVIEW: gql`
    mutation AddReview($title: String!, $bookId: ID!, $rating: Int!, $content: String!) {
      addReview(title: $title, bookId: $bookId, rating: $rating, content: $content) {
        ...ReviewFields
      }
    }
    ${REVIEW_FIELDS}
  `
};


export const OPERATIONS = {
  ...QUERIES,
  ...MUTATIONS
};


export const {
  GET_ALL_CONTENT,
  GET_NODE,
  GET_BOOKS,
  GET_BOOK,
  GET_AUTHORS,
  GET_AUTHOR,
  GET_REVIEWS,
  GET_REVIEW
} = QUERIES;

export const {
  ADD_BOOK,
  ADD_AUTHOR,
  ADD_REVIEW
} = MUTATIONS; 