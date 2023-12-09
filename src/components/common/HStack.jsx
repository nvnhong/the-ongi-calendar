export default function HStack({ children, className }) {
  return <div className={`flex ${className}`}>{children}</div>;
}
