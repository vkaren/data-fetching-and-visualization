import React from "react";
import Box from "./Box";
import Form from "./Form";

class App extends React.Component {
  state = {
    data: {},
    labelsRef: [],
    formInput: {
      min: "1",
      max: "10",
      amount: "200",
    },
  };

  getData = (e) => {
    e.preventDefault();

    const amount = this.state.formInput.amount;
    const min = this.state.formInput.min;
    const max = this.state.formInput.max;
    const url = `https://www.random.org/integers/?num=${amount}&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.text();
      })
      .then((result) => {
        let data = this.state.data;
        let labelsRef = this.state.labelsRef;
        data = {};
        labelsRef = [];

        result
          .split("\n")
          .filter((num) => num !== "")
          .forEach((num) => {
            if (num in data) {
              data[num]++;
            } else {
              data[num] = 1;
            }
          });

        for (let i = 0; i < Object.keys(data).length; i++) {
          labelsRef.push(React.createRef());
        }

        this.setState({ data, labelsRef });
      })
      .catch((error) => console.log("Error: " + error));
  };

  formInputs = (event) => {
    const value = event.currentTarget.value;
    let formInput = this.state.formInput;

    if (event.currentTarget.id === "amount") {
      formInput.amount = value;
    } else if (event.currentTarget.id === "min-num") {
      formInput.min = value;
    } else {
      formInput.max = value;
    }
    this.setState({ formInput });
  };
  reset = () => {
    this.setState({
      data: {},
      formInput: {
        min: "1",
        max: "10",
        amount: "200",
      },
    });
  };

  render() {
    if (Object.keys(this.state.data).length) {
      let maxValue = Math.max(...Object.values(this.state.data));
      let yAxis = [];
      maxValue = Number.isInteger(maxValue / 10)
        ? maxValue
        : Math.trunc((maxValue + 10) / 10) * 10;

      if (maxValue > 10) {
        for (let i = 10; i < maxValue; i += 10) {
          yAxis.push(<span key={i}>{i}</span>);
        }
      } else {
        yAxis.push(<span key="5">5</span>);
      }

      return [
        <div key="y-axis" className="y-axis">
          {yAxis}
        </div>,
        <Box
          key="box-histogram"
          data={this.state.data}
          labelsRef={this.state.labelsRef}
          maxValue={maxValue}
        />,
        <div key="reset" className="reset" onClick={this.reset}>
          <img src="https://img.icons8.com/ios-glyphs/30/null/reboot.png" />
        </div>,
      ];
    } else {
      return (
        <Form
          formInput={this.state.formInput}
          onInput={this.formInputs}
          onSubmit={this.getData}
        />
      );
    }
  }
}

export default App;
