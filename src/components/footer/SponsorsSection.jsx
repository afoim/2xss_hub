import React from 'react';
import { useSponsors } from '@/lib/fas';
import CollapsibleSection from './CollapsibleSection';
import Avatar from './Avatar';

const SponsorsSection = () => {
  const { data: sponsors = [], isLoading, isError } = useSponsors();

  return (
    <CollapsibleSection
      title="赞助支持"
      items={sponsors}
      isLoading={isLoading}
      isError={isError}
    >
      <div className="grid grid-cols-1 border-t border-gray-200 dark:border-gray-800 sm:grid-cols-2 sm:border-l lg:grid-cols-3 xl:grid-cols-4">
        {sponsors.map((sponsor, i) => (
          <div
            key={`${sponsor.name}-${sponsor.date}-${i}`}
            className="flex items-center gap-3 border-b border-gray-200 p-3 dark:border-gray-800 sm:border-r"
          >
            <Avatar src={sponsor.avatar} name={sponsor.name} size="lg" />
            {/* 名字/金额/日期竖排：金额可以很长（「6B币+800电池」），
                和名字挤一行的话四列布局下名字会被压没 */}
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-gray-900 dark:text-gray-100">
                {sponsor.name}
              </div>
              <div className="truncate text-xs font-medium text-amber-600 dark:text-amber-400">
                {sponsor.amount}
              </div>
              <div className="text-xs tabular-nums text-gray-500 dark:text-gray-400">
                {sponsor.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="pt-4 text-xs text-gray-500 dark:text-gray-400">
        感谢每一位赞助者。赞助入口在{' '}
        <a
          href="https://2x.nz/sponsors"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
        >
          2x.nz/sponsors
        </a>
        。
      </p>
    </CollapsibleSection>
  );
};

export default SponsorsSection;
