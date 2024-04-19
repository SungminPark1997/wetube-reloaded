const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const deleteIcon = document.querySelectorAll("#deleteIcon");
const videoId = videoContainer.dataset.id;
const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  const span2 = document.createElement("span");
  span2.innerText = "❌";
  span2.id = "deleteIcon";
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);
  videoComments.prepend(newComment);
  span2.addEventListener("click", handleDelete);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");

  const text = textarea.value;

  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  textarea.value = "";
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}

const handleDelete = async (event) => {
  const deleteTarget = event.target.closest(".video__comment");
  const deleteId = deleteTarget.dataset.id;

  const response = await fetch(`/api/videos/${videoId}/${deleteId}`, {
    method: "DELETE",
  });
  deleteTarget.remove();
};
if (deleteIcon) {
  deleteIcon.forEach((icon) => {
    icon.addEventListener("click", handleDelete);
  });
}
