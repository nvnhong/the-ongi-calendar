export default function VStack({ children, className, onClick }) {
  return (
    <div className={`flex flex-col ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
