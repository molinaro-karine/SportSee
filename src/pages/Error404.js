import { Link } from "react-router-dom";
import "./error404.css";

/**
 * @function Error
 * @description Diplays a 404 error page.
 * @returns { HTMLElement }
 */

function Error404() {
  return (
    <section className="not-found">
      <div>
        <h1 className="not-found_title">404</h1>
        <h2 className="not-found_subtitle">
          Oups! La page que vous demandez n'existe pas.
        </h2>
      </div>

      <Link to="/12" className="not-found_link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default Error404;
