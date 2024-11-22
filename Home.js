import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>여기는 홈입니다.</h1>
      <p>가장먼저 보이는 페이지입니다.</p>
      <Link to="/about"> 이동</Link>
      <Link to="/profile/frontend"> 프론트엔드</Link>
      <Link to="/profile/backend"> 백엔드</Link>
      <Link to="/profile/dba"> dba</Link>

    </>
  );
};
export default Home;
