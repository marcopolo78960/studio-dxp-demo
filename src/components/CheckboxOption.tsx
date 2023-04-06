import { useEffect, useState } from "react";
import { useQuestionActions } from "../hooks/useQuestionActions";
import { v4 as uuid } from "uuid";
import { useQuestionState } from "../hooks/useQuestionState";

export interface CheckboxOptionProps {
  value: string;
  // label is the text that will be displayed to the user if provided
  label?: string;
}

const CheckboxOption = ({ value, label }: CheckboxOptionProps) => {
  const actions = useQuestionActions();
  const state = useQuestionState();

  const checked = state.options.find((option) => option.id === value)?.selected;

  const [optionId, setOptionId] = useState(uuid());
  const [defaultLabel, setDefaultLabel] = useState("");

  useEffect(() => {
    console.log("id", optionId);
    setDefaultLabel(`Option ${state.options.length + 1}`);

    if (!state.options.map((option) => option.id).includes(value)) {
      actions.addOption({
        id: optionId,
        value,
        selected: false,
      });
    }
  }, [optionId]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.target.checked
      ? actions.selectOption(optionId)
      : actions.deselectOption(optionId);
  };

  // TODO: checkbox label (Option 1, Option 2, etc. )
  // TODO: checkbox value

  return (
    <div className="space-y-5">
      <div className="relative flex items-start">
        <div className="flex h-6 items-center">
          <input
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            type="checkbox"
            name={value}
            onChange={handleChange}
            checked={checked}
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor={label} className="font-medium text-gray-900">
            {label || value || defaultLabel}
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckboxOption;
