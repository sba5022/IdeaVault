"use client";

import {
  Lightbulb,
  Upload,
  MessageCircle,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: <Lightbulb size={42} />,
    title: "Create an Idea",
    description:
      "Write your innovative idea with images, category and complete details.",
  },
  {
    icon: <Upload size={42} />,
    title: "Share It",
    description:
      "Publish your idea and make it available for the community.",
  },
  {
    icon: <MessageCircle size={42} />,
    title: "Receive Feedback",
    description:
      "Users can comment, discuss and improve your idea together.",
  },
  {
    icon: <Rocket size={42} />,
    title: "Grow Your Innovation",
    description:
      "Turn your idea into a real project through collaboration.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-base-200">

      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            How IdeaVault Works
          </h2>

          <p className="text-base-content/70 mt-3">
            Share, discover and improve innovative ideas in four simple steps.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition"
            >
              <div className="card-body items-center text-center">

                <div className="w-16 h-16 rounded-full bg-primary text-primary-content flex items-center justify-center">
                  {step.icon}
                </div>

                <h2 className="card-title mt-4">
                  {step.title}
                </h2>

                <p>{step.description}</p>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}