import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <CardComponent
        name={"Ujjwal"}
        description={"Remote Software Developer"}
        interests={["Open Source", "Philosphy"]}
        socials={[{
          label: "LinkedIn",
          link: "https://www.linkedin.com/in/ujjwal-bhatt-b256271a3/"
        }, {
          label: "Twitter",
          link: "https://twitter.com/ujjwalbhatt09"
        }]}
      >
        {" "}
      </CardComponent>
    </div>
  );
}

function CardComponent(props) {
  function createLi() {}
  return (
    <div
      style={{
        textAlign: 'center',
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px",
        maxWidth: "350px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h2>{props.name}</h2>
      <p
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "15px",
        }}
      >
        {props.description}
      </p>
      <h3 style={{
        fontSize: '18px',
        marginBottom: '10px',
        color: '#333',
      }}>Interests</h3>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {props.interests.map((interest) => (
          <li
            style={{
              fontSize: "14px",
              marginBottom: "5px",
              color: "#555",
            }}
            key={interest}
          >
            {interest}
          </li>
        ))}
      </ul>
      <a href={props.socials[0].link} target="_blank">
      <button
        style={{
          color: "#fff",
          padding: "10px 15px",
          backgroundColor: "#007BFF",
          borderRadius: "5px",
          display: "inline-block",
          margin: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {props.socials[0].label}
      </button>
      </a>

      <a href={props.socials[1].link} target="_blank">
      <button
        style={{
          color: "#fff",
          padding: "10px 15px",
          backgroundColor: "#007BFF",
          borderRadius: "5px",
          display: "inline-block",
          margin: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {props.socials[1].label}
      </button>
      </a>
    </div>
  );
}

export default App;
