import React from "react";

function Form(props) {
  return (
    <form>
      <h1>Data fetching and visualization</h1>
      <label htmlFor="amount">
        Amount of numbers
        <input
          type="text"
          name="amount"
          id="amount"
          defaultValue="200"
          onInput={props.onInput}
          className={
            props.formInput.amount &&
            !isNaN(props.formInput.amount - "") &&
            props.formInput.amount - "" > 0 &&
            props.formInput.amount - "" <= 950
              ? null
              : "error"
          }
        />
      </label>

      <label htmlFor="min">
        Min number
        <input
          type="text"
          name="min"
          id="min-num"
          defaultValue="1"
          onInput={props.onInput}
          className={
            props.formInput.min && !isNaN(props.formInput.min - "")
              ? null
              : "error"
          }
        />
      </label>

      <label htmlFor="max">
        Max number
        <input
          type="text"
          name="max"
          id="max-num"
          defaultValue="10"
          onInput={props.onInput}
          className={
            props.formInput.max &&
            !isNaN(props.formInput.max - "") &&
            props.formInput.max !== props.formInput.min &&
            props.formInput.max > props.formInput.min
              ? null
              : "error"
          }
        />
      </label>

      <input
        type="submit"
        value="Submit"
        id="submit"
        onClick={props.onSubmit}
        disabled={
          !props.formInput.amount.length ||
          !props.formInput.min.length ||
          !props.formInput.max.length ||
          isNaN(props.formInput.max - "") ||
          isNaN(props.formInput.min - "") ||
          isNaN(props.formInput.amount - "") ||
          props.formInput.max === props.formInput.min ||
          props.formInput.max < props.formInput.min ||
          props.formInput.amount - "" > 950 ||
          props.formInput.amount - "" <= 0
        }
      />
    </form>
  );
}

export default Form;
