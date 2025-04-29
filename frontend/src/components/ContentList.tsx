import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllContentQuery } from '../generated/graphql';

interface Node {
  __typename?: string;
  id: string;
}

interface Content extends Node {
  title: string;
  createdAt: string;
}

interface ContentListItem {
  __typename: 'Book' | 'Review';
  id: string;
  title: string;
  createdAt: string;
}

export function ContentList() {
  const { loading, error, data } = useGetAllContentQuery();
  const [contentItems, setContentItems] = useState<ContentListItem[]>([]);

  useEffect(() => {
    if (data) {
      // Combine books and reviews as they both implement the Content interface
      const books = data.books;
      const reviews = data.reviews;
      const allContent = [...books, ...reviews];
      
      // Sort by creation date, most recent first
      const sortedContent = allContent.sort((a: ContentListItem, b: ContentListItem) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      
      setContentItems(sortedContent);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (contentItems.length === 0) return <div>No content found</div>;

  return (
    <div className="content-list">
      <h2>Recent Content</h2>
      <div className="content-items">
        {contentItems.map((item) => (
          <div key={`${item.__typename}-${item.id}`} className="content-item">
            <div className="content-type">
              {item.__typename === 'Book' ? '📚' : '✍️'} {item.__typename}
            </div>
            <h3>{item.title}</h3>
            <div className="content-date">
              {new Date(item.createdAt).toLocaleDateString()}
            </div>
            <Link to={`/node/${item.id}`} className="view-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 