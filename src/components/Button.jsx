import Link from 'next/link'
import clsx from 'clsx'

const variants = {
  primary:
    'bg-accent text-white shadow-card hover:bg-accent-dark hover:shadow-glow focus-visible:outline-accent',
  secondary:
    'bg-white/70 text-accent ring-1 ring-inset ring-primary-200 backdrop-blur hover:bg-white hover:ring-primary-300 focus-visible:outline-primary-400',
}

const sizes = {
  md: 'px-6 py-3.5 text-base',
  sm: 'px-4 py-2 text-sm',
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  rel,
  ...props
}) {
  className = clsx(
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60',
    sizes[size] ?? sizes.md,
    variants[variant] ?? variants.primary,
    className,
  )

  const relValue =
    rel ?? (props.target === '_blank' ? 'noopener noreferrer' : undefined)

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} rel={relValue} {...props} />
  )
}
