import type { ReactNode } from 'react';

interface CodeCardProps {
  filename: string;
  live?: boolean;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

const CodeCard = ({
  filename,
  live = false,
  children,
  className = '',
  bodyClassName = '',
}: CodeCardProps) => {
  return (
    <div className={`code-card ${className}`}>
      <div className="code-card__header">
        <span className="code-card__dots">
          <span className="code-card__dot code-card__dot--r" />
          <span className="code-card__dot code-card__dot--y" />
          <span className="code-card__dot code-card__dot--g" />
        </span>
        <span className="truncate">{filename}</span>
        {live && <span className="code-card__live">Live</span>}
      </div>
      <div className={`code-card__body ${bodyClassName}`}>{children}</div>
    </div>
  );
};

export default CodeCard;
