import type { MetaFunction } from '@remix-run/cloudflare'
import { Banner } from '~/components/Banner'

export const meta: MetaFunction = () => {
  return [
    { title: 'God Hitech' },
    {
      name: 'God Hitech',
      content: 'God Hitech vươn tầm thế giới',
    },
  ]
}

export default function Index() {
  return (
    <div>
      <Banner />
    </div>
  )
}
