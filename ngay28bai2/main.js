//HTTP request get,get/id,post,put/id, delete/id
async function LoadData() {
    try {
        let res = await fetch('http://localhost:3000/posts');
        let posts = await res.json()
        let body = document.getElementById("table-body");
        body.innerHTML = "";
        for (const post of posts) {
            const strikethrough = post.isDeleted ? 'text-decoration: line-through; opacity: 0.6;' : '';
            body.innerHTML += `<tr style="${strikethrough}">
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.views}</td>
                <td><input type='submit' value='delete' onclick='Delete(${post.id})'/></td>
                <td><input type='submit' value='comments' onclick='LoadComments(${post.id})'/></td>
            </tr>`
        }
        return false;
    } catch (error) {
        console.log(error);
    }

}//
async function Save() {
    let id = document.getElementById("id_txt").value;
    let title = document.getElementById("title_txt").value;
    let views = document.getElementById("view_txt").value;
    
    if (id && id.trim() !== "") {
        // Edit existing post
        let getItem = await fetch("http://localhost:3000/posts/" + id);
        if (getItem.ok) {
            let res = await fetch('http://localhost:3000/posts/' + id,
                {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            title: title,
                            views: views
                        }
                    )
                })
            if (res.ok) {
                console.log("edit du lieu thanh cong");
            }
        }
    } else {
        // Create new post with auto-increment ID
        try {
            let res = await fetch('http://localhost:3000/posts');
            let posts = await res.json();
            let maxId = 0;
            for (const post of posts) {
                let postId = parseInt(post.id);
                if (postId > maxId) maxId = postId;
            }
            let newId = (maxId + 1).toString();
            
            let createRes = await fetch('http://localhost:3000/posts',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            id: newId,
                            title: title,
                            views: views,
                            isDeleted: false
                        }
                    )
                })
            if (createRes.ok) {
                console.log("them du lieu thanh cong");
            }
        } catch (error) {
            console.log(error);
        }
    }
    LoadData();

}
async function Delete(id) {
    let res = await fetch('http://localhost:3000/posts/' + id, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            isDeleted: true
        })
    });
    if (res.ok) {
        console.log("xoa mem thanh cong");
    }
    LoadData();
}

// Comments CRUD Functions
async function LoadComments(postId) {
    try {
        let res = await fetch('http://localhost:3000/comments?postId=' + postId);
        let comments = await res.json();
        let commentBody = document.getElementById("comments-body");
        if (!commentBody) {
            // Create comments table if not exists
            let commentDiv = document.getElementById("comments-container");
            if (!commentDiv) {
                commentDiv = document.createElement("div");
                commentDiv.id = "comments-container";
                document.body.appendChild(commentDiv);
            }
            commentDiv.innerHTML = `
                <h3>Comments for Post ${postId}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Text</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="comments-body"></tbody>
                </table>
                <div>
                    <input type="text" id="comment_text" placeholder="Comment text"/>
                    <input type="submit" value="Add Comment" onclick="SaveComment(${postId})"/>
                    <input type="submit" value="Close" onclick="CloseComments()"/>
                </div>
            `;
            commentBody = document.getElementById("comments-body");
        }
        commentBody.innerHTML = "";
        for (const comment of comments) {
            const strikethrough = comment.isDeleted ? 'text-decoration: line-through; opacity: 0.6;' : '';
            commentBody.innerHTML += `<tr style="${strikethrough}">
                <td>${comment.id}</td>
                <td>${comment.text}</td>
                <td>
                    <input type='submit' value='edit' onclick='EditComment(${comment.id}, "${comment.text.replace(/"/g, '\\"')}", ${postId})' />
                    <input type='submit' value='delete' onclick='DeleteComment(${comment.id})' />
                </td>
            </tr>`;
        }
    } catch (error) {
        console.log(error);
    }
}

async function SaveComment(postId) {
    let text = document.getElementById("comment_text").value;
    if (!text) {
        alert("Please enter comment text");
        return;
    }
    
    try {
        let res = await fetch('http://localhost:3000/comments');
        let comments = await res.json();
        let maxId = 0;
        for (const comment of comments) {
            let commentId = parseInt(comment.id);
            if (commentId > maxId) maxId = commentId;
        }
        let newId = (maxId + 1).toString();
        
        let createRes = await fetch('http://localhost:3000/comments',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: newId,
                    text: text,
                    postId: postId.toString(),
                    isDeleted: false
                })
            });
        if (createRes.ok) {
            console.log("them comment thanh cong");
            document.getElementById("comment_text").value = "";
            LoadComments(postId);
        }
    } catch (error) {
        console.log(error);
    }
}

async function EditComment(commentId, oldText, postId) {
    let newText = prompt("Edit comment:", oldText);
    if (newText === null) return;
    
    try {
        let res = await fetch('http://localhost:3000/comments/' + commentId,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: newText
                })
            });
        if (res.ok) {
            console.log("cap nhat comment thanh cong");
            LoadComments(postId);
        }
    } catch (error) {
        console.log(error);
    }
}

async function DeleteComment(commentId) {
    try {
        let res = await fetch('http://localhost:3000/comments/' + commentId,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    isDeleted: true
                })
            });
        if (res.ok) {
            console.log("xoa mem comment thanh cong");
            // Find which post this comment belongs to
            let allComments = await fetch('http://localhost:3000/comments');
            let comments = await allComments.json();
            let postId = null;
            for (const comment of comments) {
                if (comment.id == commentId) {
                    postId = comment.postId;
                    break;
                }
            }
            if (postId) LoadComments(postId);
        }
    } catch (error) {
        console.log(error);
    }
}

function CloseComments() {
    let commentDiv = document.getElementById("comments-container");
    if (commentDiv) {
        commentDiv.innerHTML = "";
    }
}

LoadData();
