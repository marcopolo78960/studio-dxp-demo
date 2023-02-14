export interface VerticalDividerProps {
  horizontalMargin?: number;
}

export const initialProps: VerticalDividerProps = {
  horizontalMargin: 0,
};

export default function VerticalDivider() {
  const { horizontalMargin } = initialProps;

  const style = {
    marginLeft: `${horizontalMargin}px`,
    marginRight: `${horizontalMargin}px`,
  };

  return <div className='h-full border-r border-gray-300'></div>;
}
