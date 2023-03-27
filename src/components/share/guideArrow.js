import arrowNextSvg from "../../resources/svgs/iconmonstr-arrow-65.svg";
import arrowPreviousSvg from "../../resources/svgs/iconmonstr-arrow-66.svg";
import "./guideArrow.scss";

export const arrowNext = (toPage) => {
  return (
    <div className="guide-arrow arrow-next" style={{ zIndex: 10 }}>
      <a href={toPage} aria-label="go to next section">
        <img src={arrowNextSvg} alt="arrow next" />
      </a>
    </div>
  );
};

export const arrowPrevious = (toPage) => {
  return (
    <div className="guide-arrow arrow-previous" style={{ zIndex: 10 }}>
      <a href={toPage} aria-label="go to previous section">
        <img src={arrowPreviousSvg} alt="arrow previous" />
      </a>
    </div>
  );
};
