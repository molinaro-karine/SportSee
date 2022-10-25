import "./header.css";
import PropTypes from "prop-types";

/**
 *
 * @param { string } firstName
 * @returns Greetings Header with user first name
 */

function Header({ firstName }) {
  return (
    <div className="header">
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Header;
