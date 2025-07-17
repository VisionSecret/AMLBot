import Link from "next/link";

export default function Button({
  type = "button",
  variant = "",
  children,
  className = "",
  link = "",
  icon = "",
  ...props
}) {
  const base =
    "transition-all duration-300";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const combinedClasses = `${base} ${variants[variant]} ${className}`;

  if (link) {
    return (
      <Link href={link} {...props} className={combinedClasses}>
        {children}&nbsp;&nbsp;{icon}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} {...props}>
      {children}&nbsp;&nbsp;{icon}
    </button>
  );
}
