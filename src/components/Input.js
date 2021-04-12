const Input = (props) => {
    return (
      <div className="input">
        <p class="value">Value</p>
        <textarea
          name="description"
          id=""
          cols="15"
          rows="5"
          onChange={(event) => props.setDescription(event.target.value)}
        ></textarea>
      </div>
    );
}

export default Input;