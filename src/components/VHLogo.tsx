'use client'
import { useTheme } from "next-themes"
import Image from "next/image"

export default function VHLogo() {
  const { theme } = useTheme()

  const imgUrl = theme === 'dark' ? '/logo_white.png' : '/logo_black.png'

  return <Image className="h-14 w-14" width={100} height={100} src={imgUrl} alt="VH Logo" />
}