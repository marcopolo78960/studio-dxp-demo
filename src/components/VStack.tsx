export interface VStackProps {
  children: React.ReactNode;
}

const VStack = ({ children }: VStackProps) => {
  return <div className="">{children}</div>;
};

export default VStack;
