'use client';

import { Icon } from '@/components/ui';
import { motion } from 'framer-motion';

type Props = {
  intro: string;
  button: {
    label: string;
    onClick?: () => void;
  };
  type?: 'grid' | 'list';
};

export default function EmptySpace({ type = 'grid', intro, button }: Props) {
  return (
    <motion.div
      className="relative flex size-full flex-col items-center justify-center overflow-hidden py-10 after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/0 after:to-white"
      initial={{ opacity: 0, x: type === 'grid' ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: type === 'grid' ? -100 : 100 }}
    >
      <div className="z-50 flex size-full flex-1 flex-col items-center justify-center gap-6 text-center">
        <p className="mx-auto max-w-60 font-semibold text-gray-800">{intro}</p>

        <button
          onClick={button.onClick}
          className="flex items-center justify-center gap-2 rounded-full bg-black px-8 py-1.5 font-medium text-white"
        >
          <Icon.Plus /> {button.label}
        </button>
      </div>
      {type === 'grid' ? (
        <div className="absolute inset-x-0 inset-y-10 -z-10 grid size-full grid-cols-3 justify-between gap-6">
          {[...Array(24)].map((_, index) => (
            <div
              key={index}
              className="flex aspect-[3/4] w-full items-center justify-center gap-4 bg-gray-50"
            />
          ))}
        </div>
      ) : (
        <div className="absolute inset-x-0 inset-y-10 -z-10 grid size-full grid-cols-1 justify-between gap-6">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="size-10 rounded-full bg-gray-50" />
              <div className="h-7 w-full max-w-[150px] rounded bg-gray-50" />
              <div className="h-7 w-full max-w-[260px] rounded bg-gray-50" />
              <div className="h-7 w-full max-w-[142px] rounded bg-gray-50" />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}