import React, { useEffect, useState, useRef, createRef } from "react";

const SomeComponent2 = () => {
  const [value, setValue] = useState("users");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef();
  const persist = useRef('initial');
  // console.log("page render")
 
  useEffect(() => {
    if(inputRef.current) {
      console.log(inputRef.current.value)
    }
  },[])
  useEffect(() => {
    setLoading(false);
    fetch(`https://jsonplaceholder.typicode.com/${value}`)
      .then((response) => response.json())
      .then((data) =>
        data.map((item) => <pre key={item.id}>{JSON.stringify(item)}</pre>)
      )
      .then((data) => setData(data));
    setLoading(true);
    console.log(persist, "persist");

  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    persist.current = inputRef.current.value;
  };


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          padding: "4px",
        }}
      >
        <button onClick={() => setValue("posts")}>post</button>
        <button onClick={() => setValue("comments")}>comments</button>
        <button onClick={() => setValue("users")}>users</button>
      </div>
      <span
        style={{
          padding: "15px",
          fontSize: "29px",
          textDecoration: "underline",
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {value}
      </span>
      <div
        style={{
          border: "1px solid",
          borderRadius: "10px",
          padding: "9px",
          color: "white",
          overflow: "scroll",
          height: "50vh",
        }}
      >
        {loading ? data : "Loading..."}
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} /> <button type="submit">submit</button>
        </form>
        {/* <button onClick={() => inputRef.current.blur}>remove focus</button> */}
      </div>
    </div>
  );
};

export default SomeComponent2;
