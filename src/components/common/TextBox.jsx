export default function TextBox({ children, className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
