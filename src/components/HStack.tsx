export interface HStackProps {
  children: React.ReactNode;
}

const HStack = ({ children }: HStackProps) => {
  return <div className='flex items-center py-4 min-h-[60px]'>{children}</div>;
};

export default HStack;
