import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

const initialContext = {
  //   todoList: [],
  arr: [],
  setArr: () => {},
  text: "",
  setText: () => {},
  find: "",
  setFind: () => {},
  findArr: [],
  setFindArr: () => {},
  selectedColor: "pink",
  setSelectedColor: () => {},
  addTodo: () => {},
  findTodo: () => {},
  removeTodo: () => {},
  editTodo: () => {},
};

const TodoContext = createContext(initialContext);

export function TodoProvider({ children }) {
  // state선언.
  //   const todoList = []; // hook사용 필요
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [findArr, setFindArr] = useState([]);
  const [selectedColor, setSelectedColor] = useState("pink");
  const idRef = useRef(1);

  //todo 입력
  const addTodo = () => {
    const newItem = {
      id: idRef.current++,
      text,
      color: selectedColor,
    };
    setArr([...arr, newItem]);
    setText("");
  };

  //todo 검색
  const findTodo = () => {
    const filtered = filterText(find);
    setFindArr(filtered);
    setFind("");
    console.log(filtered);
  };

  const filterText = (find) => {
    const result = [];
    arr.forEach((elem) => {
      if (elem.text.includes(find)) result.push(elem);
    });
    return result;
  };

  //todo 삭제
  const removeTodo = (idToDelete) => {
    console.log("삭제");
    const deletedItem = arr.find((item) => item.id === idToDelete);

    const newArr = arr.filter((item) => item.id !== idToDelete);
    setArr(newArr);

    const newFindArr = findArr.filter((item) => item.id !== deletedItem.id);
    setFindArr(newFindArr);

    localStorage.setItem("todos", JSON.stringify(newArr));
    localStorage.setItem("finds", JSON.stringify(newFindArr));
  };

  //todo 수정
  const editTodo = (id, newText) => {
    const newArr = arr.map((item) =>
      item.id === id ? { ...item, text: newText } : item
    );
    setArr(newArr);
    localStorage.setItem("todos", JSON.stringify(newArr));
  };

  // localStorage에 todo저장
  useEffect(() => {
    if (arr.length > 0) {
      localStorage.setItem("todos", JSON.stringify(arr));
    }
  }, [arr]);

  // localStorage에 finds저장
  useEffect(() => {
    if (findArr.length > 0) {
      localStorage.setItem("finds", JSON.stringify(findArr));
    }
  }, [findArr]);

  // localStorage todo 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setArr(JSON.parse(saved));
    }
  }, []);

  // localStorage finds 불러오기
  useEffect(() => {
    const saved2 = localStorage.getItem("finds");
    if (saved2) {
      setFindArr(JSON.parse(saved2));
    }
  }, []);

  return (
    <TodoContext.Provider
      value={{
        arr,
        setArr,
        text,
        setText,
        find,
        setFind,
        findArr,
        setFindArr,
        selectedColor,
        setSelectedColor,
        addTodo,
        findTodo,
        removeTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  return useContext(TodoContext); // ✅ 수정됨
}
