import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'

export async function Header() {
  const globalData = await getCachedGlobal('header', 1)()

if (!globalData || !('logo' in globalData)) {
  throw new Error("Invalid data: Expected Header but got something else")
}

  return <HeaderClient data={globalData as Header} />
}
