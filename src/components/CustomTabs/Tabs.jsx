import { useState } from "react";

const tabs = [
  {
    label: "Tab 1",
    content: [
      <h3>Content 1</h3>,
      <h4>HTML</h4>,
      <p>
        {" "}
        HTML (HyperText Markup Language) is the foundation of web development.
        It structures the content of web pages using a system of elements and
        tags. HTML defines the layout and semantic meaning of page elements such
        as headings, paragraphs, images, links, and more. Every web page you
        visit is built with HTML at its core.
      </p>,
    ],
  },
  {
    label: "Tab 2",
    content: [
      <h3>Content 2</h3>,
      <h4>CSS</h4>,
      <p>
        {" "}
        CSS (Cascading Style Sheets) is used to control the look and feel of web
        pages. It allows developers to apply styles such as colors, fonts,
        spacing, and layout to HTML elements. With CSS, you can create visually
        appealing designs, responsive layouts, animations, and transitions,
        enhancing the overall user experience.
      </p>,
    ],
  },
  {
    label: "Tab 3",
    content: [
      <h3>Content 3</h3>,
      <h4>JavaScript</h4>,
      <p>
        {" "}
        JavaScript is a powerful programming language that brings interactivity
        to web pages. It enables dynamic content updates, form validation,
        animations, and communication with servers through APIs. JavaScript is
        essential for modern web development, allowing developers to build rich,
        responsive web applications that feel seamless and interactive.
      </p>,
    ],
  },
  {
    label: "Tab 4",
    content: [
      <h3>Content 4</h3>,
      <h4>React</h4>,
      <p>
        {" "}
        React is a popular JavaScript library for building user interfaces,
        particularly single-page applications where a fast and interactive user
        experience is critical. It allows developers to create reusable UI
        components and efficiently update and render them in response to data
        changes. React uses a virtual DOM to boost performance and follows a
        component-based architecture.
      </p>,
    ],
  },
];

function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setCurrentTabIndex(getCurrentIndex);
  }
  return (
    <div className="tabs">
      <div className="tabs-heading-cont">
        {tabs.map((tabItem, index) => (
          <div
            className={`tabs-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={index}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="tabs-content-cont">
        {tabs[currentTabIndex] && tabs[currentTabIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
