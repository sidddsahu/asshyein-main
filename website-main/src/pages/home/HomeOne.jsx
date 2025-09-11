import React from "react";
import { Layout } from "../../layouts/Layout";

import { WhyChooseOne } from "../../components/why_choose/WhyChooseOne";
import { FunfactTwo } from "../../components/fun_facts/FunfactTwo";
import { TeamOne } from "../../components/teams/TeamOne";
import { CallbackPopup } from "../../components/popup/CallbackPopup";
import { TestimonialTwo } from "../../components/testimonials/TestimonialTwo";
import { FaqOne } from "../../components/faqs/FaqOne";
import { Slider } from "../../components/videos/Slider";
import { EventOne } from "../../components/events/EventOne";
import { BlogOne } from "../../components/blogs/BlogOne";
import { CoursesOne } from "../../components/courses/CoursesOne";
import { SuccessStory } from "../../components/success/Stories";
import MarqueeStrike from "../../components/popup/MarqueeStrike";
import AdPopup from "../../components/popup/AdPopup";
import WhatsNew from "../../components/fun_facts/WhatsNew";
import { HeroThree } from "../../components/hero/HeroThree";
import PriceTag from "../../components/hero/PriceTag";
import { CoursesAllGrid } from "../../components/courses/CoursesAllGrid";

export const HomeOne = () => {
  return (
    <Layout header={9} footer={1}>
      <HeroThree />
      <MarqueeStrike />
      <CoursesOne />
      <WhatsNew />
      <SuccessStory />
      <FunfactTwo />
      <Slider />
      <EventOne />
      <TeamOne />
      <WhyChooseOne />
      <BlogOne />
      <FaqOne />
      <CallbackPopup />
    </Layout>
  );
};
