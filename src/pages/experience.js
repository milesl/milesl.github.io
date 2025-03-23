import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import CareerTimeline from "../components/CareerTimeline";

const experienceData = [
  { name: "Non-Profits", years: 5, color: "#4CAF50" },
  { name: "SMEs", years: 10, color: "#2196F3" },
  { name: "Software Houses", years: 10, color: "#FF9800" },
];

const rolesData = [
  { name: "Leadership", years: 8 },
  { name: "Hands-on Development", years: 15 },
];

const skillsData = [
  { skill: "Cloud & DevOps", proficiency: 9 },
  { skill: "Software Development", proficiency: 10 },
  { skill: "Security & Compliance", proficiency: 7 },
  { skill: "Agile & Leadership", proficiency: 8 },
  { skill: "Data & Analytics", proficiency: 6 },
];

const cloudExperience = [
  { name: "Azure PaaS", years: 10 },
  { name: "Containers", years: 3 },
  { name: "Microservices", years: 8 },
  { name: "DevOps", years: 10 },
  { name: "Security & Compliance", years: 5 },
];

const ExperienceDashboard = () => {
  return (
    <Layout>
      <div>
        <h1>Experience Dashboard</h1>
        <p>Visualizing how my time has been spent across different sectors.</p>

        {/* Experience Breakdown Pie Chart */}
        <h3>Career Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={experienceData} dataKey="years" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
              {experienceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        {/* Responsibilities Bar Chart */}
        <h3>Responsibilities</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={rolesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="years" fill="#673AB7" />
          </BarChart>
        </ResponsiveContainer>

        {/* Technical Skills Radar Chart */}
        <h3>Technical Skills Breakdown</h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} />
            <Radar name="Skills" dataKey="proficiency" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.6} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>

        {/* Cloud & DevOps Experience Bar Chart */}
        <h3>Cloud & DevOps Experience</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={cloudExperience}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="years" fill="#FF9800" />
          </BarChart>
        </ResponsiveContainer>

        {/* Roles Timeline */}
        <h3>Roles</h3>
        <ResponsiveContainer width="100%">
          <CareerTimeline />
        </ResponsiveContainer>
      </div>
    </Layout>
  );
};

export default ExperienceDashboard;
