import { useState } from "react";

// const Header = function (props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.heading}</h1>
//     </div>
//   );
// };

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = (props) => {
  // const { text, value } = props;
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad;
  const average = sum / 3;

  if (sum === 0)
    return (
      <>
        <h3>No feedback given</h3>
      </>
    );
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="total" value={sum} />
      <StatisticLine text="average" value={average} />

      {/* <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>total {props.good + props.neutral + props.bad}</p>
      <p>average {props.good + props.neutral + props.bad / 3}</p>
      <p>percentage {props.good + props.neutral + props.bad / 100 / 1} %</p> */}
    </div>
  );
};

const App = () => {
  // const heading = "Give Course Feedback";
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give me feedback</h1>
      <div>
        <Button handleClick={handleClickGood} text="good" />
        <Button handleClick={handleClickNeutral} text="neutral" />
        <Button handleClick={handleClickBad} text="bad" />
        {/* <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button> */}
      </div>

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />

      {/* <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {good + neutral + bad}</p>
      <p>average {good + neutral + bad / 3}</p>
      <p>percentage {good + neutral + bad / 100 / 1} %</p> */}
    </div>
  );
};

export default App;
