import styled from "styled-components";
const Table = styled.table`
  border-collapse: collapse;
  background-color: antiquewhite;
  th,
  td {
    border: 1px solid #ccc;
  }
`;
const memberData = [
  {
    id: 1,
    name: "민지",
    addr: "서울시 강남구 신사동",
  },
  {
    id: 2,
    name: "하나",
    addr: "서울시 강남구 역삼동",
  },
  {
    id: 3,
    name: "혜린",
    addr: "서울시 강남구 삼성동 ",
  },
  {
    id: 4,
    name: "혜인",
    addr: "서울시 강남구 선릉동",
  },
];

const TableMap = () => {
  const handelTableRowClick = (item) => {
    console.log(item);
  };

  return (
    <Table>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>주소</th>
      </tr>
      {memberData &&
        memberData.map(
          (
            member // 유일 값이 없다면 (e,index)로 사용하면됨
          ) => (
            <tr key={member.id} onClick={() => handelTableRowClick(member)}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.addr}</td>
            </tr>
          )
        )}
    </Table>
  );
};

export default TableMap;
