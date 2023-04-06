import { twMerge } from "tailwind-merge";

interface MultipleChoiceInputProps {
  label: string;
  boldLabel?: boolean;
  italicLabel?: boolean;
  underlineLabel?: boolean;
  description?: string;
  boldDescription?: boolean;
  italicDescription?: boolean;
  underlineDescription?: boolean;
  required?: boolean;
  // options?: string[];
}

export const initialProps: MultipleChoiceInputProps = {
  label: "Untitled Question",
  description: "Description (optional)",
  // options: ["Option 1"],
};

const MultipleChoiceInput = ({
  label,
  boldLabel,
  italicLabel,
  underlineLabel,
  description,
  boldDescription,
  italicDescription,
  underlineDescription,
  required,
}: // options,
MultipleChoiceInputProps) => {
  return (
    <div>
      <label
        className={twMerge(
          "text-base font-semibold text-gray-900",
          boldLabel && "font-bold",
          italicLabel && "italic",
          underlineLabel && "underline"
        )}
      >
        {label}
      </label>
      <p
        className={twMerge(
          "text-sm text-gray-500",
          boldDescription && "font-bold",
          italicDescription && "italic",
          underlineDescription && "underline"
        )}
      >
        {description}
      </p>
      <fieldset className="mt-4">
        <legend className="sr-only">{label}</legend>
        {/* <div className="space-y-4">
          {options?.map((option) => (
            <div key={uuid()} className="flex items-center">
              <input
                // id={notificationMethod.id}
                name="notification-method"
                type="radio"
                // defaultChecked={notificationMethod.id === 'email'}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                // htmlFor={notificationMethod.id}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {option}
              </label>
            </div>
          ))}
        </div> */}
      </fieldset>
    </div>
  );
};

export default MultipleChoiceInput;
