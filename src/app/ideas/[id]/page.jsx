import CommentSection from '@/components/Commentsections';
import { Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const IdeaDetailsPage = async ({params}) => {
    const {id} = await params;
  
    const res = await fetch(`http://localhost:9000/idea/${id}`);
    const idea = await res.json();
   console.log(idea);
     
    return (
        <div>
              <div className="bg-base-200 min-h-screen py-10">
      <div className="max-w-6xl mx-auto">

        <div className="card bg-base-100 shadow-xl">

          <figure className="relative h-[420px] w-full">
            <Image
              src={idea.imageUrl}
              alt={idea.ideaTitle}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </figure>

          <div className="card-body space-y-6">

            <div className="flex flex-wrap justify-between gap-3">

              <div>
                <h1 className="text-4xl font-bold">
                  {idea.ideaTitle}
                </h1>

                <p className="text-base-content/70 mt-2">
                  {idea.shortDescription}
                </p>
              </div>

              <Chip color="primary" variant="flat">
                {idea.category}
              </Chip>

            </div>

            <div className="divider"></div>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="card bg-base-200">
                <div className="card-body">

                  <h2 className="card-title">
                    Estimated Budget
                  </h2>

                  <p>
                    ${idea.estimatedBudget || "Not Mentioned"}
                  </p>

                </div>
              </div>

              <div className="card bg-base-200">
                <div className="card-body">

                  <h2 className="card-title">
                    Target Audience
                  </h2>

                  <p>{idea.targetAudience}</p>

                </div>
              </div>

            </div>

            <div>

              <h2 className="text-2xl font-bold mb-3">
                Problem Statement
              </h2>

              <div className="bg-base-200 rounded-xl p-5">
                {idea.problemStatement}
              </div>

            </div>

            <div>

              <h2 className="text-2xl font-bold mb-3">
                Proposed Solution
              </h2>

              <div className="bg-base-200 rounded-xl p-5">
                {idea.proposedSolution}
              </div>

            </div>

            <div>

              <h2 className="text-2xl font-bold mb-3">
                Detailed Description
              </h2>

              <div className="bg-base-200 rounded-xl p-5 leading-8">
                {idea.detailedDescription}
              </div>

            </div>

          </div>
        </div>

        <CommentSection  />

      </div>
    </div>
        </div>
    );
};

export default IdeaDetailsPage;