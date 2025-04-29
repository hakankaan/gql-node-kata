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

export type Author = {
  __typename?: 'Author';
  books: Array<Book>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Book = {
  __typename?: 'Book';
  author: Author;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthor: Author;
  addBook: Book;
};


export type MutationAddAuthorArgs = {
  name: Scalars['String']['input'];
};


export type MutationAddBookArgs = {
  authorId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors: Array<Author>;
  book?: Maybe<Book>;
  books: Array<Book>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookArgs = {
  id: Scalars['ID']['input'];
};

export type AddBookMutationVariables = Exact<{
  title: Scalars['String']['input'];
  authorId: Scalars['ID']['input'];
}>;


export type AddBookMutation = { __typename?: 'Mutation', addBook: { __typename?: 'Book', id: string, title: string, author: { __typename?: 'Author', id: string, name: string } } };

export type AddAuthorMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type AddAuthorMutation = { __typename?: 'Mutation', addAuthor: { __typename?: 'Author', id: string, name: string } };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, title: string, author: { __typename?: 'Author', id: string, name: string } }> };

export type GetBookQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetBookQuery = { __typename?: 'Query', book?: { __typename?: 'Book', id: string, title: string, author: { __typename?: 'Author', id: string, name: string } } | null };

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthorsQuery = { __typename?: 'Query', authors: Array<{ __typename?: 'Author', id: string, name: string, books: Array<{ __typename?: 'Book', id: string, title: string }> }> };

export type GetAuthorQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetAuthorQuery = { __typename?: 'Query', author?: { __typename?: 'Author', id: string, name: string, books: Array<{ __typename?: 'Book', id: string, title: string }> } | null };


export const AddBookDocument = gql`
    mutation AddBook($title: String!, $authorId: ID!) {
  addBook(title: $title, authorId: $authorId) {
    id
    title
    author {
      id
      name
    }
  }
}
    `;
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
    mutation AddAuthor($name: String!) {
  addAuthor(name: $name) {
    id
    name
  }
}
    `;
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
export const GetBooksDocument = gql`
    query GetBooks {
  books {
    id
    title
    author {
      id
      name
    }
  }
}
    `;

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
    id
    title
    author {
      id
      name
    }
  }
}
    `;

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
    id
    name
    books {
      id
      title
    }
  }
}
    `;

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
    id
    name
    books {
      id
      title
    }
  }
}
    `;

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