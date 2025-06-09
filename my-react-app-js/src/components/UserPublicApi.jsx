import { useState, useEffect } from "react";

export default function UserPublicApi() {
  //

  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserArray(data);
      });
  }, []);

  const addUser = ({ username, email }) => {
    // 깊은 비교: Collection Data(Array, Object 등)의 경우 개별 값들 모두 일일이 비교.
    // 얕은 비교: Collection Data(Array, Object 등)의 경우 참조값만 비교. (일반적인 메모리 주소값.)
    // State비교는 얕은 비교! 아래는 동작안함
    // userArray.push({ username, email });
    // setUserArray(userArray);

    const newUserArray = [...userArray, { username, email }];
    setUserArray(newUserArray);
  };

  return (
    <ul>
      <button
        onClick={() => {
          addUser({ username: "새로운 유저", email: "sample@naver.com" });
        }}
      >
        유저 추가
      </button>
      {userArray.map((user) => {
        return (
          <li>
            {user.username} ({user.email})
          </li>
        );
      })}
    </ul>
  );
}
