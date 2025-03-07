import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { image } from '@/sanity/image'
import {
  getCategories,
  getFeaturedPosts,
  getPosts,
  getPostsCount,
} from '@/sanity/queries'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  RssIcon,
} from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Grønnskale Tech Blog',
  description:
    'Explore sustainable coding practices, energy-efficient software solutions, and our journey in making the digital world greener through smart programming.',
}

const postsPerPage = 5

async function FeaturedPosts() {
  let featuredPosts = await getFeaturedPosts(3)

  if (featuredPosts.length === 0) {
    return
  }

  return (
    <div className="relative mt-16 pb-14">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white"></div>
      <div className="absolute inset-0 bg-[url('/leaf-pattern.svg')] opacity-5 bg-repeat"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/20 via-transparent to-emerald-50/10"></div>
      <Container className="relative">
        <h2 className="text-2xl font-medium tracking-tight text-emerald-800">Featured Articles</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="group relative flex flex-col rounded-3xl bg-white/90 p-2 ring-1 shadow-md hover:shadow-emerald-100 transition-all duration-300 shadow-black/5 ring-emerald-100 hover:scale-[1.02]"
            >
              {post.mainImage && (
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
                  {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
                </div>
                <div className="mt-2 text-base/7 font-medium text-emerald-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-emerald-700 transition-colors">
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-emerald-600">
                  {post.excerpt}
                </div>
                {post.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {post.author.image && (
                      <img
                        alt=""
                        src={image(post.author.image).size(64, 64).url()}
                        className="aspect-square size-6 rounded-full object-cover ring-1 ring-emerald-100"
                      />
                    )}
                    <div className="text-sm/5 text-emerald-700">
                      {post.author.name}
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

async function Categories({ selected }: { selected?: string }) {
  let categories = await getCategories()

  if (categories.length === 0) {
    return
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Menu>
        <MenuButton className="flex items-center justify-between gap-2 font-medium">
          {categories.find(({ slug }) => slug === selected)?.title ||
            'All categories'}
          <ChevronUpDownIcon className="size-4 fill-slate-900" />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-40 rounded-lg bg-white p-1 ring-1 shadow-lg ring-emerald-100 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
        >
          <MenuItem>
            <Link
              href="/blog"
              data-selected={selected === undefined ? true : undefined}
              className="group grid grid-cols-[1rem_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-emerald-50 hover:bg-emerald-50/50 transition-colors"
            >
              <CheckIcon className="hidden size-4 text-emerald-600 group-data-selected:block" />
              <p className="col-start-2 text-sm/6">All categories</p>
            </Link>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.slug}>
              <Link
                href={`/blog?category=${category.slug}`}
                data-selected={category.slug === selected ? true : undefined}
                className="group grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-emerald-50 hover:bg-emerald-50/50 transition-colors"
              >
                <CheckIcon className="hidden size-4 text-emerald-600 group-data-selected:block" />
                <p className="col-start-2 text-sm/6">{category.title}</p>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
      <Button variant="outline" href="/blog/feed.xml" className="gap-1 text-emerald-700 hover:bg-emerald-50 border-emerald-200">
        <RssIcon className="size-4" />
        RSS Feed
      </Button>
    </div>
  )
}

async function Posts({ page, category }: { page: number; category?: string }) {
  let posts = await getPosts(
    (page - 1) * postsPerPage,
    page * postsPerPage,
    category,
  )

  if (posts.length === 0 && (page > 1 || category)) {
    notFound()
  }

  if (posts.length === 0) {
    return (
      <div className="mt-6 text-center py-12 bg-emerald-50/30 rounded-2xl border border-emerald-100">
        <p className="text-emerald-600">No articles found in this category yet.</p>
        <Button variant="outline" href="/blog" className="mt-4 border-emerald-200 text-emerald-700 hover:bg-emerald-50">
          View all articles
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b border-b-emerald-100 py-10 first:border-t first:border-t-emerald-200 max-sm:gap-3 sm:grid-cols-3 hover:bg-emerald-50/30 transition-colors"
        >
          <div>
            <div className="text-sm/5 max-sm:text-emerald-700 sm:font-medium">
              {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
            </div>
            {post.author && (
              <div className="mt-2.5 flex items-center gap-3">
                {post.author.image && (
                  <img
                    alt=""
                    src={image(post.author.image).width(64).height(64).url()}
                    className="aspect-square size-6 rounded-full object-cover ring-1 ring-emerald-100"
                  />
                )}
                <div className="text-sm/5 text-emerald-700">
                  {post.author.name}
                </div>
              </div>
            )}
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-sm/5 font-medium text-emerald-900">{post.title}</h2>
            <p className="mt-3 text-sm/6 text-emerald-600">{post.excerpt}</p>
            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1 text-sm/5 font-medium text-emerald-700 hover:text-emerald-500 transition-colors"
              >
                <span className="absolute inset-0" />
                Read more
                <ChevronRightIcon className="size-4 fill-emerald-400" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

async function Pagination({
  page,
  category,
}: {
  page: number
  category?: string
}) {
  function url(page: number) {
    let params = new URLSearchParams()

    if (category) params.set('category', category)
    if (page > 1) params.set('page', page.toString())

    return params.size !== 0 ? `/blog?${params.toString()}` : '/blog'
  }

  let totalPosts = await getPostsCount(category)
  let hasPreviousPage = page - 1
  let previousPageUrl = hasPreviousPage ? url(page - 1) : undefined
  let hasNextPage = page * postsPerPage < totalPosts
  let nextPageUrl = hasNextPage ? url(page + 1) : undefined
  let pageCount = Math.ceil(totalPosts / postsPerPage)

  if (pageCount < 2) {
    return
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button
        variant="outline"
        href={previousPageUrl}
        disabled={!previousPageUrl}
        className="text-emerald-700 hover:bg-emerald-50 border-emerald-200 disabled:opacity-50"
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className="flex size-10 items-center justify-center rounded-lg text-sm/6 ring-1 ring-transparent transition hover:bg-emerald-50 hover:ring-emerald-200 data-active:bg-emerald-100 data-active:text-emerald-900"
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button 
        variant="outline" 
        href={nextPageUrl} 
        disabled={!nextPageUrl}
        className="text-emerald-700 hover:bg-emerald-50 border-emerald-200 disabled:opacity-50"
      >
        Next
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  )
}

export default async function Blog({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let page =
    'page' in searchParams
      ? typeof searchParams.page === 'string' && parseInt(searchParams.page) > 1
        ? parseInt(searchParams.page)
        : notFound()
      : 1

  let category =
    typeof searchParams.category === 'string'
      ? searchParams.category
      : undefined

  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/30"></div>
      <div className="fixed inset-0 bg-[url('/leaf-pattern.svg')] opacity-5 bg-repeat"></div>
      <div className="absolute inset-0 bg-gradient-radial from-emerald-100/30 via-transparent to-transparent"></div>
      
      <div className="relative">
        <Container>
          <Navbar />
          <div className="relative">
            <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-emerald-100/30 blur-3xl"></div>
            <div className="absolute -right-32 top-20 h-64 w-64 rounded-full bg-emerald-50/40 blur-3xl"></div>
            
            <Subheading className="mt-16 text-emerald-700">GrønnSkalle Tech Blog</Subheading>
            <Heading as="h1" className="mt-2 bg-gradient-to-br from-emerald-900 to-emerald-700 bg-clip-text text-transparent">
              Sustainable Code Insights
            </Heading>
            <Lead className="mt-6 max-w-3xl text-emerald-700">
              Explore the intersection of technology and sustainability. Deep dive into green software engineering,
              eco-friendly architectures, and building energy-efficient applications that make a difference.
            </Lead>
            
            <div className="mt-8 flex items-center gap-4">
              <Button href="/blog/latest" className="bg-emerald-700 hover:bg-emerald-800 text-white">
                Latest Articles
              </Button>
            </div>
          </div>
        </Container>
        
        {page === 1 && !category && (
          <>
            <div className="absolute left-1/2 top-1/3 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/3">
              <div className="absolute inset-0 bg-gradient-conic from-emerald-50 via-emerald-100/5 to-emerald-50 opacity-20 blur-3xl"></div>
            </div>
            <FeaturedPosts />
          </>
        )}
        
        <Container className="relative mt-16 pb-24">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/10 to-transparent"></div>
          <Categories selected={category} />
          <Posts page={page} category={category} />
          <Pagination page={page} category={category} />
        </Container>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-50/30 to-transparent"></div>
          <Footer />
        </div>
      </div>
    </main>
  )
}
