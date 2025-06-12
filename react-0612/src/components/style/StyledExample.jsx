import styled from "styled-components";

// 아래 코드 단 react 컴포넌트
const BaseButton = styled.button`
  color: white;
  padding: 10px 20px;
  background-color: ${(props) => (props.primary ? "#0076bf" : "#6c757d")};

  &:hover {
    background-color: #0056b3;
  }
`;

const LargeButton = styled(BaseButton)`
  font-size: 20px;
  padding: 15px 30px;
`;

export default function StyledExample() {
  return (
    <div>
      <h1>StyledComponentExample</h1>
      <BaseButton primary={true}>클릭</BaseButton>
      <BaseButton primary={false}>클릭 (Pramary=false)</BaseButton>
      <div>
        <LargeButton>큰 버튼</LargeButton>
      </div>
    </div>
  );
}
