import type { FC } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

export const TrendingNow: FC = () => {
  const trends = [
    { id: 1, title: "Player Transfer News", mentions: "15.2K", category: "Transfer" },
    { id: 2, title: "Injury Updates", mentions: "8.9K", category: "News" },
    { id: 3, title: "Record Breaker", mentions: "12.5K", category: "Achievement" },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
        <span className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full"></span>
        Trending Now
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trends.map((trend) => (
          <Card
            key={trend.id}
            className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all gradient-card group cursor-pointer"
          >
            <div className="p-4 md:p-5">
              <div className="flex items-start justify-between mb-3">
                <Badge className="bg-accent/20 text-accent text-xs font-bold border border-accent/30">
                  {trend.category}
                </Badge>
                <TrendingUp className="h-4 w-4 text-accent opacity-60" />
              </div>
              <p className="text-sm md:text-base font-bold text-foreground group-hover:text-accent transition-colors mb-3">
                {trend.title}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                <span className="text-xs text-muted-foreground">Mentions</span>
                <span className="text-sm font-bold text-accent">{trend.mentions}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
