const SelectMenu = (props) => {
    return (
      <div className="select-menu">
        <select
          name="type-of-input"
          id="type"
          value={props.type}
          onChange={(event) => props.setType(event.target.value)}
        >
          <option>Select one ...</option>
          <option value="h1">{"<h1>"}</option>
          <option value="h2">{"<h2>"}</option>
          <option value="p">{"<p>"}</option>
          <option value="img">{"<img>"}</option>
        </select>
      </div>
    );
};

export default SelectMenu;