import { twMerge } from 'tailwind-merge';

export interface GridContainerProps {
  children?: React.ReactNode;
  columns?: number;
  paddingTop?: number;
}

export const initialProps: GridContainerProps = {
  columns: 2,
  paddingTop: 0,
};

export default function GridContainer({
  children,
  columns,
  paddingTop,
}: GridContainerProps) {
  return (
    <div
      className={twMerge(
        `mx-auto grid max-w-7xl grid-cols-${columns} gap-x-8 px-8 pt-${paddingTop}`
      )}
    >
      {children}
    </div>
  );
}
