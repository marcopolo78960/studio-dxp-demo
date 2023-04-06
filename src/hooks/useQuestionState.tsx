import { useContext } from "react";
import { QuestionContext, QuestionState } from "../providers/QuestionProvider";

export const useQuestionState = (): QuestionState => {
  const question = useContext(QuestionContext);
  if (question.state === undefined) {
    throw new Error(
      "Attempted to call useQuestionState() outside of QuestionProvider." +
        " Please ensure that 'useQuestionState()' is called within an QuestionProvider component."
    );
  }

  return question.state;
};
