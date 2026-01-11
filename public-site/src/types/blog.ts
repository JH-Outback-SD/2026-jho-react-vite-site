export interface BlogPostMeta {
  title: string
  slug: string
  excerpt: string
  featuredImage: string
  category: string
  publishDate: string
  author: string
  tags: string[]
  subtitle?: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

export type SortOption = 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc'

export const BLOG_CATEGORIES = [
  'All',
  'Testimony',
  'Bible Study',
  'Faith',
  'Groups',
  'Events',
  'Community',
] as const

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]
