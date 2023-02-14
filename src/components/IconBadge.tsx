import ReturnArrowIcon from './ReturnArrowIcon';
import TagIcon from './TagIcon';

interface IconBadgeProps {
  icon?: 'return' | 'tag';
  title?: string;
  subtitle?: string;
}

export const initialProps: IconBadgeProps = {
  icon: 'return',
  title: 'Free shipping',
  subtitle: 'on all orders over $100',
};

export default function IconBadge({ icon, title, subtitle }: IconBadgeProps) {
  return (
    <div
      key={title}
      className='rounded-lg border border-gray-200 bg-gray-50 p-6 text-center'
    >
      <dt>
        {icon === 'return' ? <ReturnArrowIcon /> : <TagIcon />}
        <span className='mt-4 text-sm font-medium text-gray-900'>{title}</span>
      </dt>
      <dd className='mt-1 text-sm text-gray-500'>{subtitle}</dd>
    </div>
  );
}
