export interface GridContainerProps {
  columns?: number;
  children: React.ReactNode;
}

export default function GridContainer({
  children,
  columns = 1,
}: GridContainerProps) {
  const columnMap: {
    [key: number]: string;
  } = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };
  return <div className={`grid gap-8 ${columnMap[columns]}`}>{children}</div>;
}
