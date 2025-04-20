import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "red",
    "yellow",
    "purple",
  ];
  const users = [
    { id: 1, firstName: "Vincent", lastName: "Kimani" },
    { id: 2, firstName: "Dennis", lastName: "Macharia" },
  ];

  const colorElements = colors.map((color) => {
    return (
      <li key={color} style={{ color: color }}>
        {color}
      </li>
    );
  });

  const userHeadings = users.map((user) => {
    return (
      <h2 key={user.id}>
        {user.firstName} {user.lastName}
      </h2>
    );
  });
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>{colorElements}</ol>
      <h2>{userHeadings}</h2>
    </div>
  );
}

export default ColorList;
