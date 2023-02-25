const formatTitle = (title) => {
  return title
    .toLowerCase()
    .replace(/[\{\}\(\)\[\]\!\?\.]/g, '')
    .replace(/\s+/g, '-')
}

export const main = {
  name: 'Productivity & Breaks',
  date: 'Jan 24, 2023',
  time: '2023-01-24',
  img: '/img/productivity.webp',
  title: 'How taking breaks improved my productivity',
  description:
    "As a developer, you know that taking breaks is crucial to your productivity. But how do you take breaks while still being productive? In this blog, you'll learn why taking breaks is even more important than you think and how to make the most of them. ",
  url: `./posts/${formatTitle(
    'How taking breaks improved my productivity'
  )}.html`,
}

export const secondary = [
  {
    name: 'First Post',
    date: 'Jan 23, 2023',
    img: '/img/c-programing.webp',
    time: '2023-01-23',
    title: 'Is it worth learning C as a frontend developer?',
    description:
      "Learn if it is worth learning C as a frontend developer and how to. I'll share some of my experience and what I learned along the way.",
    url: '#',
  },
  {
    name: 'Tutorial hell',
    date: 'Jan 25, 2023',
    time: '2023-01-25',
    img: '/img/tutorial-hell.webp',
    title: 'How to get out of tutorial hell? (for beginners)',
    description:
      'Have you heard of tutorial hell? If you are a beginner, you probably have. In this post, I will explain what tutorial hell is and how to get out of it.',
    url: '#',
  },
  {
    name: 'Coding is hard',
    date: 'Jan 26, 2023',
    time: '2023-01-26',
    img: '/img/about-coding.webp',
    title: 'What tech influencers don’t tell you about coding',
    description:
      'Coding is quite difficult, is not something like you can learn in a 3 month bootcamp. But how can this be possible? This article will explain why you should not believe everything you see on the internet.',
    url: '#',
  },
]
