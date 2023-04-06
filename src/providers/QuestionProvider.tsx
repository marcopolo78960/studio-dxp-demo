import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

export type QuestionType = "Multiple Choice" | "Checkboxes";

export type Option = {
  id: string;
  value: string;
  selected: boolean;
};

export type QuestionState = {
  id: string;
  type: QuestionType;
  options: {
    id: string;
    value: string;
    selected: boolean;
  }[];
};

export enum QuestionActionTypes {
  SelectType,
  SelectOption,
  DeselectOption,
  AddOption,
  RemoveOption,
}

export type QuestionActions =
  | { type: QuestionActionTypes.SelectType; payload: QuestionType }
  | { type: QuestionActionTypes.SelectOption; payload: string }
  | { type: QuestionActionTypes.DeselectOption; payload: string }
  | { type: QuestionActionTypes.AddOption; payload: Option }
  | { type: QuestionActionTypes.RemoveOption; payload: string };

export const questionReducer = (
  state: QuestionState,
  action: QuestionActions
): QuestionState => {
  switch (action.type) {
    case QuestionActionTypes.SelectType:
      return {
        ...state,
        type: action.payload,
        options: state.options.map((option) => {
          return {
            ...option,
            selected: false,
          };
        }),
      };
    case QuestionActionTypes.SelectOption:
      return {
        ...state,
        //  if type is multiple choice, deselect all other options
        options:
          state.type === "Multiple Choice"
            ? state.options.map((option) => {
                if (option.id === action.payload) {
                  return {
                    ...option,
                    selected: true,
                  };
                }
                return {
                  ...option,
                  selected: false,
                };
              })
            : state.options.map((option) => {
                if (option.id === action.payload) {
                  return {
                    ...option,
                    selected: true,
                  };
                }
                return option;
              }),
      };
    case QuestionActionTypes.DeselectOption:
      return {
        ...state,
        options: state.options.map((option) => {
          if (option.id === action.payload) {
            return {
              ...option,
              selected: false,
            };
          }
          return option;
        }),
      };
    case QuestionActionTypes.AddOption:
      return {
        ...state,
        options: [...state.options, action.payload],
      };
    case QuestionActionTypes.RemoveOption:
      return {
        ...state,
        options: state.options.filter((option) => option.id !== action.payload),
      };
    default:
      return state;
  }
};

export const initialQuestionState: QuestionState = {
  id: uuid(),
  type: "Multiple Choice",
  options: [],
};

export const QuestionContext = createContext<{
  state: QuestionState;
  dispatch: React.Dispatch<QuestionActions>;
}>({
  state: initialQuestionState,
  dispatch: () => null,
});

export const QuestionProvider = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: QuestionType;
}) => {
  const [state, dispatch] = useReducer(questionReducer, {
    ...initialQuestionState,
    type,
  });

  return (
    <QuestionContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
};
