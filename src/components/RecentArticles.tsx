import { getMostRecentPosts } from "@/sanity/queries"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { image } from '@/sanity/image'
import Link from "next/link"
import { Container } from "@/components/Container"
import type { MOST_RECENT_POSTS_QUERYResult } from "@/sanity/types"
import { Gradient } from "@/components/Gradient"
dayjs.extend(relativeTime)

function stripMarkdown(text: string | null | undefined): string {
  if (!text) return '';
  return text
    .replace(/#{1,6}\s/g, '') // headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // bold
    .replace(/\*(.*?)\*/g, '$1') // italic
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1') // links
    .replace(/`(.*?)`/g, '$1') // inline code
    .replace(/```([\s\S]*?)```/g, '$1') // code blocks
    .replace(/- (.*)/g, '$1') // unordered lists
    .replace(/\d+\. (.*)/g, '$1') // ordered lists
    .replace(/> (.*)/g, '$1'); // blockquotes
}


function truncateText(text: string | null | undefined, maxLength: number = 300): string {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export default async function RecentArticles() {
  let recentPosts: MOST_RECENT_POSTS_QUERYResult = await getMostRecentPosts(3);
  if (recentPosts.length === 0) {
    return
  }

  return (
    <div className="relative pt-48">
      <Container className="inset-x-2 top-32 bottom-0 absolute">
        <h2 className="text-4xl font-medium tracking-tight">Our most recent articles 👇</h2>
      </Container>
      <Gradient className="absolute inset-x-2 top-72 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative pb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <div
              key={post?.slug}
              className="group relative flex flex-col rounded-3xl bg-white/90 p-2 ring-1 shadow-md hover:shadow-emerald-100 transition-all duration-300 shadow-black/5 ring-emerald-100 hover:scale-[1.02]"
            >
              {post?.mainImage && (
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    alt={post.mainImage.alt || ''}
                    src={image(post.mainImage).size(1170, 780).url()}
                    className="aspect-3/2 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-emerald-700">
                  {dayjs(post?.publishedAt).fromNow()}
                </div>
                <div className="mt-2 text-base/7 font-medium text-emerald-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-emerald-700 transition-colors">
                    <span className="absolute inset-0" />
                    {post?.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-emerald-600">
                  {truncateText(stripMarkdown(post?.excerpt))}
                </div>
                {post?.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {post.author.image && (
                      <img
                        alt=""
                        src={image(post.author.image).size(64, 64).url()}
                        className="aspect-square size-6 rounded-full object-cover ring-1 ring-emerald-100"
                      />
                    )}
                    <div className="text-sm/5 text-emerald-700">
                      {post?.author?.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
