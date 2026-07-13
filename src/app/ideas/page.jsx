"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const IdeaPage = () => {

  const [ideas, setIdeas] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  const fetchIdeas = async () => {

    const params = new URLSearchParams();

    if (search) {
      params.append("search", search);
    }

    if (category) {
      params.append("category", category);
    }

    if (startDate) {
      params.append("startDate", startDate);
    }

    if (endDate) {
      params.append("endDate", endDate);
    }


    const res = await fetch(
      `http://localhost:9000/idea?${params.toString()}`
    );

    const data = await res.json();

    setIdeas(data);

  };


  useEffect(() => {
    fetchIdeas();
  }, []);



  return (
    <div>

      <div className="max-w-7xl mx-auto py-10 px-4">


        <h1 className="text-4xl font-bold text-center mb-10">
          All Ideas
        </h1>



        {/* Search Filter */}

        <div className="bg-base-200 p-5 rounded-xl mb-10 grid md:grid-cols-4 gap-4">


          <input
            type="text"
            placeholder="Search by title..."
            className="input input-bordered"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />



          <select
            className="select select-bordered"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          >

            <option value="">
              All Categories
            </option>

            <option value="Tech">
              Tech
            </option>

            <option value="Business">
              Business
            </option>

            <option value="Health">
              Health
            </option>

          </select>



          <input
            type="date"
            className="input input-bordered"
            value={startDate}
            onChange={(e)=>setStartDate(e.target.value)}
          />



          



          <button
            className="btn btn-primary md:col-span-4"
            onClick={fetchIdeas}
          >
            Search
          </button>


        </div>





        {/* Idea Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


          {
            ideas.map((idea)=>(

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

            ))
          }


        </div>


      </div>


    </div>
  );
};

export default IdeaPage;