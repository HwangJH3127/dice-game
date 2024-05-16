import "./Results.css";

import Dice from "../Dice/Dice";

const Results = ({ title, color, history, sum, result }) => {
  console.log(result);
  return (
    <div className={`score_board ${result === "승리" ? "win" : ""}`}>
      <h2>{title}</h2>
      <Dice color={color} history={history} />
      <div>
        <span>총점</span>
        <p>{sum}</p>
      </div>

      <div>
        <span>기록</span>
        <p>{history.join(", ")}</p>
      </div>

      <div>
        <span>결과</span>
        <p className="red">{result}</p>
      </div>
    </div>
  );
};

export default Results;
