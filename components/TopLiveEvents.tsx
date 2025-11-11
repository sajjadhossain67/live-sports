import type { FC } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame } from "lucide-react"

export const TopLiveEvents: FC = () => {
  const events = [
    { id: 1, title: "Championship Final", viewers: "2.5M", sport: "Football" },
    { id: 2, title: "Grand Slam Match", viewers: "1.8M", sport: "Tennis" },
    { id: 3, title: "Boxing Showdown", viewers: "1.2M", sport: "Boxing" },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
        <span className="w-1 h-6 bg-gradient-to-b from-secondary to-accent rounded-full"></span>
        Top Live Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <Card
            key={event.id}
            className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all gradient-card group cursor-pointer"
          >
            <div className="p-4 md:p-5 relative">
              <div className="absolute top-3 right-3">
                <Badge className="bg-red-500 text-white text-xs font-bold animate-pulse">LIVE</Badge>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-secondary/20 rounded-lg">
                  <Flame className="h-5 w-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-medium">{event.sport}</p>
                  <p className="text-sm md:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border/50">
                <span className="text-xs text-muted-foreground">Viewers</span>
                <span className="text-sm font-bold text-secondary">{event.viewers}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
