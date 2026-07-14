"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
export default  function UpdateIdeaPage() {
  const { id } = useParams();
  const router = useRouter();
   
  const [idea, setIdea] = useState(null);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9000/my-idea/${id}`,
      {
        headers: {
         authorization:"logged in"
        }
      }
    )
      .then((res) => res.json())
      .then((data) => setIdea(data));
  }, [id]);

  if (!idea) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleChange = (e) => {
    setIdea({
      ...idea,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    const { data } = await authClient.getAccessToken();

const token = data?.token;
    await fetch(`http://localhost:9000/my-idea/${id}`, {
      method: "PUT",
      headers: {
       "Content-Type":"application/json",
        authorization:`Bearer ${token}`
      },
      body: JSON.stringify(idea),
    });

    setUpdateOpen(false);
    toast("Idea Updated Successfully!");
  };

const handleDelete = async () => {
  
  const res = await fetch(`http://localhost:9000/my-idea/${id}`, {
    method: "DELETE",
    //  headers:{
    //     authorization:`Bearer ${token}`
    // }
  });

  const result = await res.json();
  console.log(result);

  router.push("/my-ideas");
    if (res.ok) {
    toast.success("Idea deleted successfully!");
    router.push("/my-ideas");
  } else {
    toast.error("Failed to delete idea!");
  }
};

  return (
    <>
      <div className="min-h-screen bg-base-200 py-10">
        <div className="max-w-5xl mx-auto">

          <div className="card bg-base-100 shadow-xl">

            <figure className="relative h-[400px]">
              <Image
                src={idea.imageUrl}
                alt={idea.ideaTitle}
                fill
                className="object-cover"
              />
            </figure>

            <div className="card-body">

              <div className="flex justify-between items-center">

                <div>
                  <h1 className="text-4xl font-bold">
                    {idea.ideaTitle}
                  </h1>

                  <p className="text-gray-500 mt-2">
                    {idea.shortDescription}
                  </p>
                </div>

                <div className="badge badge-primary badge-lg">
                  {idea.category}
                </div>

              </div>

              <div className="divider"></div>

              <p className="leading-8">
                {idea.detailedDescription}
              </p>

              <div className="mt-8 flex gap-4">

                <button
                  className="btn btn-warning"
                  onClick={() => setUpdateOpen(true)}
                >
                  Update
                </button>

                <button
                  className="btn btn-error"
                  onClick={() => setDeleteOpen(true)}
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Update Modal */}

      {updateOpen && (
        <dialog className="modal modal-open">

          <div className="modal-box max-w-2xl">

            <h3 className="font-bold text-2xl mb-5">
              Update Idea
            </h3>

            <div className="space-y-4">

              <input
                type="text"
                name="ideaTitle"
                value={idea.ideaTitle}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Idea Title"
              />

              <textarea
                name="shortDescription"
                value={idea.shortDescription}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                rows={3}
                placeholder="Short Description"
              />

              <textarea
                name="detailedDescription"
                value={idea.detailedDescription}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                rows={6}
                placeholder="Detailed Description"
              />

            </div>

            <div className="modal-action">

              <button
                className="btn"
                onClick={() => setUpdateOpen(false)}
              >
                Cancel
              </button>

              <button
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                Save Changes
              </button>

            </div>

          </div>

          <form
            method="dialog"
            className="modal-backdrop"
            onClick={() => setUpdateOpen(false)}
          >
            <button>close</button>
          </form>

        </dialog>
      )}

      {/* Delete Modal */}

      {deleteOpen && (
        <dialog className="modal modal-open">

          <div className="modal-box">

            <h3 className="font-bold text-2xl">
              Delete Idea
            </h3>

            <p className="py-5">
              Are you sure you want to delete this idea?
            </p>

            <div className="modal-action">

              <button
                className="btn"
                onClick={() => setDeleteOpen(false)}
              >
                Cancel
              </button>

              <button
                className="btn btn-error"
                onClick={handleDelete}
              >
                Delete
              </button>

            </div>

          </div>

          <form
            method="dialog"
            className="modal-backdrop"
            onClick={() => setDeleteOpen(false)}
          >
            <button>close</button>
          </form>

        </dialog>
      )}
    </>
  );
}