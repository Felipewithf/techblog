const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const body = document.querySelector("#post-body").value.trim();

  if (title && body) {
    const response = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const deletePostHandler = async (event) => {
  event.preventDefault();

  const postEl = event.target;
  console.log(postEl);
  const postId = postEl.getAttribute("data-id");
  console.log(postId);

  const response = await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to delete project");
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newPostHandler);

const deleteButtons = document.querySelectorAll(".deletepost");

deleteButtons.forEach((button) => {
  button.addEventListener("click", deletePostHandler);
});
