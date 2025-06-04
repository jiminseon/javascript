export default function MyButton({ title, color, clickUrl }) {
  //const { title, color, clickUrl } = props;
  return (
    <a
      href={clickUrl}
      target="_blank"
      style={{
        padding: 2,
        color: "white",
        backgroundColor: color,
      }}
    >
      {title}
    </a>
    // <div>
    //   <button
    //     style={{ backgroundColor: props.color }}
    //     onClick={() => (window.location.href = props.clickUrl)}
    //   >
    //     {props.title}
    //   </button>
    // </div>
  );
}
