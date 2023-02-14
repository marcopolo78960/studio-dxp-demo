import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SizePickerProps {}

export const initialProps: SizePickerProps = {};

const sizes = [
  { name: '178', inStock: true },
  { name: '186', inStock: true },
  { name: '194', inStock: true },
];

export default function SizePicker() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  return (
    <div className='mt-8'>
      <div className='flex items-center justify-between'>
        <h2 className='text-sm font-medium text-gray-900'>Select Size (cm)</h2>
      </div>

      <RadioGroup
        value={selectedSize}
        onChange={setSelectedSize}
        className='mt-2'
      >
        <RadioGroup.Label className='sr-only'> Choose a size </RadioGroup.Label>
        <div className='grid grid-cols-3 gap-3 sm:grid-cols-6'>
          {sizes.map((size) => (
            <RadioGroup.Option
              key={size.name}
              value={size}
              className={({ active, checked }) =>
                twMerge(
                  size.inStock
                    ? 'cursor-pointer focus:outline-none'
                    : 'opacity-25 cursor-not-allowed',
                  active ? 'ring-2 ring-offset-2 ring-sky-200' : '',
                  checked
                    ? 'bg-sky-200 border-transparent text-white hover:bg-sky-300'
                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                  'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                )
              }
              disabled={!size.inStock}
            >
              <RadioGroup.Label>{size.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
