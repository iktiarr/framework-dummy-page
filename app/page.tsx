export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-emerald-950 via-green-900 to-teal-950 flex flex-col items-center justify-center p-6 text-white selection:bg-emerald-500 selection:text-white">
      <div className="relative z-10 max-w-lg w-full bg-emerald-900/40 backdrop-blur-xl border border-emerald-500/20 rounded-3xl p-8 shadow-2xl shadow-emerald-950/50 flex flex-col items-center text-center gap-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Framework Dummy
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-linear-to-r from-emerald-200 via-green-100 to-teal-200 bg-clip-text text-transparent">
            Halaman Uji Coba
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/70">
            Halaman ini aktif dan digunakan untuk keperluan pengujian framework.
          </p>
        </div>

        <div className="w-full pt-4 border-t border-emerald-500/10 flex items-center justify-between text-xs text-emerald-300/80">
          <span>
            Status: <strong className="text-emerald-400">Aktif</strong>
          </span>
          <span>
            Theme: <strong className="text-emerald-400">Emerald Green</strong>
          </span>
        </div>
      </div>
    </main>
  );
}

