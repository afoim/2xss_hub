import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FAS_REPO } from '@/lib/fas';

/**
 * 友链 / 赞助的投稿说明。
 *
 * 两块数据在**同一个仓库**（afoim/friends-and-sponsors）里，只是 data/ 下的目录不同，
 * 所以说明共用这一份、由调用方传目录名 —— 两处各写一遍必然漂移。
 *
 * 放在分区**开头**而不是末尾：这段讲的是「怎么加进来」，是展开分区的人最可能想找的东西，
 * 排在 139 条友链后面等于没写 —— 滚到那儿的人本来就不需要它了。
 */
const SubmitHint = ({ dir, lead }) => (
  <p className="pb-4 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
    {lead}到{' '}
    <a
      href={`${FAS_REPO}/tree/main/data/${dir}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
    >
      数据仓库
      <ExternalLink size={11} />
    </a>{' '}
    的 <code className="bg-gray-100 px-1 dark:bg-gray-800">data/{dir}</code>{' '}
    下新建一个 JSON 文件，自动校验通过后就会出现在这里。友链和赞助{' '}
    <strong className="font-semibold text-gray-700 dark:text-gray-300">共用这一个仓库</strong>
    ，只是路径不同：
    <code className="bg-gray-100 px-1 dark:bg-gray-800">data/friends</code> 与{' '}
    <code className="bg-gray-100 px-1 dark:bg-gray-800">data/sponsors</code>。
  </p>
);

export default SubmitHint;
