import clsx from 'clsx'

export function SectionHeading({
  eyebrow,
  children,
  id,
  gradient = false,
  align = 'center',
  className,
}) {
  return (
    <header
      className={clsx(align === 'center' ? 'text-center' : 'text-left', className)}
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary-500">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={clsx(
          'font-display text-4xl font-medium tracking-tighter sm:text-5xl',
          gradient ? 'text-gradient' : 'text-primary-700',
        )}
      >
        {children}
      </h2>
    </header>
  )
}
