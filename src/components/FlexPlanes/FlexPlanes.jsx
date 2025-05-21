import { useEffect, useState } from "react";
import flexData from "./FlexPlanesData";
import "./FlexPlanes.css";

function FlexPlanes() {
  const [openIndex, setOpenIndex] = useState(null);

  console.log(openIndex);

  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
  }, []);

  return (
    <div className="flexPlanes">
      <h1>Flex Planes</h1>
      <p>
        Click to explore! Each panel expands with fluid animation, revealing
        unique content and visuals using Flexbox magic.
      </p>

      <div className="flexPlanes-container">
        <div className="panels">
          {flexData.map((data, index) => (
            <div
              className={`panel ${
                openIndex === index ? "open open-active" : null
              }`}
              key={index}
              style={{
                background: `url(${data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => setOpenIndex(index)}
            >
              {data.text.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlexPlanes;
