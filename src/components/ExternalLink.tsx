import React from 'react';

type ExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, ...props }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="text-inherit"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
