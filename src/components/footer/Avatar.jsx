import React, { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * 头像，加载失败或没提供时退回首字母。
 *
 * 友链头像来自各家自己的站点，挂掉是常态（域名过期、防盗链、混合内容），
 * 所以 onError 必须兜住，否则就是一排裂图。
 * referrerPolicy="no-referrer" 是因为不少头像源（QQ、bilibili）按 referer 拦截。
 */
const Avatar = ({ src, name, size = 'md', ring = false, className }) => {
  const [failed, setFailed] = useState(false);

  const box = size === 'sm' ? 'h-6 w-6' : size === 'lg' ? 'h-10 w-10' : 'h-9 w-9';
  const text = size === 'sm' ? 'text-[10px]' : 'text-sm';
  const ringCls = ring ? 'ring-2 ring-amber-400/80' : '';

  if (!src || failed) {
    return (
      <div
        className={cn(
          box,
          ringCls,
          text,
          'flex shrink-0 items-center justify-center rounded-full font-bold',
          ring
            ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
            : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400',
          className,
        )}
        aria-hidden="true"
      >
        {name?.charAt(0) ?? '?'}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={cn(box, ringCls, 'shrink-0 rounded-full object-cover', className)}
    />
  );
};

export default Avatar;
