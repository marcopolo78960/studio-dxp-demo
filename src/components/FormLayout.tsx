export interface FormLayoutProps {
  children?: React.ReactNode;
}

const FormLayout = ({ children }: FormLayoutProps) => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-32 px-8">
        <div className="space-y-10 divide-y divide-gray-900/10">{children}</div>
      </div>
    </div>
  );
};

export default FormLayout;
