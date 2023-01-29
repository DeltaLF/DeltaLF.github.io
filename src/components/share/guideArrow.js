import arrowNextSvg from "../../resources/svgs/iconmonstr-arrow-65.svg";
import arrowPreviousSvg from "../../resources/svgs/iconmonstr-arrow-66.svg";

export const arrowNext = (toPage) => {
  return (
    <div className="arrow-next" style={{ zIndex: 10 }}>
      <a href={toPage}>
        <img src={arrowNextSvg} alt="arrow" />
      </a>
    </div>
  );
};

export const arrowPrevious = (toPage) => {
  return (
    <div className="arrow-previous" style={{ zIndex: 10 }}>
      <a href={toPage}>
        <img src={arrowPreviousSvg} alt="arrow" />
      </a>
    </div>
  );
};
