import "./Modal.css";
import clsx from "clsx";
import {useEffect} from "react";

export function Modal({isActive, setIsActive, children}) {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "1rem";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isActive]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsActive(false);
    }
  };

  return (
    <div
      className={clsx("modal", {active: isActive})}
      onClick={() => setIsActive(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div
        className={clsx("modal-container", {active: isActive})}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={() => setIsActive(false)}>
          <span className="modal-close-icon" />
        </button>
        {children}
      </div>
    </div>
  );
}
