"use client";

import { Button, TextArea  } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";
const initialComments = [
 
];

export default function CommentSection({ideaId, ideaTitle }) {
  const [comments, setComments] = useState(initialComments);
  const [comment, setComment] = useState();
  const [editingId, setEditingId] = useState(null);

  // const handleSubmit = () => {
  //   if (!comment.trim()) return;

  //   if (editingId) {
  //     setComments(
  //       comments.map((item) =>
  //         item.id === editingId ? { ...item, text: comment } : item
  //       )
  //     );

  //     setEditingId(null);
  //   } else {
  //     setComments([
  //       {
  //         id: Date.now(),
  //         user: "Current User",
  //         text: comment,
  //         createdAt: new Date().toLocaleString(),
  //       },
  //       ...comments,
  //     ]);
  //   }

  //   setComment("");
  // };
const handleSubmit = async () => {
  if (!comment.trim()) return;
 toast('Comment Added Successfully!');
  const newComment = {
    ideaId,          // pass this from parent
    ideaTitle,       // pass this from parent
    comment,
    userEmail: "user@gmail.com", // logged-in user's email
    createdAt: new Date(),
  };

  await fetch("http://localhost:9000/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  });

  setComments([
    {
      id: Date.now(),
      user: "Current User",
      text: comment,
      createdAt: new Date().toLocaleString(),
    },
    ...comments,
  ]);

  setComment("");
};
  const handleDelete = (id) => {
    setComments(comments.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setComment(item.text);
  };

  return (
    <div className="card bg-base-100 shadow-xl mt-8">

      <div className="card-body">

        <h2 className="card-title text-3xl">
          Comments
        </h2>

        <textarea
  className="textarea textarea-bordered w-full"
  rows={4}
  value={comment}
  onChange={(e) => setComment(e.target.value)}
  placeholder="Write your comment..."
></textarea>

        <button
          className="btn btn-success"
          onClick={handleSubmit}
        >
          {editingId ? "Update Comment" : "Add Comment"}
        </button>

        <div className="divider"></div>

        <div className="space-y-5">

          {comments.map((item) => (
            <div
              key={item.id}
              className="bg-base-200 rounded-xl p-5"
            >
              <div className="flex justify-between">

                <div>

                  <h3 className="font-bold">
                    {item.user}
                  </h3>

                  <p className="text-xs opacity-60">
                    {item.createdAt}
                  </p>

                </div>

                <div className="flex gap-2">

                  <button
                    className="btn btn-sm btn-info"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>

                </div>

              </div>

              <p className="mt-4">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}