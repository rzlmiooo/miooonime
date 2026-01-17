export default function AuthCard({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">
          <h1 className="mb-6 text-center text-2xl font-semibold text-white">
            {title}
          </h1>
          {children}
        </div>
      </div>
    );
  }
  