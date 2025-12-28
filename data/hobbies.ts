// Hobbies and Extra-Curriculars data
// To add a new hobby/activity:
// 1. Add a new object to the hobbies array below
// 2. Add corresponding details to hobbyDetails in app/hobbies/[id]/page.tsx (if you want detail pages)

export interface Hobby {
  id: string
  title: string
  techStack: string[]
  image: string
  imageAlt?: string
}

export const hobbies: Hobby[] = [
  {
    id: 'hobby-1',
    title: 'Film Photography',
    techStack: ['Photography', 'Film Development', 'Analog Photography'],
    image: '/film.png',
    imageAlt: 'Film Photography - Hobbyist film photography enthusiast'
  },
  {
    id: 'hobby-2',
    title: 'Hobby/Activity Title 2',
    techStack: ['Skill1', 'Skill2', 'Skill3'],
    image: 'https://via.placeholder.com/600x400/0066cc/ffffff?text=Hobby+2',
    imageAlt: 'Hobby 2'
  },
  {
    id: 'hobby-3',
    title: 'Hobby/Activity Title 3',
    techStack: ['Skill1', 'Skill2', 'Skill3'],
    image: 'https://via.placeholder.com/600x400/0066cc/ffffff?text=Hobby+3',
    imageAlt: 'Hobby 3'
  },
]

