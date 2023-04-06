import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";

interface LinearScaleInputProps {
  label: string;
  boldLabel?: boolean;
  italicLabel?: boolean;
  underlineLabel?: boolean;

  required?: boolean;

  // TODO: how do I do min and max?
  // min: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  min: number;
  minLabel?: string;
  // max: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  max: number;
  maxLabel?: string;
}

export const initialProps: LinearScaleInputProps = {
  label: "Untitled Question",
  min: 1,
  minLabel: "Strongly Disagree",
  max: 5,
  maxLabel: "Strongly Agree",
};

const LinearScaleInput = ({
  label,
  boldLabel,
  italicLabel,
  underlineLabel,
  required,
  min,
  minLabel,
  max,
  maxLabel,
}: LinearScaleInputProps) => {
  const minNum = Number(min);
  const maxNum = Number(max);

  const [value, setValue] = useState(min);
  const [marks, setMarks] = useState<{ value: number; label: string }[]>([]);

  const handleChange = (index: number) => {
    setValue(index);
  };

  // useEffect that sets the marks
  useEffect(() => {
    const marks = [];
    for (let i = minNum; i <= maxNum; i++) {
      marks.push({ value: i, label: i.toString() });
    }
    setMarks(marks);
  }, [minNum, maxNum]);

  return (
    <div className="col-span-full">
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
      <div className="my-4">
        <Box sx={{ width: "100%", overflow: "hidden", paddingX: "20px" }}>
          <Slider
            aria-label="Custom marks"
            defaultValue={min}
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
            min={minNum}
            max={maxNum}
            value={value}
            onChange={(event, newValue) => {
              handleChange(newValue as number);
            }}
          />
        </Box>
        <div className="flex justify-between">
          <div className="text-sm text-gray-500">{minLabel}</div>
          <div className="text-sm text-gray-500">{maxLabel}</div>
        </div>
      </div>
    </div>
  );
};

export default LinearScaleInput;
