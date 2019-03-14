const initialState = {
  tweets: [
    {
      id: 1,
      userId: 1,
      img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
      text: 'twitter you twit'
    },
    {
      id: 2,
      userId: 2,
      img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
      text: 'twitter you twit twit'
    },
    {
      id: 3,
      userId: 3,
      img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
      text: 'twitter you twit twit twitter twit'
    }
  ],
  user: {
    id: 1,
    username: '@twittyface',
    bio: 'I am a twit fact',
    img: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/shrug-796x398.png',
    tweets: [
      {
        id: 2,
        userId: 1,
        img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
        text: 'twitter you twit twit'
      },
      {
        id: 3,
        userId: 1,
        img: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060',
        text: 'twitter you twit twit twitter twit'
      }
    ]
  }
};

export default function reducer(state = initialState) {
  return state;
}
