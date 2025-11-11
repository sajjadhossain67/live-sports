import type { FC } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

export const TrendingSports: FC = () => {
  const trendingSports = [
    { id: 1, name: "Esports", growth: "+45%", color: "from-purple-500 to-pink-500" },
    { id: 2, name: "MMA", growth: "+38%", color: "from-red-500 to-orange-500" },
    { id: 3, name: "Volleyball", growth: "+32%", color: "from-blue-500 to-cyan-500" },
    { id: 4, name: "Badminton", growth: "+28%", color: "from-green-500 to-emerald-500" },
  ]

  return (
    <div className="space-y-4 pb-8">
      <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
        <span className="w-1 h-6 bg-gradient-to-b from-secondary to-primary rounded-full"></span>
        Trending Sports
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {trendingSports.map((sport) => (
          <Card
            key={sport.id}
            className={`overflow-hidden border-0 shadow-md hover:shadow-lg transition-all cursor-pointer group bg-gradient-to-br ${sport.color} p-0.5`}
          >
            <div className="bg-card rounded-[calc(0.625rem-2px)] p-4 h-full flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <p className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {sport.name}
                </p>
                <Zap className="h-4 w-4 text-secondary opacity-60" />
              </div>
              <Badge className="w-fit bg-secondary/20 text-secondary text-xs font-bold border border-secondary/30">
                {sport.growth}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
