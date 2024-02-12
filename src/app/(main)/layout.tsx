import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="mb-4 bg-slate-500">
        <nav className="container flex items-center justify-between py-2">
          <ul className="flex">
            <li>
              <Link href="/" className="mr-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="mr-4">
                About
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="mr-4">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/store" className="mr-4">
                Store
              </Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <Button size="sm">Sign In</Button>
        </nav>
      </header>
      <main className="container mb-4">{children}</main>
      <footer className="bg-slate-500">
        <div className="container">footer contents</div>
      </footer>
    </>
  )
}
