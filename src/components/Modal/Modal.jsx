import "./Modal.css";
import clsx from "clsx";
import {useEffect} from "react";

export function Modal({active, setActive, children}) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        setActive(false);
      }
    };

    if (active) {
      window.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }),
    [active, setActive];
  return (
    <div
      className={clsx("modal", {active: active == true})}
      onClick={() => setActive(false)}
    >
      <div
        className={clsx("modal-container", {active: active == true})}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={() => setActive(false)}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}
