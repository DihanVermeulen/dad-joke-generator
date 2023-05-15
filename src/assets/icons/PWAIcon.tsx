import { useEffect, useState } from "react";

interface Props {
  width?: number;
  height?: number;
}

const PWAIcon: React.FC<Props> = ({ width, height }) => {
  const [colorScheme, setColorScheme] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setColorScheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (event: MediaQueryListEvent) => {
      setColorScheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 -159.5 512 512"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <polygon
            fill={colorScheme === "dark" ? "#999999" : "#3D3D3D"}
            points="376.818362 158.243566 391.609181 120.840549 434.316067 120.840549 414.048526 64.1021885 439.396722 3.2018623e-05 512.000001 192.769205 458.457706 192.769205 446.051149 158.243566"
          ></polygon>
          <polygon
            fill="#5A0FC8"
            points="331.139673 192.76973 408.862952 0.000304174426 357.335083 0.000560323934 304.16787 124.572484 266.360657 0.00081647082 226.753837 0.00081647082 186.158952 124.572484 157.530493 67.8076311 131.622821 147.624549 157.926821 192.76973 208.636591 192.76973 245.320394 81.0556311 280.296394 192.76973"
          ></polygon>
          <path
            d="M48.9117387,126.594779 L80.6502305,126.594779 C90.2643944,126.594779 98.8254436,125.52173 106.333378,123.375631 L114.541378,98.0882869 L137.481444,27.4139262 C135.733509,24.6434344 133.737968,22.0239459 131.494821,19.5558016 C119.71646,6.51845082 102.483673,0 79.7959354,0 L0,0 L0,192.769205 L48.9117387,192.769205 L48.9117387,126.594779 Z M90.9224928,44.3484836 C95.5231485,48.9787787 97.8232141,55.1749754 97.8232141,62.9375984 C97.8232141,70.7597623 95.8001321,76.9635656 91.7542305,81.5490082 C87.3188207,86.6440902 79.1517387,89.1915 67.2535092,89.1915 L48.9117387,89.1915 L48.9117387,37.4026475 L67.3883289,37.4026475 C78.477378,37.4026475 86.3220994,39.7179262 90.9224928,44.3484836 Z"
            fill={colorScheme === "dark" ? "#999999" : "#3D3D3D"}
          ></path>
        </g>
      </svg>
    </>
  );
};

export { PWAIcon };
