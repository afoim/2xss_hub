import React from 'react';
import { Container } from '@/components/ui/container';
import FriendsSection from './footer/FriendsSection';
import SponsorsSection from './footer/SponsorsSection';

/**
 * 页脚：友链 + 赞助 + 版权。
 *
 * 两块数据都是纯客户端拉取（raw-fas.2x.nz 的静态 JSON），
 * 挂了也只是这两行收着不展开，不影响门户页本身。
 */
const SiteFooter = () => (
  <footer className="mt-auto border-t border-gray-200 dark:border-gray-800">
    <Container className="py-8">
      <FriendsSection />
      <SponsorsSection />

      <p className="pt-8 text-center text-lg text-gray-600 dark:text-gray-400">
        © 2026 二叉树树
      </p>
    </Container>
  </footer>
);

export default SiteFooter;
