export interface SectionProps {
  background?: boolean;
  children?: React.ReactNode;
}

const Section = ({ background, children }: SectionProps) => {
  return (
    <div className={background ? "bg-gray-50" : ""}>
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto max-w-7xl py-6 sm:px-2 sm:py-12 lg:px-4">
        {children}
      </div>
    </div>
  );
};

export default Section;
