import { useContext } from "react";
import {
  Option,
  QuestionActionTypes,
  QuestionContext,
} from "../providers/QuestionProvider";

export const useQuestionActions = () => {
  const question = useContext(QuestionContext);
  if (question.state === undefined) {
    throw new Error(
      "Attempted to call useQuestionActions() outside of QuestionProvider." +
        " Please ensure that 'useQuestionActions()' is called within an QuestionProvider component."
    );
  }

  const addOption = (option: Option) => {
    question.dispatch({
      type: QuestionActionTypes.AddOption,
      payload: option,
    });
  };

  const selectOption = (id: string) => {
    question.dispatch({
      type: QuestionActionTypes.SelectOption,
      payload: id,
    });
  };

  const deselectOption = (id: string) => {
    question.dispatch({
      type: QuestionActionTypes.DeselectOption,
      payload: id,
    });
  };

  return {
    addOption,
    selectOption,
    deselectOption,
  };
};
