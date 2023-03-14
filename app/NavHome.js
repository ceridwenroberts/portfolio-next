'use client'

import React from 'react'
import Link from 'next/link'

export const NavHome = () => {
  return (
    <>
    <div>
    <Link href="./work">Work</Link>
    <Link href="./about">About</Link>
    <Link href="./contact">Contact</Link>
    </div>
    </>
  )
}
