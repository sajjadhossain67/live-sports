import type { FC } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

export const PopularSports: FC = () => {
  const sports = [
    { id: 1, name: "Football", events: 24, followers: "45M" },
    { id: 2, name: "Basketball", events: 18, followers: "32M" },
    { id: 3, name: "Tennis", events: 12, followers: "28M" },
    { id: 4, name: "Cricket", events: 15, followers: "38M" },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
        <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
        Popular Sports
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {sports.map((sport) => (
          <Card
            key={sport.id}
            className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all gradient-card group cursor-pointer"
          >
            <div className="p-4 text-center">
              <Badge className="w-full mb-3 bg-primary/20 text-primary text-xs font-bold border border-primary/30 justify-center">
                {sport.events} Events
              </Badge>
              <p className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {sport.name}
              </p>
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <Users className="h-3 w-3" />
                <span className="font-semibold text-primary">{sport.followers}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
