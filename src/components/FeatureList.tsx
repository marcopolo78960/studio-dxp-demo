export interface FeatureListProps {
  children: React.ReactNode;
  title?: string;
}

export const initialProps = {
  title: 'Feature List Title',
};

export default function FeatureList({ children, title }: FeatureListProps) {
  return (
    <div className=''>
      <h2 className='text-sm font-medium text-gray-900'>{title}</h2>
      <div className='prose prose-sm mt-4 text-gray-500'>
        <ul role='list'>{children}</ul>
      </div>
    </div>
  );
}
