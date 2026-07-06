// Class names must be full literals so the Tailwind scanner picks them up.
export const TRACKS = {
  DEV: {
    code: 'DEV',
    label: 'Development',
    dot: 'bg-track-dev-ink',
    chip: 'bg-track-dev/10 text-track-dev-ink ring-track-dev-ink/50',
    text: 'text-track-dev-ink',
    border: 'border-track-dev-ink/40',
  },
  MKT: {
    code: 'MKT',
    label: 'Marketing',
    dot: 'bg-track-mkt-ink',
    chip: 'bg-track-mkt/10 text-track-mkt-ink ring-track-mkt-ink/50',
    text: 'text-track-mkt-ink',
    border: 'border-track-mkt-ink/40',
  },
  DSN: {
    code: 'DSN',
    label: 'Design',
    dot: 'bg-track-dsn-ink',
    chip: 'bg-track-dsn/10 text-track-dsn-ink ring-track-dsn-ink/50',
    text: 'text-track-dsn-ink',
    border: 'border-track-dsn-ink/40',
  },
}

export const TRACK_LIST = [TRACKS.DEV, TRACKS.MKT, TRACKS.DSN]
