export interface VStackProps {
  children: React.ReactNode;
}

const VStack = ({ children }: VStackProps) => {
  return <div>{children}</div>;
};

export default VStack;
