import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const careerData = [
  { year: "2022 - Present", title: "Technical Director", company: "Speakers for Schools", color: "#4CAF50" },
  { year: "2020 - 2022", title: "Development Manager", company: "CIPFA", color: "#2196F3" },
  { year: "2019 - 2020", title: "Head of Development", company: "Collabco", color: "#FF9800" },
  { year: "2017 - 2019", title: "Platform Lead", company: "StaffCircle", color: "#673AB7" },
  { year: "2015 - 2017", title: "Team Lead", company: "The Lead Agency", color: "#607D8B" },
  { year: "2010 - 2015", title: "Software Developer", company: "Various Roles", color: "#795548" },
];

const CareerTimeline = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Career Progression Timeline</h3>
      <VerticalTimeline>
        {careerData.map((job, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: job.color, color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid ${job.color}` }}
            date={job.year}
            iconStyle={{ background: job.color, color: "#fff" }}
          >
            <h4>{job.title}</h4>
            <h5>{job.company}</h5>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default CareerTimeline;
