import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HomeOne } from "./pages/home/HomeOne";

import { useWow } from "./lib/hooks/useWow";

import { CoursesGridView } from "./pages/course/CoursesGridView";
import { CoursesListView } from "./pages/course/CoursesListView";
// import { CoursesGridSidebar } from "./pages/course/CoursesGridSidebar";
import { CoursesDetails } from "./pages/course/CoursesDetails";
import { About } from "./lib/about/About";
import { AboutInstitute } from "./lib/about/AboutInstitute";
import { AboutWhy } from "./lib/about/AboutWhy";

import { Error } from "./pages/error/Error";
import { Event } from "./pages/event/Event";
import { EventDetails } from "./pages/event/EventDetails";
import { TeamMembers } from "./pages/team/TeamMembers";
import { TeamMemberDetails } from "./pages/team/TeamMemberDetails";

import { Faq } from "./pages/faq/Faq";
import { Blog } from "./pages/blogs/Blog";
import { BlogWithSidebar } from "./pages/blogs/BlogWithSidebar";
import { BlogDetails } from "./pages/blogs/BlogDetails";
import { Contact } from "./pages/contact/Contact";
import { Enquiry } from "./pages/enquiry/Enquiry";
import { Enroll } from "./pages/enroll/Enroll";
import { SyllabusDownload } from "./pages/syllabus/Syllabus";
import { JudicialServices } from "./pages/syllabus/JudicialServices";
// import { JudicialServices} from "./pages/syllabus/JudicialServices";

// Import Icons
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { DirectorMessage } from "./lib/about/DirectorMessage";
import SuccessStories from "./components/success/SuccessStories";
import BiharPerlims from "./pages/syllabus/BiharPerlims";
import HimanchalHaryana from "./pages/syllabus/HimanchalHaryana";
import JharkhandPrelims from "./pages/syllabus/JharkhandPerlims";

import PrivacyPolicy from "./pages/privacy/Privacy";
import { Judgement } from "./pages/course/Judgement";
import { JudgementDetails } from "./pages/course/JudgementDetails";
import OnlineClassesPage from "./pages/online/OnlineClassesPage";

// import { CouresesNine } from "./components/courses/CouresesNine";
import { Pretestseries } from "./testseries/Pretestseries";
// import { Maintestseries } from "./testseries/Maintestseries";
import CoursesSummry from "./components/courses/CoursesSummry";
import CouresesFull from "./components/courses/CouresesFull";
import { Foundation } from "./pages/course/Foundation";
import DetailSection from "./components/fun_facts/WhatsNewDetail";
import CoursesOne from "./components/courses/CoursesOne";
import CoursesPage from "./pages/course/CoursesOne";

import FoundationCourses from "./pages/course/FoundationCourse";
import CourseLayout from "./pages/course/CourseLayout";
import TestSeriesdeatil from "./pages/TestSeries/TestSeriesdeatil";
import MainSeriesdeatils from "./pages/TestSeries/MainSeriesdeatils";
import OtherCourse from "./components/courses/OtherCourse";
import axios from "axios";
import CourseNew from "./pages/course/CourseNew";
import CourseLayoutOne from "./pages/course/CourseLayoutOne";
import SEO from "./common/Seo";
import OtherCoursePage from "./pages/course/OtherCourse";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeo } from "./Redux/features/seo/seoSlice";
import { fetchRoutes } from "./Redux/features/routes/routesSlice";
// import { AboutWhy } from "./lib/about/AboutWhy";

const componentMap = {
  HomeOne,
  CoursesGridView,
  OtherCoursePage,
  CoursesListView,
  CoursesDetails,
  About,
  AboutInstitute,
  AboutWhy,
  Event,
  TeamMembers,
  TeamMemberDetails,
  Faq,
  Blog,
  BlogWithSidebar,
  BlogDetails,
  Contact,
  Enquiry,
  Enroll,
  SyllabusDownload,
  JudicialServices,
  DirectorMessage,
  SuccessStories,
  BiharPerlims,
  HimanchalHaryana,
  JharkhandPrelims,
  PrivacyPolicy,
  Judgement,
  JudgementDetails,
  OnlineClassesPage,
  Pretestseries,
  CoursesSummry,
  CouresesFull,
  Foundation,
  CoursesOne: CoursesPage,
  CourseNew,
  CourseLayoutOne,
  DetailSection,
  CoursesPage,
  FoundationCourses,
  CourseLayout,
  TestSeriesdeatil,
  MainSeriesdeatils,
  OtherCourse,
  EventDetails,
  Error,
};

function App() {
  useWow();

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { routesData, loading: routesLoading } = useSelector(
    (state) => state.routes
  );
  const { seoData, loading: seoLoading } = useSelector((state) => state.seo);

  const Loading = routesLoading || seoLoading;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    dispatch(fetchRoutes());
    dispatch(fetchSeo());
  }, [dispatch]);

  if (Loading) {
    return (
      <div style={{ textAlign: "center", padding: "100px" }}>Loading...</div>
    );
  }

  return (
    <>
      <Routes>
        {routesData.map((route, index) => {
          const Page = componentMap[route.element] || Error;

          // ✅ Find SEO by path
          const seoForPage =
            seoData.find((seo) => seo.path === route.path) || {};

          const PageWithSEO = () => (
            <>
              <SEO
                title={seoForPage.title || "Aashayein Judiciary"}
                description={seoForPage.description}
                keywords={seoForPage.keywords}
              />
              <Page />
            </>
          );

          return (
            <Route key={index} path={route.path} element={<PageWithSEO />} />
          );
        })}

        <Route path='*' element={<Error />} />
      </Routes>

      {/* ✅ WhatsApp & Inquiry icons */}
      <div className='fixed-icons'>
        <a
          href='https://wa.me/918888888888'
          target='_blank'
          rel='noopener noreferrer'
          className='whatsapp-icon'
        >
          <FaWhatsapp size={30} />
        </a>
        <a href='/contact' className='inquiry-icon'>
          <FaPhone size={30} />
        </a>
      </div>

      <style>{`
        .fixed-icons {
          position: fixed;
          bottom: 50px;
          left: 0;
          right: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          z-index: 1050;
          pointer-events: none;
        }
        .whatsapp-icon,
        .inquiry-icon {
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: white;
          background: #25D366;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        .whatsapp-icon {
          position: fixed;
          left: 20px;
          bottom: 20px;
          z-index: 999999999;
        }
        .inquiry-icon {
          position: fixed;
          right: 20px;
          bottom: 20px;
          background: #ff5722;
          z-index: 999999999;
        }
        .whatsapp-icon:hover,
        .inquiry-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}

export default App;
