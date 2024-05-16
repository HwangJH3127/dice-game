import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import "./index.css";

function App() {
  const [history, setHistory] = useState([]);
  const [comHistory, setComHistory] = useState([]);

  const [sum, setSum] = useState(0);
  const [comSum, setComSum] = useState(0);

  const [result, setResult] = useState("");
  const [comResult, setComResult] = useState("");

  const [count, setCount] = useState(0);

  function random(n) {
    return Math.ceil(Math.random() * n);
  }
  function random2(n) {
    return Math.ceil(Math.random() * n);
  }

  const getResult = () => {
    if (sum === 0 && comSum === 0) {
      setResult("");
      setComResult("");
    } else if (sum === comSum) {
      setResult("비김");
      setComResult("비김");
    } else if (sum > comSum) {
      setResult("승리");
      setComResult("패배");
    } else {
      setResult("패배");
      setComResult("승리");
    }
  };

  const handleClick = () => {
    if (count < 5) {
      const nextMyNum = random(5);
      const nextComNum = random2(5);
      // 배열형태의 state는 수정할때 스프레드 문법으로 하나의 배열을 복제하여 그것을 수정해야함. 불변성을 위해
      setHistory([...history, nextMyNum + 1]);
      setComHistory([...comHistory, nextComNum + 1]);

      setSum(sum + nextMyNum + 1);
      setComSum(comSum + nextComNum + 1);

      setCount(count + 1);
    } else {
      alert(
        `${
          sum === comSum
            ? "무승부입니다."
            : sum > comSum
            ? "최종 승리하셨습니다."
            : "최종 패배하셨습니다."
        }`
      );
      setHistory([]);
      setComHistory([]);
      setCount(0);
      setSum(0);
      setComSum(0);
      setResult("");
      setComResult("");
    }
  };
  const handleClearClick = () => {
    setHistory([]);
    setComHistory([]);
    setCount(0);
    setSum(0);
    setComSum(0);
    setResult("");
    setComResult("");
  };

  useEffect(() => {
    getResult();
  }, [sum, comSum]);
  return (
    <>
      <Header />
      <div className="text-center ">
        <Button title="던지기" className="blue" onclick={handleClick} />
        <Button title="다시하기" className="red" onclick={handleClearClick} />
      </div>
      <div className="mt-5">남은 횟수 : {5 - count}</div>
      <div className="d-flex">
        <Results
          title="나"
          color="blue"
          history={history}
          sum={sum}
          result={result}
        />
        <Results
          title="컴퓨터"
          color="red"
          history={comHistory}
          sum={comSum}
          result={comResult}
        />
      </div>
    </>
  );
}

export default App;
