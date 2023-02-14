import { twMerge } from 'tailwind-merge';

export interface HeadlineProps {
  value: string;
  textSize?: 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  fontWeight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
  leftPadding?: number;
}

export const initialProps: HeadlineProps = {
  value: 'Headline',
  textSize: 'xl',
  fontWeight: 'medium',
  leftPadding: 0,
};

const Headline = ({
  value,
  textSize,
  fontWeight,
  leftPadding,
}: HeadlineProps) => {
  return (
    <div className={`mt-4 pl-${leftPadding}`}>
      <h1
        className={`text-${textSize} font-${fontWeight} tracking-tight text-gray-900`}
      >
        {value}
      </h1>
    </div>
  );
};

export default Headline;
