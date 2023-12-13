export default function Layout({ children }) {
  return (
    <div className="w-[360px] h-screen mx-auto bg-white">
      <div>{children}</div>
    </div>
  );
}
