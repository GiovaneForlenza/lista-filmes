import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import MovieContextProvider from "./contexts/MovieContext";
import ModalContextProvider from "./contexts/ModalContext";
import "./style/global.scss";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ModalContextProvider>
        <MovieContextProvider>
          <MovieList />
        </MovieContextProvider>
      </ModalContextProvider>
    </div>
  );
}
