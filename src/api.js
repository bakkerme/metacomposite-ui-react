export const getAllPosts = () => {
  return new Promise(function(resolve, reject) {
    fetch("http://localhost:3030/feeds/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.errors.length > 0) {
          reject(data.errors);
        }

        resolve(data.posts);
      })
      .catch(resolve)
  });
}

export const getRedditGalleryImages = (id) => {
  return new Promise(function(resolve, reject) {
    fetch(`http://localhost:3030${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch(resolve)
  });
}

export const getPostByIDFromPostList = (posts, id) => {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].ID === id) {
      return posts[i];
    }
  }
};