interface BadgeProps {
  label: string
  color?: string
  size?: 'sm' | 'md'
  variant?: 'default' | 'outline' | 'solid'
}

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  default: { bg: 'rgba(99,102,241,0.12)', text: '#a5b4fc', border: 'rgba(99,102,241,0.25)' },
  cyan:    { bg: 'rgba(6,182,212,0.12)',  text: '#67e8f9', border: 'rgba(6,182,212,0.25)' },
  violet:  { bg: 'rgba(139,92,246,0.12)', text: '#c4b5fd', border: 'rgba(139,92,246,0.25)' },
  emerald: { bg: 'rgba(16,185,129,0.12)', text: '#6ee7b7', border: 'rgba(16,185,129,0.25)' },
  amber:   { bg: 'rgba(245,158,11,0.12)', text: '#fcd34d', border: 'rgba(245,158,11,0.25)' },
  pink:    { bg: 'rgba(236,72,153,0.12)', text: '#f9a8d4', border: 'rgba(236,72,153,0.25)' },
  slate:   { bg: 'rgba(100,116,139,0.12)',text: '#94a3b8', border: 'rgba(100,116,139,0.2)' },
}

function pickColor(label: string): typeof colorMap[string] {
  const techColorMap: Record<string, string> = {
    'React': 'cyan', 'TypeScript': 'cyan', 'JavaScript': 'amber', 'HTML': 'amber', 'CSS': 'cyan',
    'Python': 'cyan', 'FastAPI': 'emerald', 'Django': 'emerald', 'Node.js': 'emerald',
    'AWS': 'amber', 'GCP': 'cyan', 'Docker': 'cyan', 'Terraform': 'violet', 'CI/CD': 'emerald',
    'PostgreSQL': 'cyan', 'Redis': 'pink', 'RabbitMQ': 'amber', 'MongoDB': 'emerald', 'MySQL': 'cyan',
    'LangChain': 'violet', 'LangGraph': 'violet', 'Temporal': 'violet', 'MCP': 'violet',
    'WebSockets': 'emerald', 'REST API': 'default', 'RESTful': 'default',
    'Splunk': 'amber', 'ServiceNow': 'emerald', 'ThousandEyes': 'cyan',
    'KVM': 'slate', 'IAM': 'amber', 'VPC': 'amber', 'ECS': 'amber', 'ALB': 'amber',
    'Cisco': 'default', 'MUI': 'cyan', 'Redux': 'violet', 'Boto3': 'amber',
  }
  const key = Object.keys(techColorMap).find(k => label.toLowerCase().includes(k.toLowerCase()))
  const colorKey = key ? techColorMap[key] : 'default'
  return colorMap[colorKey] || colorMap['default']
}

export function Badge({ label, color, size = 'sm', variant = 'default' }: BadgeProps) {
  const colors = color ? (colorMap[color] || colorMap['default']) : pickColor(label)
  const padding = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'

  if (variant === 'solid') {
    return (
      <span
        className={`inline-flex items-center rounded-full font-medium font-mono ${padding}`}
        style={{ backgroundColor: colors.border, color: colors.text }}
      >
        {label}
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium font-mono ${padding}`}
      style={{ backgroundColor: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
    >
      {label}
    </span>
  )
}
