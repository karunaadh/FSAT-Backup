export const PostType = {
  CULTURE_HISTORY: "CULTURE_HISTORY",
  UNIVERSITY_LIFE: "UNIVERSITY_LIFE",
  RECIPES: "RECIPES",
  ART_WRITING: "ART_WRITING",
  MUSIC_DANCE: "MUSIC_DANCE",
};

/* 
POST SCHEMA
{
  postTitle: string,
  author: string,
  publishDate: string,
  postType: PostType,
  featured: boolean,
  link: "/blog/{PostType}/{postTitle.toLowerCase().replace(" ", "-")}",
  component: React.Component, // Will update after pages are built (to use for routing in App.js) 
}
*/

export const PostData = [
  {
    postTitle: "Pandesal Recipe",
    author: "Angelica Vidal",
    publishDate: "September 20, 2020",
    postType: PostType.RECIPES,
    featured: true,
    link: "/blog/recipes/pandesal-recipe",
    component: "", 
  },
  {
    postTitle: "Polvoron Recipe",
    author: "FSAT",
    publishDate: "September 20, 2020",
    postType: PostType.RECIPES,
    featured: true,
    link: "/blog/recipes/polvoron-recipe",
    component: ""
  },
];
