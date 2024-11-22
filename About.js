import { Link, useSearchParams } from "react-router-dom";
// 쿼리스트링 : URL의 뒷부분에 붙여서 전달하는 유동적인 데이터

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 쿼리스트링에서 정보 가져 오기
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mod");

  // detail 값을 토글하는 함수
  const onToggelDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  return (
    <>
      <h1>여기는 다른페이지입니다</h1>
      <Link to="/"> 홈으로로 이동</Link>
    </>
  );
};
export default About;
