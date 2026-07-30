import { Container } from '@/components/ui/container';
import { VStack } from '@/components/ui/vstack';
import { Center } from '@/components/ui/center';
import { Separator } from '@/components/ui/separator';
import { HStack } from '@/components/ui/hstack';
import React from 'react';
import { Activity, BarChart3, BookOpen, MessageCircle, Palette, Wrench } from 'lucide-react';
import PortalCard from './PortalCard';
import ThemeToggle from './ThemeToggle';
import SiteFooter from './SiteFooter';

const PortalPage = () => {
  const portalItems = [
    {
      title: '博客',
      url: 'https://b.acofork.com',
      icon: <BookOpen size={48} />,
    },
    {
      title: '论坛',
      url: 'https://bbs.acofork.com',
      icon: <MessageCircle size={48} />,
    },
    {
      title: '工具箱',
      url: 'https://box.acofork.com',
      icon: <Wrench size={48} />,
    },
    {
      title: 'AI绘图',
      url: 'https://ai.acofork.com',
      icon: <Palette size={48} />,
    },
    {
      title: '统计分析',
      url: 'https://stat.acofork.com',
      icon: <BarChart3 size={48} />,
    },
    {
      title: '服务状态',
      url: 'https://up.acofork.com',
      icon: <Activity size={48} />,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Container className="py-16 flex-grow">
        <VStack className="gap-16">
          {/* 头部区域 */}
          <VStack className="gap-6 text-center">
            <HStack className="justify-center items-center gap-8">
              <img 
                src="https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0" 
                alt="Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white">
                二叉树树
              </h1>
              <ThemeToggle />
            </HStack>
            <Center>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl">
                Protect What You Love.
              </p>
            </Center>
          </VStack>

          {/* 分割线 */}
          <Separator className="bg-gray-200 dark:bg-gray-800" />

          {/* 卡片表格 */}
          <div className="border border-gray-200 dark:border-gray-800">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  {portalItems.slice(0, 3).map((item, index) => (
                    <td key={index} className="border-r border-gray-200 dark:border-gray-800 last:border-r-0">
                      <PortalCard
                        title={item.title}
                        url={item.url}
                        icon={item.icon}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  {portalItems.slice(3, 6).map((item, index) => (
                    <td key={index + 3} className="border-r border-gray-200 dark:border-gray-800 last:border-r-0">
                      <PortalCard
                        title={item.title}
                        url={item.url}
                        icon={item.icon}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </VStack>
      </Container>

      {/* 底部 Footer：友链 / 赞助 / 版权 */}
      <SiteFooter />
    </div>
  );
};

export default PortalPage;
