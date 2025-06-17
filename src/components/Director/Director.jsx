import "./Director.css";

import director from "/images/director.webp";

export function Director() {
  return (
    <div className="director-section">
      <div className="director-picture">
        <div className="director-background"></div>
        <div className="director-photo">
          <img className="director-img" src={director}></img>
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
}
