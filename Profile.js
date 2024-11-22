import { useParams } from "react-router-dom";

const data = {
  frontend: {
    name: "김주혁",
    description: "리액트를 좋아하는 하는 개발자",
  },
  backend: {
    name: "달빛사냥꾼",
    description: "스프링부트를 좋아하는 개발자",
  },
  dba: {
    name: "천재개발자",
    description: "dba를꿈꾸는 개발자",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        <>
          <h2>{profile.name}</h2>
          <p>{Profile.description}</p>
        </>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </>
  );
};
export default Profile;
