import Link from "next/link";

const MyInteractionsPage = async () => {
  const email = "user@gmail.com"; // Replace with logged-in user's email

  const res = await fetch(
    `http://localhost:9000/my-interactions?email=${email}`,
    {
      cache: "no-store",
    }
  );

  const comments = await res.json();

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">My Interactions</h1>

      {comments.length === 0 ? (
        <p>You have not commented on any ideas yet.</p>
      ) : (
        <div className="space-y-5">
          {comments.map((item) => (
            <div
              key={item._id}
              className="card bg-base-100 shadow border"
            >
              <div className="card-body">
                <h2 className="card-title">{item.ideaTitle}</h2>

                <p className="italic">
                  {item.comment}
                </p>

                <p className="text-sm opacity-70">
                  {new Date(item.createdAt).toLocaleString()}
                </p>

                <div className="card-actions justify-end">
                  {/* <Link
                    href={`/idea/${item.ideaId}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Idea
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInteractionsPage;