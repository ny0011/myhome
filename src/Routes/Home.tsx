import Search from "../Components/Search";
import { DivColumn } from "../Styles/Tags";

function Home() {
  return (
    <DivColumn style={{ paddingTop: "30px" }}>
      <Search />
    </DivColumn>
  );
}

export default Home;
