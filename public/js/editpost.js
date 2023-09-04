document.getElementById("post-title").value =
  document.getElementById("title_holder").innerHTML;
document.getElementById("post-body").value =
  document.getElementById("content_holder").innerHTML;

const postId = document.querySelector("[data-id]").getAttribute("data-id");

const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const body = document.querySelector("#post-body").value.trim();

  if (title && body) {
    const response = await fetch(`/api/post/${postId}`, {
      method: "PUT",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to edit project");
    }
  }
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", newPostHandler);
