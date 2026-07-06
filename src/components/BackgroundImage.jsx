import clsx from 'clsx'

export function BackgroundImage({ className, position = 'top' }) {
  const side = position === 'left' ? 'left' : position === 'right' ? 'right' : 'center'

  return (
    <div
      className={clsx(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
    >
      <div
        className={clsx(
          'absolute h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-sky-200/40 via-primary-200/30 to-emerald-200/40 blur-3xl',
          side === 'left' && '-left-32 -top-16',
          side === 'right' && '-right-32 -top-16',
          side === 'center' && 'left-1/2 -top-32 -translate-x-1/2',
        )}
      />

      <div
        className="bg-dots absolute inset-0"
        style={{
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 70% at 50% 45%, #000 35%, transparent 80%)',
          maskImage:
            'radial-gradient(ellipse 75% 70% at 50% 45%, #000 35%, transparent 80%)',
        }}
      />
    </div>
  )
}
