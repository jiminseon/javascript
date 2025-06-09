import FindItem from "./FindItem";
export default function FindList({ findArr }) {
  return (
    <div>
      <h3>Find Items</h3>
      <div>
        {findArr.map((elem, index) => (
          <FindItem key={index} text={elem.text} color={elem.color} />
        ))}
      </div>
    </div>
  );
}
