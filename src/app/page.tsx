import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import MovieContextProvider from "./contexts/MovieContext";
import "./style/global.scss";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MovieContextProvider>
        <MovieList />
      </MovieContextProvider>
    </div>
  );
}
