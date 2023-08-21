import { cloneElement, ReactElement, useEffect, useState } from 'react';

export default function Animate({ children, order }: { children: ReactElement; order: number }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setLoading(false);
      });
    }
  }, []);

  return cloneElement(children, {
    style: {
      opacity: isLoading ? 0 : 1,
      transform: isLoading ? 'translateY(-80%)' : 'translateY(0px)',
      transition: `${order * 300}ms transform, ${order * 200}ms opacity ${order * 50}ms`
    }
  });
}
