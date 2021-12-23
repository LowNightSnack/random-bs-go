import Link from "next/link";

const InAppLink = ({ href, className, children }) => {
  return (
    <Link href={href}>
      <a className={className ? className : ""}>{children}</a>
    </Link>
  );
};

export default InAppLink;
