import React, { useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * 头像，加载失败或没提供时退回首字母。
 *
 * 友链头像来自各家自己的站点，挂掉是常态（域名过期、防盗链、混合内容），
 * 所以必须兜底，否则就是一排裂图。
 * referrerPolicy="no-referrer" 是因为不少头像源（QQ、bilibili）按 referer 拦截。
 *
 * 首字母始终垫在底下，图片叠在上面、加载成功才淡入。这样展开友链时是
 * 139 个首字母立刻就位、头像陆续淡进来，而不是 139 个空圈慢慢填满；
 * 连不上的域名（控制台里那批 ERR_CONNECTION_CLOSED）要等到超时才触发
 * onError，在那之前底下也已经是首字母而不是空白。
 */
const Avatar = ({ src, name, size = 'md', ring = false, className }) => {
  const [state, setState] = useState('loading'); // loading | ok | failed

  const box = size === 'sm' ? 'h-6 w-6' : size === 'lg' ? 'h-10 w-10' : 'h-9 w-9';
  const text = size === 'sm' ? 'text-[10px]' : 'text-sm';

  return (
    <div
      className={cn(
        box,
        'relative shrink-0 rounded-full',
        ring && 'ring-2 ring-amber-400/80',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          text,
          'flex h-full w-full items-center justify-center rounded-full font-bold',
          ring
            ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
            : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400',
        )}
      >
        {name?.charAt(0) ?? '?'}
      </div>

      {src && state !== 'failed' && (
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setState('ok')}
          onError={() => setState('failed')}
          className={cn(
            'absolute inset-0 h-full w-full rounded-full object-cover transition-opacity duration-200',
            state === 'ok' ? 'opacity-100' : 'opacity-0',
          )}
        />
      )}
    </div>
  );
};

export default Avatar;
