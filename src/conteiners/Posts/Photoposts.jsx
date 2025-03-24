import React, { useState } from "react";
import styles from "./PhotoPost.module.css";

const PhotoPost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [posts, setPosts] = useState([]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handlePost = () => {
    if (image && caption) {
      setPosts([{ image, caption, likes: 0, comments: [] }, ...posts]);
      setImage(null);
      setCaption("");
    }
  };

  const handleLike = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes += 1;
    setPosts(newPosts);
  };

  const handleComment = (index, comment) => {
    const newPosts = [...posts];
    newPosts[index].comments.push(comment);
    setPosts(newPosts);
  };

  return (
    <div className={styles.container}>
      <div className={styles.uploadBox}>
        {image && <img src={image} alt="Preview" className={styles.preview} />}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.fileInput}
        />
        <textarea
          placeholder="Escreva uma legenda..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className={styles.captionInput}
        />
        <button onClick={handlePost} className={styles.postButton}>
          Postar
        </button>
      </div>

      <div className={styles.feed}>
        {posts.map((post, index) => (
          <div key={index} className={styles.post}>
            <img src={post.image} alt="Post" className={styles.postImage} />
            <p className={styles.postCaption}>{post.caption}</p>

            <div className={styles.actions}>
              <button onClick={() => handleLike(index)} className={styles.likeButton}>
                ❤️ {post.likes}
              </button>
            </div>

            <div className={styles.commentSection}>
              <input
                type="text"
                placeholder="Adicionar um comentário..."
                className={styles.commentInput}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.target.value.trim() !== "") {
                    handleComment(index, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
              <ul className={styles.commentList}>
                {post.comments.map((comment, cIndex) => (
                  <li key={cIndex} className={styles.commentItem}>
                    {comment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoPost;
