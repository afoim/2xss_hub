import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Avatar from './Avatar';

/**
 * 页脚里的可折叠分区。
 *
 * 用原生 <details> 而不是 useState 浮层：开合交给浏览器管，
 * 键盘、无障碍、浏览器内查找（Ctrl+F 会自动展开）都是白拿的。
 *
 * 门户页的本体是那六张入口卡片，130 条友链默认铺开会把页面拉长十几屏，
 * 所以默认收起；标题行右侧叠一排头像做预览，收着也知道里面有什么。
 */
const CollapsibleSection = ({
  title,
  items = [],
  isLoading,
  isError,
  avatarOf = (item) => item.avatar,
  nameOf = (item) => item.name,
  children,
}) => {
  const teaser = items.slice(0, 5);

  return (
    <details className="group border-b border-gray-200 dark:border-gray-800">
      <summary className="flex cursor-pointer select-none list-none items-center gap-3 py-4 [&::-webkit-details-marker]:hidden">
        <ChevronRight
          size={16}
          className="shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-90 dark:text-gray-500"
        />
        <span className="font-bold text-gray-900 dark:text-gray-100">{title}</span>

        <span className="ml-auto flex items-center gap-3">
          {/* 收起时的预览：叠头像，展开后就没必要再占地方了 */}
          {teaser.length > 0 && (
            <span className="flex -space-x-2 group-open:hidden">
              {teaser.map((item, i) => (
                <Avatar
                  key={i}
                  src={avatarOf(item)}
                  name={nameOf(item)}
                  size="sm"
                  className="ring-2 ring-background"
                />
              ))}
            </span>
          )}
          <span className="text-sm tabular-nums text-gray-500 dark:text-gray-400">
            {isLoading ? '…' : isError ? '加载失败' : items.length}
          </span>
        </span>
      </summary>

      <div className={cn('pb-6', isError && 'hidden')}>{children}</div>
    </details>
  );
};

export default CollapsibleSection;
