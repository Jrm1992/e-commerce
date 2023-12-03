'use client'

import Link from 'next/link'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { noHeaderFooterUrls } from '../../../constants'
import { HeaderNav } from '../Nav'
import classes from './index.module.scss'

export default function HeaderComponent({ header }: { header: Header }) {
  const pathname = usePathname()
  
  return (
    <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(' ')}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <picture>
            <Image
              width={170}
              height={50}
              alt="Logo"
              src="/logo-white.svg"
            />
          </picture>
        </Link>

        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}