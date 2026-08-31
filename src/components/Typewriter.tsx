import { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  className?: string;
}

const Typewriter = ({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseMs = 1400,
  className = '',
}: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[index % words.length];

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(pause);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, Math.max(0, prev.length - 1))
            : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={className}>
      <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
        {text}
      </span>
      <span className="inline-block w-[2px] h-[1em] translate-y-[2px] ml-1 bg-primary animate-blink" />
    </span>
  );
};

export default Typewriter;
