import React from "react";
import "./styles.css";

export default function App() {
  const creatingElement = (x) => {
    if (x.render && !!x.children) {
      return React.createElement(
        x.element,
        x.attr,
        ...x.children.map((y) => creatingElement(y))
      );
    } else if (x.render) {
      return React.createElement(x.element, x.attr, x.innerText);
    }
  };
  const formArray = [
    { element: "h1", attr: null, innerText: "Test this code", render: true },
    {
      element: "div",
      attr: null,
      render: true,
      children: [
        {
          element: "label",
          attr: null,
          innerText: "Cars: ",
          render: true
        },
        {
          element: "select",
          attr: { name: "cars", id: "cars" },
          render: true,
          children: [
            {
              element: "option",
              attr: { value: "volvo" },
              innerText: "Volvo",
              render: true
            },
            {
              element: "option",
              attr: { value: "mbw" },
              innerText: "mbw",
              render: true
            },
            {
              element: "option",
              attr: { value: "merc" },
              innerText: "merc",
              render: true
            },
            {
              element: "option",
              attr: { value: "merc1" },
              innerText: "merc1",
              render: true
            },
            {
              element: "option",
              attr: { value: "honda" },
              innerText: "honda",
              render: false
            },
            {
              element: "option",
              attr: { value: "tesla" },
              innerText: "tesla",
              render: true
            }
          ]
        }
      ]
    }
  ];
  return <div className="App">{formArray.map((x) => creatingElement(x))}</div>;
}
