const newCommentHandler = async (event) => {
  event.preventDefault();

  const form = event.target;

  const postId = form.querySelector("[data-id]").getAttribute("data-id");
  const body = form.querySelector("#comment-body").value.trim();

  if (body) {
    const response = await fetch(`/api/post/${postId}`, {
      method: "POST",
      body: JSON.stringify({ body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);
