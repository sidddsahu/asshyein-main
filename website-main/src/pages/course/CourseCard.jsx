import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import TargetJudiciaryCourse from "./TargetJudiciary";
import FoundationCourses from "./FoundationCourse";
import PrelimsTestSeries from "./PrelimsTestSeries";
import MainsTestSeries from "./MainsTestSeries";

const CourseCard = ({ title, image, desc }) => {
      const [activeTab, setActiveTab] = useState('foundation');

     const renderContent = () => {
    switch(activeTab) {
      case 'target':
        return <TargetJudiciaryCourse />;
      case 'foundation':
      default:
        return <FoundationCourses />;

         case 'prelims':
        return <PrelimsTestSeries />;
         case 'mains':
        return <MainsTestSeries />;
    }
  };


  return (

               <div className="row">
                     {renderContent()}
                 </div>


  );
};

export default CourseCard;
