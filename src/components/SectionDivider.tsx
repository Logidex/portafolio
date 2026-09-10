interface SectionDividerProps {
  fill?: string
  flip?: boolean
}

export default function SectionDivider({ fill = '#111827', flip = false }: SectionDividerProps) {
  return (
    <div
      className="wave-divider"
      style={{ transform: flip ? 'rotate(180deg)' : undefined }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C150,100 350,0 600,60 C850,120 1050,20 1200,80 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
