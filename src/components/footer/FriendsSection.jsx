import React from 'react';
import { Crown, ExternalLink } from 'lucide-react';
import { useFriends, FAS_REPO } from '@/lib/fas';
import CollapsibleSection from './CollapsibleSection';
import Avatar from './Avatar';

const FriendsSection = () => {
  const { data: friends = [], isLoading, isError } = useFriends();

  return (
    <CollapsibleSection
      title="友情链接"
      items={friends}
      isLoading={isLoading}
      isError={isError}
    >
      {/* 连体网格线：容器出上/左边框，每格出下/右边框，
          竖线只在多列断点之后才有意义，单列时全靠横线分隔 */}
      <div className="grid grid-cols-1 border-t border-gray-200 dark:border-gray-800 sm:grid-cols-2 sm:border-l lg:grid-cols-3">
        {friends.map((friend, i) => (
          <a
            key={`${friend.url}-${i}`}
            href={friend.url}
            target="_blank"
            rel="noopener noreferrer"
            title={friend.description || friend.name}
            className={`flex items-start gap-3 border-b border-gray-200 p-3 transition-colors dark:border-gray-800 sm:border-r ${
              friend.vip
                ? 'bg-amber-400/5 hover:bg-amber-400/10'
                : 'hover:bg-gray-50 dark:hover:bg-gray-900'
            }`}
          >
            <div className="relative shrink-0">
              <Avatar src={friend.avatar} name={friend.name} size="lg" ring={friend.vip} />
              {friend.vip && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-white">
                  <Crown size={9} />
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="truncate text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {friend.name}
                </span>
                {friend.vip && (
                  <span className="shrink-0 bg-amber-400/20 px-1 py-px text-[10px] font-bold uppercase text-amber-700 dark:text-amber-400">
                    VIP
                  </span>
                )}
              </div>
              <div className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                {friend.description || '暂无描述'}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* 本站不跑自动 PR，加友链一律回数据仓库提交文件 */}
      <p className="pt-4 text-xs text-gray-500 dark:text-gray-400">
        想交换友链？到{' '}
        <a
          href={`${FAS_REPO}/tree/main/data/friends`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
        >
          数据仓库
          <ExternalLink size={11} />
        </a>{' '}
        的 <code className="bg-gray-100 px-1 dark:bg-gray-800">data/friends</code> 下新建一个 JSON 文件，
        自动校验通过后就会出现在这里。
      </p>
    </CollapsibleSection>
  );
};

export default FriendsSection;
