export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-4 px-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">Painel Administrativo</h1>
      </div>
      <main className="container mx-auto py-8 px-4">
        {children}
      </main>
    </div>
  )
} 