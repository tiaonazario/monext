import Link from 'next/link'

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={className}>
      <h1 className="font-bold text-xl">
        <span className="text-primary">MoN</span>
        <span>ext</span>
      </h1>
    </Link>
  )
}
