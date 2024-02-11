export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-hub-400 flex h-screen items-center justify-around">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-bold">Kong Idol</h1>
        </div>
        {children}
      </div>
    </section>
  )
}
