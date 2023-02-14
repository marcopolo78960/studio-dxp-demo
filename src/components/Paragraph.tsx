import { twMerge } from 'tailwind-merge';

export interface ParagraphProps {
  title?: string;
  body?: string;
  textSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
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
  topMargin?: number;
  colSpan?: number;
}

export const initialProps: ParagraphProps = {
  title: 'Paragraph Title',
  body: 'Paragraph Body',
  textSize: 'sm',
  fontWeight: 'normal',
  colSpan: 1,
};

const Paragraph = ({
  title,
  body,
  textSize,
  fontWeight,
  topMargin = 10,
  colSpan = 1,
}: ParagraphProps) => {
  return (
    <div
      className={`mt-${topMargin}`}
      style={{
        gridColumn: `span ${colSpan}`,
      }}
    >
      <h2 className='text-sm font-medium text-gray-900'>{title}</h2>
      {/* <div className='mt-4 space-y-6'> */}
      <p className={`prose-${textSize} font-${fontWeight} text-gray-500 mt-4`}>
        {body}
      </p>
      {/* </div> */}
    </div>
  );
};

export default Paragraph;
