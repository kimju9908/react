import { useParams } from "react-router-dom";
import Articles from "./Articles";

const Article = () => {
  const { id } = useParams();
  return (
    <>
      <h2> 게시글 {id} 입니다.</h2>
    </>
  );
};
export default Articles;
