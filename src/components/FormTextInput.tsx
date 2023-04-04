import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

export interface FormTextInputProps {
  label: string;
  inputType: "Short Answer" | "Paragraph";
  boldLabel?: boolean;
  italicLabel?: boolean;
  underlineLabel?: boolean;

  description?: string;
  boldDescription?: boolean;
  italicDescription?: boolean;
  underlineDescription?: boolean;

  placeholder?: string;

  required?: boolean;
  errorText?: string;
  inputValidation?: "number" | "text" | "length" | "regex";
}

export const initialProps: FormTextInputProps = {
  inputType: "Short Answer",
  label: "Untitled Question",
  description: "Description (optional)",
  placeholder: "Placeholder (optional)",
};

const FormTextInputProps = ({
  label,
  inputType,
  boldLabel,
  italicLabel,
  underlineLabel,
  description,
  boldDescription,
  italicDescription,
  underlineDescription,
  placeholder,
  required,
  errorText,
  inputValidation,
}: FormTextInputProps) => {
  const [inputValue, setInputValue] = useState("");
  const [blurred, setBlurred] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    errorText || (required && !errorText ? "This field is required." : "")
  );
  const [inputValid, setInputValid] = useState(true);

  useEffect(() => {
    if (required && inputValue === "" && blurred) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [inputValue, blurred]);

  return (
    <div
      className={inputType === "Short Answer" ? "col-span-4" : "col-span-full"}
    >
      <label
        // htmlFor="website"
        className={twMerge(
          "block text-sm font-medium leading-6 text-gray-900",
          boldLabel && "font-bold",
          italicLabel && "italic",
          underlineLabel && "underline"
        )}
      >
        {label}
      </label>
      <div className="relative mt-2 ">
        {/* TODO: the following span can be used as a starter once a prop is added */}
        {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
            http://
          </span> */}
        {inputType === "Short Answer" ? (
          <div
            className={twMerge(
              "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset max-w-md",
              !inputValid &&
                "text-red-900 ring-red-300 focus:ring-2 focus-within:ring-red-500"
            )}
          >
            <input
              className={twMerge(
                // TODO: why isn't placeholder: working?
                "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm leading-6",
                !inputValid && "placeholder:text-red-300"
              )}
              placeholder={placeholder}
              required={required}
              onFocus={() => setBlurred(false)}
              onBlur={() => setBlurred(true)}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        ) : (
          <textarea
            className={twMerge(
              "block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 py-1.5 text-sm leading-6",
              !inputValid &&
                "text-red-900 ring-red-300 focus:ring-2 focus-within:ring-red-500"
            )}
            placeholder={placeholder}
            onFocus={() => setBlurred(false)}
            onBlur={() => setBlurred(true)}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            // TODO: how do I make this required?
            // required={required}
          ></textarea>
        )}
        {!inputValid && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
        <p
          className={twMerge(
            "mt-3 text-sm leading-6 text-gray-600",
            !inputValid && "text-red-500",
            boldDescription && "font-bold",
            italicDescription && "italic",
            underlineDescription && "underline"
          )}
        >
          {inputValid ? description : errorMessage}
        </p>
      </div>
    </div>
  );
};

export default FormTextInputProps;
