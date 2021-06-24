import { useState } from "react";

import AnswersList from "./AnswersList";
import Form from "./Form";

const ANSWER_EXAMPLE = {
  username: "Nicolas",
  email: "nico@nico.las",
  logo: "4",
  colour: "2",
  consistency: "3",
  timeSpent: ["swimming", "chatting"],
  review: "I love my rubber ducky! ❤️",
  bestFeatures: ["colour", "size"],
  worstFeatures: ["sound"]
};

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswerList] = useState([]);

  function addAnswer(answers) {
    setAnswerList([...answersList, answers]);
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>
      <section className="main__form">
        <Form addAnswer={addAnswer} />
      </section>
    </main>
  );
}

export default Main;
