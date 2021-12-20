import { Container } from '@mui/material';
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
// import Nested from './pages/Nested';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
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
            publicationDate: book.released.substr(0, 4),
            title: book.name,
            url: book.url,
            numberOfPages: book.numberOfPages,
            povCharacters: book.povCharacters,
          };
        });

        setBooks(loadedBooks);
        console.log(loadedBooks);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
      // console.log(books);
    };
    asyncFetch();
  }, []);

  return (
    <Container maxWidth="sm">
      <Routes>
        <Route exact path="/" element={<Navigate to="/books" />} />
        <Route
          exact
          path="/books"
          element={
            <Home
              books={books}
              count={books.length}
              error={error}
              isLoading={isLoading}
            />
          }
        />
        <Route
          exact
          path="/books/:bookId"
          element={
            <Home
              books={books}
              count={books.length}
              error={error}
              isLoading={isLoading}
            />
          }
        />

        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
