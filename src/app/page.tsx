'use client';

import React, { Fragment, useEffect, useState } from 'react';

import AuthorList from '@/components/AuthorsList';
import BrandsBlock from '@/components/BrandsBlock';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedPostsBlock from '@/components/FeaturedPostsBlock';
import HomeHeader from '@/components/HomeHeader';
import HomeHistoryBlock from '@/components/HomeHistoryBlock';
import JoinBlock from '@/components/JoinBlock';
import MissionBlock from '@/components/MissionnBlock';
import TestimonialsBlock from '@/components/TestimonialsBlock';

const components = [
  <HomeHeader />,
  <FeaturedPostsBlock />,
  <MissionBlock type="main" />,
  <CategoriesSection title="Choose A Category" titleAlign="center" />,
  <HomeHistoryBlock />,
  <AuthorList />,
  <BrandsBlock />,
  <TestimonialsBlock />,
  <JoinBlock />,
];

function Home() {
  const [blocks, setBlocks] = useState(components.slice(0, 2));

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 600
    ) {
      setBlocks([...blocks, components[blocks.length]]);
    }
  };

  useEffect(() => {
    if (blocks.length !== components.length) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    return () => {};
  }, [blocks]);

  return blocks.map((block) => (
    <Fragment key={block.type.name}>{block}</Fragment>
  ));
}

export default Home;
