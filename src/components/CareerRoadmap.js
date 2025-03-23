import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const milestones = [
  { title: "Junior Developer", year: "2010" },
  { title: "Mid-Level Developer", year: "2012" },
  { title: "Senior Developer", year: "2015" },
  { title: "Team Lead", year: "2017" },
  { title: "Platform Lead", year: "2019" },
  { title: "Development Manager", year: "2020" },
  { title: "Technical Director", year: "2022" },
];

const CareerRoadmap = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h3 style={{ textAlign: "center" }}>Career Milestone Roadmap</h3>
      <ProgressBar percent={100} filledBackground="linear-gradient(to right, #4CAF50, #2196F3)">
        {milestones.map((milestone, index) => (
          <Step key={index}>
            {({ accomplished }) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: accomplished ? "#4CAF50" : "#aaa",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: accomplished ? "#4CAF50" : "#aaa",
                    borderRadius: "50%",
                    marginBottom: "10px",
                  }}
                />
                <strong>{milestone.title}</strong>
                <span>{milestone.year}</span>
              </div>
            )}
          </Step>
        ))}
      </ProgressBar>
    </div>
  );
};

export default CareerRoadmap;
