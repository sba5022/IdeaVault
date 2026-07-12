import Link from 'next/link';
import Image from "next/image";
import React from 'react';

const IdeaPage = async() => {
    const res = await fetch('http://localhost:9000/idea');
    const ideas = await res.json();
    console.log(ideas);
    return (
        <div>
          <div className="max-w-7xl mx-auto py-10 px-4">

      <h1 className="text-4xl font-bold text-center mb-10">
        All Ideas
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {ideas.map((idea) => (
          <div
            key={idea._id}
            className="card bg-base-100 shadow-lg border border-base-300 hover:shadow-xl transition"
          >
            <div className="card-body">
 <figure className="h-56 relative">
              <Image
                src={idea.imageUrl || "/slider.jpg"}
                alt={idea.ideaTitle}
                fill
                className="object-cover"
                  sizes="100vw"
              />
            </figure>
              <div className="flex justify-between items-center">
                <h2 className="card-title">
                  {idea.ideaTitle}
                </h2>

                <div className="badge badge-primary">
                  {idea.category}
                </div>
              </div>

              <p className="text-sm text-gray-500">
                {idea.shortDescription}
              </p>

              <p className="line-clamp-3">
                {idea.detailedDescription}
              </p>

              <div className="divider"></div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500">
                    Estimated Budget
                  </p>
                  <p className="font-bold text-success">
                    ${idea.estimatedBudget}
                  </p>
                </div>

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
        </div>
    );
};

export default IdeaPage;