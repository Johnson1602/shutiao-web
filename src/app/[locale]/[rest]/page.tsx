import { allPages } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/common/mdx'

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ locale: string; rest: string }>
}) {
  const { rest } = await params

  const page = allPages.find((page) => page.slug === rest)

  if (!page) {
    notFound()
  }

  return (
    <article className='prose dark:prose-invert mx-auto px-4 py-8'>
      <Mdx code={page?.body.code} />
    </article>
  )
}
