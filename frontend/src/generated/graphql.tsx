import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = Node & {
  __typename?: 'Author';
  bio?: Maybe<Scalars['String']['output']>;
  books: Array<Book>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Book = Content & Node & {
  __typename?: 'Book';
  author: Author;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pages?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
};

export type BookConnection = {
  __typename?: 'BookConnection';
  edges: Array<Book>;
  pageInfo: PageInfo;
};

export type Content = {
  createdAt: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthor: Author;
  addBook: Book;
  addReview: Review;
};


export type MutationAddAuthorArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationAddBookArgs = {
  authorId: Scalars['ID']['input'];
  pages?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};


export type MutationAddReviewArgs = {
  bookId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors: Array<Author>;
  book?: Maybe<Book>;
  books: BookConnection;
  node?: Maybe<Node>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['ID']['input'];
};

export type Review = Content & Node & {
  __typename?: 'Review';
  book: Book;
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type BookFieldsFragment = { __typename?: 'Book', id: string, title: string, createdAt: string, pages?: number | null, author: { __typename?: 'Author', id: string, name: string } };

export type AuthorFieldsFragment = { __typename?: 'Author', id: string, name: string, bio?: string | null };

export type ReviewFieldsFragment = { __typename?: 'Review', id: string, title: string, createdAt: string, rating: number, content: string, book: { __typename?: 'Book', id: string, title: string } };

export type GetAllContentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllContentQuery = { __typename?: 'Query', books: { __typename?: 'BookConnection', edges: Array<{ __typename?: 'Book', id: string, title: string, createdAt: string }>, pageInfo: { __typename?: 'PageInfo', totalCount: number } }, reviews: Array<{ __typename: 'Review', id: string, title: string, createdAt: string }> };

export type GetNodeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetNodeQuery = { __typename?: 'Query', node?: { __typename: 'Author', name: string, bio?: string | null, id: string } | { __typename: 'Book', title: string, createdAt: string, pages?: number | null, id: string, author: { __typename?: 'Author', id: string, name: string } } | { __typename: 'Review', title: string, createdAt: string, rating: number, content: string, id: string, book: { __typename?: 'Book', id: string, title: string } } | null };

export type GetBooksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetBooksQuery = { __typename?: 'Query', books: { __typename?: 'BookConnection', edges: Array<{ __typename?: 'Book', id: string, title: string, createdAt: string, pages?: number | null, author: { __typename?: 'Author', id: string, name: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, totalCount: number } } };

export type GetBookQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetBookQuery = { __typename?: 'Query', book?: { __typename?: 'Book', id: string, title: string, createdAt: string, pages?: number | null, author: { __typename?: 'Author', id: string, name: string } } | null };

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorsQuery = { __typename?: 'Query', authors: Array<{ __typename?: 'Author', id: string, name: string, bio?: string | null, books: Array<{ __typename?: 'Book', id: string, title: string }> }> };

export type GetAuthorQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetAuthorQuery = { __typename?: 'Query', author?: { __typename?: 'Author', id: string, name: string, bio?: string | null, books: Array<{ __typename?: 'Book', id: string, title: string, createdAt: string }> } | null };

export type GetReviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReviewsQuery = { __typename?: 'Query', reviews: Array<{ __typename?: 'Review', id: string, title: string, createdAt: string, rating: number, content: string, book: { __typename?: 'Book', id: string, title: string } }> };

export type GetReviewQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetReviewQuery = { __typename?: 'Query', review?: { __typename?: 'Review', id: string, title: string, createdAt: string, rating: number, content: string, book: { __typename?: 'Book', id: string, title: string } } | null };

export type AddBookMutationVariables = Exact<{
  title: Scalars['String']['input'];
  authorId: Scalars['ID']['input'];
  pages?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AddBookMutation = { __typename?: 'Mutation', addBook: { __typename?: 'Book', id: string, title: string, createdAt: string, pages?: number | null, author: { __typename?: 'Author', id: string, name: string } } };

export type AddAuthorMutationVariables = Exact<{
  name: Scalars['String']['input'];
  bio?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddAuthorMutation = { __typename?: 'Mutation', addAuthor: { __typename?: 'Author', id: string, name: string, bio?: string | null } };

export type AddReviewMutationVariables = Exact<{
  title: Scalars['String']['input'];
  bookId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  content: Scalars['String']['input'];
}>;


export type AddReviewMutation = { __typename?: 'Mutation', addReview: { __typename?: 'Review', id: string, title: string, createdAt: string, rating: number, content: string, book: { __typename?: 'Book', id: string, title: string } } };

export const BookFieldsFragmentDoc = gql`
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
export const AuthorFieldsFragmentDoc = gql`
    fragment AuthorFields on Author {
  id
  name
  bio
}
    `;
export const ReviewFieldsFragmentDoc = gql`
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
export const GetAllContentDocument = gql`
    query GetAllContent {
  books(limit: 10) {
    edges {
      id
      title
      createdAt
    }
    pageInfo {
      totalCount
    }
  }
  reviews {
    __typename
    id
    title
    createdAt
  }
}
    `;

/**
 * __useGetAllContentQuery__
 *
 * To run a query within a React component, call `useGetAllContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllContentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllContentQuery(baseOptions?: Apollo.QueryHookOptions<GetAllContentQuery, GetAllContentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllContentQuery, GetAllContentQueryVariables>(GetAllContentDocument, options);
      }
export function useGetAllContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllContentQuery, GetAllContentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllContentQuery, GetAllContentQueryVariables>(GetAllContentDocument, options);
        }
export function useGetAllContentSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllContentQuery, GetAllContentQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllContentQuery, GetAllContentQueryVariables>(GetAllContentDocument, options);
        }
export type GetAllContentQueryHookResult = ReturnType<typeof useGetAllContentQuery>;
export type GetAllContentLazyQueryHookResult = ReturnType<typeof useGetAllContentLazyQuery>;
export type GetAllContentSuspenseQueryHookResult = ReturnType<typeof useGetAllContentSuspenseQuery>;
export type GetAllContentQueryResult = Apollo.QueryResult<GetAllContentQuery, GetAllContentQueryVariables>;
export const GetNodeDocument = gql`
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
    `;

/**
 * __useGetNodeQuery__
 *
 * To run a query within a React component, call `useGetNodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetNodeQuery(baseOptions: Apollo.QueryHookOptions<GetNodeQuery, GetNodeQueryVariables> & ({ variables: GetNodeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNodeQuery, GetNodeQueryVariables>(GetNodeDocument, options);
      }
export function useGetNodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNodeQuery, GetNodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNodeQuery, GetNodeQueryVariables>(GetNodeDocument, options);
        }
export function useGetNodeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetNodeQuery, GetNodeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNodeQuery, GetNodeQueryVariables>(GetNodeDocument, options);
        }
export type GetNodeQueryHookResult = ReturnType<typeof useGetNodeQuery>;
export type GetNodeLazyQueryHookResult = ReturnType<typeof useGetNodeLazyQuery>;
export type GetNodeSuspenseQueryHookResult = ReturnType<typeof useGetNodeSuspenseQuery>;
export type GetNodeQueryResult = Apollo.QueryResult<GetNodeQuery, GetNodeQueryVariables>;
export const GetBooksDocument = gql`
    query GetBooks($limit: Int, $offset: Int) {
  books(limit: $limit, offset: $offset) {
    edges {
      ...BookFields
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      totalCount
    }
  }
}
    ${BookFieldsFragmentDoc}`;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export function useGetBooksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksSuspenseQueryHookResult = ReturnType<typeof useGetBooksSuspenseQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;
export const GetBookDocument = gql`
    query GetBook($id: ID!) {
  book(id: $id) {
    ...BookFields
  }
}
    ${BookFieldsFragmentDoc}`;

/**
 * __useGetBookQuery__
 *
 * To run a query within a React component, call `useGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookQuery(baseOptions: Apollo.QueryHookOptions<GetBookQuery, GetBookQueryVariables> & ({ variables: GetBookQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
      }
export function useGetBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
        }
export function useGetBookSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
        }
export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>;
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>;
export type GetBookSuspenseQueryHookResult = ReturnType<typeof useGetBookSuspenseQuery>;
export type GetBookQueryResult = Apollo.QueryResult<GetBookQuery, GetBookQueryVariables>;
export const GetAuthorsDocument = gql`
    query GetAuthors {
  authors {
    ...AuthorFields
    books {
      id
      title
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useGetAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, options);
      }
export function useGetAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, options);
        }
export function useGetAuthorsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAuthorsQuery, GetAuthorsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAuthorsQuery, GetAuthorsQueryVariables>(GetAuthorsDocument, options);
        }
export type GetAuthorsQueryHookResult = ReturnType<typeof useGetAuthorsQuery>;
export type GetAuthorsLazyQueryHookResult = ReturnType<typeof useGetAuthorsLazyQuery>;
export type GetAuthorsSuspenseQueryHookResult = ReturnType<typeof useGetAuthorsSuspenseQuery>;
export type GetAuthorsQueryResult = Apollo.QueryResult<GetAuthorsQuery, GetAuthorsQueryVariables>;
export const GetAuthorDocument = gql`
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
    ${AuthorFieldsFragmentDoc}`;

/**
 * __useGetAuthorQuery__
 *
 * To run a query within a React component, call `useGetAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAuthorQuery(baseOptions: Apollo.QueryHookOptions<GetAuthorQuery, GetAuthorQueryVariables> & ({ variables: GetAuthorQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthorQuery, GetAuthorQueryVariables>(GetAuthorDocument, options);
      }
export function useGetAuthorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthorQuery, GetAuthorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthorQuery, GetAuthorQueryVariables>(GetAuthorDocument, options);
        }
export function useGetAuthorSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAuthorQuery, GetAuthorQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAuthorQuery, GetAuthorQueryVariables>(GetAuthorDocument, options);
        }
export type GetAuthorQueryHookResult = ReturnType<typeof useGetAuthorQuery>;
export type GetAuthorLazyQueryHookResult = ReturnType<typeof useGetAuthorLazyQuery>;
export type GetAuthorSuspenseQueryHookResult = ReturnType<typeof useGetAuthorSuspenseQuery>;
export type GetAuthorQueryResult = Apollo.QueryResult<GetAuthorQuery, GetAuthorQueryVariables>;
export const GetReviewsDocument = gql`
    query GetReviews {
  reviews {
    ...ReviewFields
  }
}
    ${ReviewFieldsFragmentDoc}`;

/**
 * __useGetReviewsQuery__
 *
 * To run a query within a React component, call `useGetReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReviewsQuery(baseOptions?: Apollo.QueryHookOptions<GetReviewsQuery, GetReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReviewsQuery, GetReviewsQueryVariables>(GetReviewsDocument, options);
      }
export function useGetReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReviewsQuery, GetReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReviewsQuery, GetReviewsQueryVariables>(GetReviewsDocument, options);
        }
export function useGetReviewsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetReviewsQuery, GetReviewsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetReviewsQuery, GetReviewsQueryVariables>(GetReviewsDocument, options);
        }
export type GetReviewsQueryHookResult = ReturnType<typeof useGetReviewsQuery>;
export type GetReviewsLazyQueryHookResult = ReturnType<typeof useGetReviewsLazyQuery>;
export type GetReviewsSuspenseQueryHookResult = ReturnType<typeof useGetReviewsSuspenseQuery>;
export type GetReviewsQueryResult = Apollo.QueryResult<GetReviewsQuery, GetReviewsQueryVariables>;
export const GetReviewDocument = gql`
    query GetReview($id: ID!) {
  review(id: $id) {
    ...ReviewFields
  }
}
    ${ReviewFieldsFragmentDoc}`;

/**
 * __useGetReviewQuery__
 *
 * To run a query within a React component, call `useGetReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetReviewQuery(baseOptions: Apollo.QueryHookOptions<GetReviewQuery, GetReviewQueryVariables> & ({ variables: GetReviewQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReviewQuery, GetReviewQueryVariables>(GetReviewDocument, options);
      }
export function useGetReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReviewQuery, GetReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReviewQuery, GetReviewQueryVariables>(GetReviewDocument, options);
        }
export function useGetReviewSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetReviewQuery, GetReviewQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetReviewQuery, GetReviewQueryVariables>(GetReviewDocument, options);
        }
export type GetReviewQueryHookResult = ReturnType<typeof useGetReviewQuery>;
export type GetReviewLazyQueryHookResult = ReturnType<typeof useGetReviewLazyQuery>;
export type GetReviewSuspenseQueryHookResult = ReturnType<typeof useGetReviewSuspenseQuery>;
export type GetReviewQueryResult = Apollo.QueryResult<GetReviewQuery, GetReviewQueryVariables>;
export const AddBookDocument = gql`
    mutation AddBook($title: String!, $authorId: ID!, $pages: Int) {
  addBook(title: $title, authorId: $authorId, pages: $pages) {
    ...BookFields
  }
}
    ${BookFieldsFragmentDoc}`;
export type AddBookMutationFn = Apollo.MutationFunction<AddBookMutation, AddBookMutationVariables>;

/**
 * __useAddBookMutation__
 *
 * To run a mutation, you first call `useAddBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBookMutation, { data, loading, error }] = useAddBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *      authorId: // value for 'authorId'
 *      pages: // value for 'pages'
 *   },
 * });
 */
export function useAddBookMutation(baseOptions?: Apollo.MutationHookOptions<AddBookMutation, AddBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBookMutation, AddBookMutationVariables>(AddBookDocument, options);
      }
export type AddBookMutationHookResult = ReturnType<typeof useAddBookMutation>;
export type AddBookMutationResult = Apollo.MutationResult<AddBookMutation>;
export type AddBookMutationOptions = Apollo.BaseMutationOptions<AddBookMutation, AddBookMutationVariables>;
export const AddAuthorDocument = gql`
    mutation AddAuthor($name: String!, $bio: String) {
  addAuthor(name: $name, bio: $bio) {
    ...AuthorFields
  }
}
    ${AuthorFieldsFragmentDoc}`;
export type AddAuthorMutationFn = Apollo.MutationFunction<AddAuthorMutation, AddAuthorMutationVariables>;

/**
 * __useAddAuthorMutation__
 *
 * To run a mutation, you first call `useAddAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAuthorMutation, { data, loading, error }] = useAddAuthorMutation({
 *   variables: {
 *      name: // value for 'name'
 *      bio: // value for 'bio'
 *   },
 * });
 */
export function useAddAuthorMutation(baseOptions?: Apollo.MutationHookOptions<AddAuthorMutation, AddAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAuthorMutation, AddAuthorMutationVariables>(AddAuthorDocument, options);
      }
export type AddAuthorMutationHookResult = ReturnType<typeof useAddAuthorMutation>;
export type AddAuthorMutationResult = Apollo.MutationResult<AddAuthorMutation>;
export type AddAuthorMutationOptions = Apollo.BaseMutationOptions<AddAuthorMutation, AddAuthorMutationVariables>;
export const AddReviewDocument = gql`
    mutation AddReview($title: String!, $bookId: ID!, $rating: Int!, $content: String!) {
  addReview(title: $title, bookId: $bookId, rating: $rating, content: $content) {
    ...ReviewFields
  }
}
    ${ReviewFieldsFragmentDoc}`;
export type AddReviewMutationFn = Apollo.MutationFunction<AddReviewMutation, AddReviewMutationVariables>;

/**
 * __useAddReviewMutation__
 *
 * To run a mutation, you first call `useAddReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReviewMutation, { data, loading, error }] = useAddReviewMutation({
 *   variables: {
 *      title: // value for 'title'
 *      bookId: // value for 'bookId'
 *      rating: // value for 'rating'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useAddReviewMutation(baseOptions?: Apollo.MutationHookOptions<AddReviewMutation, AddReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddReviewMutation, AddReviewMutationVariables>(AddReviewDocument, options);
      }
export type AddReviewMutationHookResult = ReturnType<typeof useAddReviewMutation>;
export type AddReviewMutationResult = Apollo.MutationResult<AddReviewMutation>;
export type AddReviewMutationOptions = Apollo.BaseMutationOptions<AddReviewMutation, AddReviewMutationVariables>;