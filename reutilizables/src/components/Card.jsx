import "./CardStyle.css"

export function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.img} alt="logo de react" />
      <p>Foto del perfil</p>
      {props.age <60 ? <p>{props.age}</p> : <p>***</p> }
      <button>Rent a Car</button>
    </div>
  );
}
