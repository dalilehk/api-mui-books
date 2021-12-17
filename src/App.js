import { Container, Typography, Skeleton } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useState, useEffect } from 'react';
import BooksOverview from './components/BooksOverview';
import './App.css';

function App() {
  const [count, setCount] = useState();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const asyncFetch = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://anapioficeandfire.com/api/books');
        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data = await response.json();
        const loadedBooks = data.map((book) => {
          return {
            id: book.isbn,
            authors: book.authors.join(','),
            characters: book.characters,
            country: book.country,
            mediaType: book.mediaType,
            publisher: book.publisher,
            released: book.released,
            released: book.released.substr(0, 4),
            title: book.name,
            url: book.url,
            numberOfPages: book.numberOfPages,
            povCharacters: book.povCharacters,
          };
        });
        console.log(loadedBooks);

        setBooks(loadedBooks);
        setCount(data.length);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    asyncFetch();
  }, []);

  // Handling messages
  let content = <p>Found no books.</p>;

  if (count > 0) {
    content = <BooksOverview books={books} />;
  }

  if (error) {
    content = (
      <Typography variant="h3" textAlign="center" color="secondary">
        {error}
      </Typography>
    );
  }

  if (isLoading) {
    content = (
      <Typography variant="h3" textAlign="center">
        Loading...
      </Typography>
    );
  }

  return (
    <Container>
      <header>
        <Typography variant="h1" textAlign="center">
          <LibraryBooksIcon /> Rest API + MaterialUI React Challenge
        </Typography>
      </header>
      <main>
        <Typography variant="h2">Game of Thrones</Typography>

        <Typography>
          {count === undefined ? (
            <Skeleton variant="text" />
          ) : (
            `The book series contains ${count} volumes.`
          )}
        </Typography>
        <div>{content}</div>
      </main>
    </Container>
  );
}

export default App;
