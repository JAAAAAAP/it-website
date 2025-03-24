'use client'
import Link from 'next/link'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {

  return (
    <header className="relative z-20 px-5 md:px-8 lg:px-[70px] xl:px-[100px] bg-[#231F20]">
      <div className="flex justify-between">
        <Link href="/">
          <Logo loading="eager" priority="high" className="" />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
