import { useGetNodeQuery } from '../generated/graphql';

interface Node {
  __typename?: string;
  id: string;
}

interface Content {
  title: string;
  createdAt: string;
}

interface Book extends Node, Content {
  __typename?: 'Book';
  id: string;
  title: string;
  createdAt: string;
  pages?: number | null;
  author: Author;
}

interface Author extends Node {
  __typename?: 'Author';
  id: string;
  name: string;
  bio?: string | null;
}

interface Review extends Node, Content {
  __typename?: 'Review';
  id: string;
  title: string;
  createdAt: string;
  rating: number;
  content: string;
  book: Book;
}

interface NodeViewerProps {
  nodeId: string;
}

export function NodeViewer({ nodeId }: NodeViewerProps) {
  const { loading, error, data } = useGetNodeQuery({
    variables: { id: nodeId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || !data.node) return <div>Node not found</div>;

  const node = data.node;

  const renderNodeDetails = () => {
    switch (node.__typename) {
      case 'Book': {
        const book = node as Book;
        return (
          <div className="node-book">
            <h2>{book.title}</h2>
            <p>Published: {new Date(book.createdAt).toLocaleDateString()}</p>
            {book.pages && <p>Pages: {book.pages}</p>}
            <p>Author: {book.author.name}</p>
          </div>
        );
      }
      case 'Author': {
        const author = node as Author;
        return (
          <div className="node-author">
            <h2>{author.name}</h2>
            {author.bio && <p>{author.bio}</p>}
          </div>
        );
      }
      case 'Review': {
        const review = node as Review;
        return (
          <div className="node-review">
            <h2>{review.title}</h2>
            <p>Posted: {new Date(review.createdAt).toLocaleDateString()}</p>
            <p>Rating: {"⭐".repeat(review.rating)}</p>
            <p>{review.content}</p>
            <p>Book: {review.book.title}</p>
          </div>
        );
      }
      default:
        return <div>Unknown node type</div>;
    }
  };

  return (
    <div className="node-viewer">
      <div className="node-id">ID: {node.id}</div>
      <div className="node-type">Type: {node.__typename}</div>
      {renderNodeDetails()}
    </div>
  );
} 