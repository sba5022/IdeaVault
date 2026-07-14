'use client';
import React from 'react';
import { authClient } from '@/lib/auth-client';
import { toast } from "react-toastify";
const AddIdeaPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(e.currentTarget);
    const idea  =Object.fromEntries(formData.entries());
    console.log(idea);
    const {data:tokenData}=await authClient.token();
    console.log(tokenData,'tokenData');
    const res =await fetch('http://localhost:9000/idea',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'authorization':`Bearer ${tokenData?.token}`
      },
      body:JSON.stringify(idea)
    })
    toast("Idea Updated Successfully!");
    const data = await res.json();
      console.log(data);
    
  }
    return (
        <div>
             <div className="max-w-7xl bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-2">
          Submit Your Idea
        </h1>

        <p className="text-center text-base-content/70 mb-8">
          Share your innovative idea with the community.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">

          {/* Idea Title */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Idea Title
              </span>
            </label>
            <input
              type="text"
              name="ideaTitle"
              className="input input-bordered w-full"
              placeholder="Enter idea title"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Short Description
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              rows={2}
              placeholder="Brief summary..."
              name="shortDescription"
            ></textarea>
          </div>

          {/* Detailed Description */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Detailed Description
              </span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              rows={6}
              placeholder="Explain your idea..."
              name="detailedDescription"
            ></textarea>
          </div>

          {/* Category & Budget */}
          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Category
                </span>
              </label>

              <select className="select select-bordered w-full" name="category">
                <option>Tech</option>
                <option>AI</option>
                <option>Health</option>
                <option>Education</option>
                <option>Business</option>
                <option>Environment</option>
                <option>Finance</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Estimated Budget
                </span>
              </label>

              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="$1000"
                name="estimatedBudget"
              />
            </div>

          </div>

          {/* Tags */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Tags
              </span>
            </label>

            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="AI, Startup, Mobile App"
              name="tags"
            />
          </div>

          {/* Image */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Image URL
              </span>
            </label>

            <input
              type="url"
              className="input input-bordered w-full"
              placeholder="https://example.com/image.jpg"
              name="imageUrl"
            />
          </div>

          {/* Target Audience */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Target Audience
              </span>
            </label>

            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Students, Developers, Farmers..."
              name="targetAudience"
            />
          </div>

          {/* Problem */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Problem Statement
              </span>
            </label>

            <textarea
              className="textarea textarea-bordered w-full"
              rows={4}
              placeholder="Describe the problem..."
              name="problemStatement"
            ></textarea>
          </div>

          {/* Solution */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Proposed Solution
              </span>
            </label>

            <textarea
              className="textarea textarea-bordered w-full"
              rows={4}
              placeholder="Describe your solution..."
              name="proposedSolution"
            ></textarea>
          </div>

          <button className="btn btn-primary w-full">
            Submit Idea
          </button>

        </form>

      </div>
    </div>
        </div>
    );
};

export default AddIdeaPage;