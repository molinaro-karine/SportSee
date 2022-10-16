import "../KeyCards/KeyCard.css";

/**
 *
 * @param {number|string} amount
 * @param {string} icon
 * @param {string} type
 * @returns user infos cards
 */

function KeyCard({ icon, type, amount }) {
  return (
    <div className={`infos ${type}`}>
      <img className="logo" src={icon} alt={`logo ${type}`} />
      <p>
        <span>{amount}</span>
        <br />
        {type}
      </p>
    </div>
  );
}

export default KeyCard;
