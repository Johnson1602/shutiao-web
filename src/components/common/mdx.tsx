'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'

interface MdxProps {
  code: string
}

export const Mdx = ({ code }: MdxProps) => {
  const MDXComponent = useMDXComponent(code)

  return <MDXComponent />
}
