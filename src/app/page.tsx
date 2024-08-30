export default function Home() {
  return (
    <main className="flex h-full w-full max-w-4xl md:mx-auto">
      <div className="flex h-full w-full flex-col items-center justify-between pb-10 pt-20 md:h-2/3">
        <p className="text-xl text-slate-200">
          Você não tem hábitos cadastrados
        </p>

        <button className="w-1/2 rounded bg-green-500 py-2 font-semibold text-slate-900 transition-opacity hover:opacity-80 md:w-1/4">
          Novo hábito
        </button>
      </div>
    </main>
  )
}
