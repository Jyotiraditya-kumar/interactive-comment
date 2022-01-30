fetch("data2.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    fetch;
    doIt(data);
  });
var current;

function doIt(data) {
  current = data.currentUser;
  const c = document.getElementById("container");
  currentUser = data.currentUser;
  let card1, card2;
  console.log(c);
  data.comments.forEach((comment) => {
    card1 =
      comment.user.username === currentUser.username
        ? ownerCard(comment)
        : commentCard(comment);
    c.appendChild(card1);
    if (comment.replies) {
      comment.replies.forEach((reply) => {
        card2 =
          reply.user.username === currentUser.username
            ? replyOwnerCard(reply)
            : replyCard(reply);

        c.appendChild(card2);
      });
    }
  });
  c.appendChild(writeCard(currentUser));
}

function upVote(event) {
  // console.log(event);
  const id = event.target.getAttribute("data-id");
  var v = document.getElementById(`vote-count-${id}`);
  v.innerHTML = parseInt(v.innerHTML) + 1;
}
function downVote(event) {
  const id = event.target.getAttribute("data-id");
  var v = document.getElementById(`vote-count-${id}`);
  let x = parseInt(v.innerHTML);
  if (x > 0) {
    v.innerHTML = parseInt(v.innerHTML) - 1;
  }
}

function onReplyClick(event) {
  const id = event.target.getAttribute("data-id");
  const isReplied = event.target.getAttribute("data-isReplied");
  const prev = document.getElementById(`card-container-${id}`);
  let card;
  if (isReplied === "1") {
    card = replyWriteCard("j");
  } else {
    card = writeCard();
  }

  let elist = document.getElementsByClassName("write-card-container");
  const parent = document.getElementById("container");
  while (elist.length > 1) {
    parent.removeChild(elist[0]);
  }
  prev.parentNode.insertBefore(card, prev.nextSibling);
}
function clickDelete(event) {
  const modal = document.getElementById("modal-container");
  modal.style.display = "flex";
}

function cancelButton(event) {
  const modal = document.getElementById("modal-container");
  modal.style.display = "none";
}
function confirmButton(event) {
  const modal = document.getElementById("modal-container");
  modal.style.display = "none";
}

function clickEdit(event) {
  const Id = event.target.getAttribute("data-id");
  console.log(Id);
  const isReplied = event.target.getAttribute("data-isReplied");
  let card = ownerEditCard(current, Id);
  // card.className = "comment-text";
  console.log(`comment-text-${Id}` === "comment-text-4");
  let textNode = document.getElementById(`container-card-${Id}`);
  let text = document.getElementById(`comment-text-${Id}`).textContent;
  console.log(textNode);

  // let button = document.createElement("div");
  // button.className = "post-updated-comment";
  // button.innerHTML = "UPDATE";
  let parent = textNode.parentNode;
  // card.value = textNode.textContent;
  parent.insertBefore(card, textNode);
  // parent.appendChild(button);
  parent.removeChild(textNode);
  // textNode.style.display = "none";
}
function clickEdit2(event) {
  const Id = event.target.getAttribute("data-id");
  console.log(Id);
  const isReplied = event.target.getAttribute("data-isReplied");
  let card = document.createElement("textarea");
  card.className = "update-comment";

  console.log(`comment-text-${Id}` === "comment-text-4");
  let textNode = document.getElementById(`comment-text-${Id}`);
  let text = textNode.textContent;
  console.log(textNode);

  let button = document.createElement("div");
  button.className = "post-updated-comment";
  button.innerHTML = "UPDATE";
  button.setAttribute("data-id", Id);
  button.addEventListener("click", onUpdateClick);
  let parent = textNode.parentNode;
  card.value = text;
  let editpNode = parent.querySelector(".delete-edit-group");
  let editNode = editpNode.querySelector(`#edit-${Id}`);
  console.log(editNode);

  // parent.insertBefore(card, textNode);
  parent.appendChild(card);
  // parent.removeChild(textNode);

  parent.appendChild(button);
  // editpNode.removeChild(editNode);
  editNode.style.display = "none";
  editNode.style.display = "none";
  // textNode.style.display = "none";
}
function onUpdateClick(event) {
  const Id = event.target.getAttribute("data-id");
  // console.log(Id);
  let parentNode = document.getElementById(`container-card-${Id}`);
  let button = parentNode.querySelector(".post-updated-comment");
  let dNode = parentNode.querySelector("textarea");
  let text = dNode.value;
  parentNode.removeChild(dNode);
  parentNode.removeChild(button);
  let textNode = parentNode.querySelector(`#comment-text-${Id}`);
  console.log(text);
  // console.log(textNode);
  // console.log(parentNode);
  textNode.innerHTML = text;
  textNode.style.display = "block";
  let editpNode = parentNode.querySelector(".delete-edit-group");
  let editNode = editpNode.querySelector(`#edit-${Id}`);
  editNode.style.display = "flex";
}
