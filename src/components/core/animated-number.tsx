'use client';

import { cn } from '@/lib/utils';
import { motion, SpringOptions, useInView, useSpring, useTransform } from 'motion/react';
import { useEffect, useMemo, useRef } from 'react';

export type AnimatedNumberProps = {
  value: number;
  from?: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: React.ElementType;
  format?: (value: number) => string;
  formatOptions?: Intl.NumberFormatOptions;
  locale?: string;
  startOnView?: boolean;
};

export function AnimatedNumber({
  value,
  from = 0,
  className,
  springOptions,
  as = 'span',
  format,
  formatOptions,
  locale,
  startOnView = true,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const Component = useMemo(() => {
    if (typeof as === 'string' && as in motion) {
      return (motion as unknown as Record<string, React.ElementType>)[as];
    }
    return motion.create(as);
  }, [as]);

  const spring = useSpring(from, springOptions);

  const display = useTransform(spring, (current) => {
    if (format) {
      return format(current);
    }
    if (formatOptions || locale) {
      return new Intl.NumberFormat(locale, formatOptions).format(current);
    }
    return Math.round(current).toLocaleString(locale);
  });

  useEffect(() => {
    if (!startOnView || isInView) {
      spring.set(value);
    }
  }, [spring, value, isInView, startOnView]);

  return (
    <Component
      ref={ref as unknown as React.RefObject<HTMLSpanElement>}
      aria-label={value.toString()}
      className={cn('tabular-nums', className)}
    >
      {display}
    </Component>
  );
}


