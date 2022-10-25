import "./loader.css";

/**
 *
 * @returns loader during data loading
 */

function Loader() {
  return (
    <div className="loader-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
