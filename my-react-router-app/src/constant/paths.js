const PATHS = {
  ROOt: {
    INDEX: "/",
    ABOUT: "/about",
    POSTS: "/posts",
    POST_DETAIL: "/posts/postId",
    // 경로 파라미터를 처리하는 매서드
    getPostEdtail: (postId) => `/posts/${postId}`,
    PROFILE: "/profile",
  },
  Auth: {
    INDEX: "/auth",
    SIGNUP: "/signup",
    LOGIN: "/login",
  },
};
export default PATHS;
