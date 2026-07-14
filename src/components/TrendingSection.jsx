"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TrendingSection = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchTrendingIdeas = async () => {
      const res = await fetch("http://localhost:9000/idea");
      const data = await res.json();

      // Show only first 6 ideas
      setIdeas(data.slice(0, 6));
    };

    fetchTrendingIdeas();
  }, []);

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Trending Ideas</h2>
          <p className="text-base-content/70 mt-2">
            Discover the latest innovative ideas shared by our community.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <div
              key={idea._id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition"
            >
              <figure className="relative h-56">
                <Image
                  src={idea.imageUrl || "/slider.jpg"}
                  alt={idea.ideaTitle}
                  fill
                  className="object-cover"
                />
              </figure>

              <div className="card-body">
                <div className="badge badge-primary">
                  {idea.category}
                </div>

                <h2 className="card-title">
                  {idea.ideaTitle}
                </h2>

                <p className="line-clamp-2">
                  {idea.shortDescription}
                </p>

                <div className="card-actions justify-end mt-4">
                  <Link
                    href={`/ideas/${idea._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;