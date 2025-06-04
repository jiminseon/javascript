export default function CaptionImage(props) {
  return (
    <div style={props.style}>
      <img src={props.imgUrl} alt={props.caption} />
      <p>{props.caption}</p>
    </div>
  );
}
