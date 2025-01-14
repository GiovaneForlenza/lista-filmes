import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import "./style/global.scss";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MovieList />
    </div>
  );
}
