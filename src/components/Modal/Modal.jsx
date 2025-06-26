import "./Modal.css";
import clsx from "clsx";

export function Modal({active, setActive, children}) {
  if (active) {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "15px";
  } else {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }
  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      setActive(false);
    }
  };

  return (
    <div
      className={clsx("modal", {active: active == true})}
      onClick={() => setActive(false)}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <div
        className={clsx("modal-container", {active: active == true})}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={() => setActive(false)}>
          <span className="modal-close-icon" />
        </button>
        {children}
      </div>
    </div>
  );
}
