// app/not-found.tsx
import { useSearchParams } from 'next/navigation'

export default function NotFound() {
  const searchParams = useSearchParams() // This is a server-side hook in Next.js 13

  return (
    <div>
      <h1>404 – Not Found</h1>
      <p>Query param foo = {searchParams.get('foo')}</p>
    </div>
  )
}