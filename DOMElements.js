function commentCard(comment) {
  let x = comment.replyingTo === undefined ? 0 : 1;
  let html = `<div class="card" id=container-card-${comment.id}>
      <div class="vote">
        <div class="plus-icon" data-id=${comment.id} onclick="upVote(event)"></div>
        <div class="vote-count" id="vote-count-${comment.id}">0</div>
        <div class="minus-icon" data-id=${comment.id} onclick="downVote(event)"></div>
      </div>
            <img src=${comment.user.image.png} class="user-icon"></img>
            <div class="username">${comment.user.username}</div>
            <div class="date">${comment.createdAt}</div>
          
          <div class="reply">
            <div class="reply-icon"></div>
            <div class="reply-text" data-id=${comment.id} data-isReplied=${x} onclick="onReplyClick(event)">Reply</div>
          </div>
        
        <p class="comment-text" id="comment-text-${comment.id}">
        ${comment.content}</p>
      </div>
    </div>`;
  const card = document.createElement("div");
  card.className = "card-container";
  card.id = `card-container-${comment.id}`;
  card.innerHTML = html;
  return card;
}
function hr() {
  const card = document.createElement("div");
  card.className = "hr";
  return card;
}
function spanEl(text) {
  const card = document.createElement("span");
  card.className = "reply-to";
  card.innerHTML = text;
  return card;
}
function replyCard(comment) {
  const card = commentCard(comment);
  card.prepend(hr());
  console.log(card);
  card.querySelector("p").prepend(spanEl(`@${comment.replyingTo}`));

  return card;
}
function ownerCard(comment) {
  let x = comment.replyingTo === undefined ? 0 : 1;

  let html = `
      <div class="card" id=container-card-${comment.id}>
        <div class="vote">
          <div class="plus-icon" data-id=${comment.id} onclick="upVote(event)"></div>
          <div class="vote-count" id="vote-count-${comment.id}">0</div>
          <div class="minus-icon" data-id=${comment.id} onclick="downVote(event)"></div>
        </div>
              <img src=${comment.user.image.png} class="user-icon"></img>
              <div class="username you">${comment.user.username}</div>
              <div class="date">${comment.createdAt}</div>
              <div class="delete-edit-group">
              <div class="delete">
                  <div class="delete-icon"></div>
                  <div class="delete-text"  onclick="clickDelete()">Delete</div>
              </div>
              <div class="edit" id="edit-${comment.id}">
                  <div class="edit-icon"></div>
                  <div class="edit-text" data-id=${comment.id} data-isReplied=${x} onclick="clickEdit2(event)">Edit</div>
              </div>
              </div>
          <p class="comment-text" id="comment-text-${comment.id}">
          ${comment.content}</p>
        </div>`;
  const card = document.createElement("div");
  card.className = "card-container";
  card.id = `card-container-${comment.id}`;
  card.innerHTML = html;
  return card;
}
function replyOwnerCard(comment) {
  const card = ownerCard(comment);
  card.prepend(hr());
  console.log(card);
  card.querySelector("p").prepend(spanEl(`@${comment.replyingTo}`));

  return card;
}
function writeCard(user) {
  let html = `
      <div class="write-card">
        <div class="user-icon-write"></div>
        <textarea
          class="write-comment"
          placeholder="Add a comment.."
        ></textarea>
        <div class="post-comment">Send</div>
      </div>
    </div>`;
  const card = document.createElement("div");
  card.className = "write-card-container";
  card.id = "write-card-container";
  card.innerHTML = html;
  return card;
}
function replyWriteCard(user) {
  const card = writeCard(user);
  card.prepend(hr());
  console.log(card);
  card.querySelector("textarea").value = "@jrt";

  return card;
}
