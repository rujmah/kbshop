import { useRouter } from "next/router";
import Header from "../../components/Header";

const Item = () => {
  const router = useRouter();
  const { item } = router.query;

  return (
    <div className="container">
      <Header item={item} />

      <div className="item-container box">
        <div className="item-title box">Title: {item} </div>
        <div className="item-price box">£99.99</div>
        <div className="item-description box">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. C/O
          https://placeholder.com/text/lorem-ipsum/#Plain_Text_Lorem_Ipsum
        </div>
        <div className="item-image box">
          Image:
          <br />
          <img
            src={`https://source.unsplash.com/500x500/?${item}`}
            alt={item}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Item;
