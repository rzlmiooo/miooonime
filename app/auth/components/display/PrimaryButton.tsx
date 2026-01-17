export default function PrimaryButton({
    children,
    loading,
  }: {
    children: React.ReactNode;
    loading?: boolean;
  }) {
    return (
      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
  