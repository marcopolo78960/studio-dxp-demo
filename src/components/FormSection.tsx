export interface FormSectionProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const initialProps: FormSectionProps = {
  title: "Section Title",
  description: "Section Description",
};

const FormSection = ({ title, description, children }: FormSectionProps) => {
  return (
    <div className="grid pt-10 gap-x-8 gap-y-8 grid-cols-3">
      <div className="">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          {title}
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
      </div>
      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-xl col-span-2">
        <div className="p-8">
          <div className="grid max-w-2xl gap-x-6 gap-y-8 grid-cols-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
