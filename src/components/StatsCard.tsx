interface StatsCardProps {
  title: string
  value: string
  change?: string
}

export function StatsCard({ title, value, change }: StatsCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="mt-2 flex items-center">
        <p className="text-2xl font-bold">{value}</p>
        {change && (
          <span className={`ml-2 text-sm ${Number(change) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change}%
          </span>
        )}
      </div>
    </div>
  )
} 