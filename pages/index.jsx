import Link from "next/link";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="box">
          <div className="box">
            <Link href="/stock/Teddy%20Bear">
              <a>Teddy Bear</a>
            </Link>
          </div>
          <div className="box">
            <Link href="/stock/Soap">
              <a>Soap</a>
            </Link>
          </div>
          <div className="box">
            <Link href="/stock/Scrabble">
              <a>Scrabble</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
