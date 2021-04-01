import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Keycaps Shop</title>
      </Head>
      <div className="container">
        <h1 className="box">Keycaps Shop</h1>
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
    </div>
  );
};

export default Home;
