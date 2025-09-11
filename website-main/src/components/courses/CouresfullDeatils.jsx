import React from 'react';
import { useParams } from 'react-router-dom';

function CourseFullDetails() {
  const coursesData = [
    {
      id: 1,
      title: "Judicial Services Foundation",
      price: "₹4,999",
      duration: "6 months",
      faculty: "Mr. Sharma",
      type: "Online",
      status: "Published",
      features: ["Live Classes", "PDF Notes", "Mock Tests"]
    },
    {
      id: 2,
      title: "Prelims Test Series",
      price: "₹2,999",
      duration: "3 months",
      faculty: "Ms. Verma",
      type: "Offline",
      status: "Published",
      features: ["Chapter-wise Tests", "Full-Length Tests", "Solutions"]
    },
    // ... aur courses add kar sakte ho
  ];

  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) return <div className="container py-4">Course not found</div>;

  return (
    <div className="container py-4">
      <h2>{course.title}</h2>
      <p><strong>Price:</strong> {course.price}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Faculty:</strong> {course.faculty || 'Not specified'}</p>
      <p><strong>Type:</strong> {course.type}</p>
      <p><strong>Status:</strong> {course.status}</p>

      <h5>Features:</h5>
      <ul>
        {course.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button className="btn btn-secondary mt-3" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
}

export default CourseFullDetails;
