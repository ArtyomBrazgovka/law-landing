import "./Modal.css";
import clsx from "clsx";
import {useEffect} from "react";

export function Modal({isActive, setActive, children}) {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isActive]);

  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      setActive(false);
    }
  };

  return (
    <div
      className={clsx("modal", {active: isActive == true})}
      onClick={() => setActive(false)}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <div
        className={clsx("modal-container", {active: isActive == true})}
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
