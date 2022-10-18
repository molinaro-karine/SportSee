import "./KeyCard.css";

function KeyCard({ icon, type, am }) {
  return (
    <div className={`infos ${type}`}>
      <img className="logo" src={icon} alt={`logo ${type}`} />
      <p>
        <span>{am}</span>
        <br />
        {type}
      </p>
    </div>
  );
}

export default KeyCard;
