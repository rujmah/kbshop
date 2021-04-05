import Head from "next/head";
import Title from "./Title";

const Header = (props) => {
  const { item } = props;
  return (
    <>
      <Head>
        <title>{item ? `Shop: ${item}` : "Keycaps Shop"}</title>
      </Head>
      <Title />
    </>
  );
};

export default Header;
