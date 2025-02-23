export function Button({ className, children, ...props }) {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
