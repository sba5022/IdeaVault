"use client";

import {
  Cpu,
  HeartPulse,
  GraduationCap,
  Leaf,
  Briefcase,
  Lightbulb,
} from "lucide-react";

const categories = [
  {
    name: "Technology",
    icon: <Cpu size={40} />,
    description: "AI, Software, Robotics, IoT and more.",
  },
  {
    name: "Health",
    icon: <HeartPulse size={40} />,
    description: "Healthcare innovations and wellness ideas.",
  },
  {
    name: "Education",
    icon: <GraduationCap size={40} />,
    description: "Learning platforms and educational tools.",
  },
  {
    name: "Environment",
    icon: <Leaf size={40} />,
    description: "Green technologies and sustainability.",
  },
  {
    name: "Business",
    icon: <Briefcase size={40} />,
    description: "Startup and entrepreneurship ideas.",
  },
  {
    name: "Innovation",
    icon: <Lightbulb size={40} />,
    description: "Creative solutions for everyday problems.",
  },
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Explore by Category
          </h2>

          <p className="text-base-content/70 mt-3">
            Find ideas that match your interests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition"
            >
              <div className="card-body items-center text-center">

                <div className="text-primary">
                  {category.icon}
                </div>

                <h2 className="card-title">
                  {category.name}
                </h2>

                <p>{category.description}</p>

                <button className="btn btn-primary btn-sm mt-3">
                  Browse Ideas
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}