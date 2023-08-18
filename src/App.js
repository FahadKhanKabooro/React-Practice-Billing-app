import { useState } from "react";
import Bill from "./components/Bill";
import Selectopt from "./components/Selectopt";
import OutPut from "./components/OutPut";
import Reset from "./components/Reset";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <>
      <Bill bill={bill} onSetbill={setBill} />
      <Selectopt percentage={percentage1} onSelect={setPercentage1}>
        how do you like the service
      </Selectopt>
      <Selectopt percentage={percentage2} onSelect={setPercentage2}>
        how your friend likes the service
      </Selectopt>
      <OutPut bill={bill} tip={tip} />
      <Reset onReset={handleReset} />
    </>
  );
}
