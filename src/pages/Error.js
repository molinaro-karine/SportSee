import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <section className="not-found">
      <div>
        <h1 className="not-found_title">404</h1>
        <h2 className="not-found_subtitle">
          Oups! La page que vous demandez n'existe pas.
        </h2>
      </div>

      <Link to="/" className="not-found_link">
        Retourner sur la page d'acceuil
      </Link>
    </section>
  );
}

export default Error;
