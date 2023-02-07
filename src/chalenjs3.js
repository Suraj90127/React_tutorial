import React from "react";
import ReactDOM from "react-dom";

const name = "rjsurya";

const date = new Date()

const hr = date.getHours()

let position = "";

const cssStyle = {};


if (hr > 1 && hr < 12) {
  position = "Good Morning";
  cssStyle.color = 'green';
}
else if (hr < 12 && hr < 5) {
  position = "Good Afternoon";
  cssStyle.color = 'red';
} else {
  position = "Good Evening"
  cssStyle.color = 'black';
}

ReactDOM.render(
  <>
    <div>
      <h1>
        Hello sir <span style={cssStyle}>{position}</span> {name}
      </h1>
    </div>
  </>,
  document.getElementById("rj")

)