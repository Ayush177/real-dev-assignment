const RenderItems = (props) => {
    return (
        <div>
        {props.items.length>0 ? <p>Your Result</p> : ""}
        <ul>
          {props.items.map((item) => (
            <li>
              {item[0] === "h1" ? (
                <h1>{item[1]}</h1>
              ) : item[0] === "h2" ? (
                <h2>{item[1]}</h2>
              ) : item[0] === "p" ? (
                <p>{item[1]}</p>
              ) : item[0] === "img" ? (
                <img src={item[1]} alt="img" />
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default RenderItems;