'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from '@payloadcms/ui'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <>
      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map(({ link }, i) => {
          return (
            <CMSLink
              key={i}
              {...link}
              appearance="link"
              className="text-xl text-white font-normal hover:text-yellow-300"
            />
          )
        })}
        <Link href={'/admin'}>
          <Button className="rounded-lg duration-150 text-xl text-black font-normal bg-yellow-300 p-2 ring-yellow-300 hover:no-underline hover:bg-transparent hover:text-white hover:ring-2">
            เข้าสู่ระบบ
          </Button>
        </Link>
      </nav>

      <Sheet>
        <SheetTrigger className="text-white lg:hidden">
          <Menu size={40} />
        </SheetTrigger>
        <SheetContent className="w-60">
          <SheetHeader>
            <SheetDescription className="flex flex-col gap-5 mt-5 items-center">
              {navItems.map(({ link }, i) => {
                return (
                  <CMSLink
                    key={i}
                    {...link}
                    appearance="link"
                    className="text-xl font-normal hover:text-yellow-300"
                  />
                )
              })}

              <Link href={'#'}>
                <Button className="rounded-lg duration-150 text-xl text-black dark:text-white font-normal bg-yellow-300 p-2 ring-yellow-300  hover:no-underline hover:bg-transparent hover:ring-2">
                  เข้าสู่ระบบ
                </Button>
              </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
