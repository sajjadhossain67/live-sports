import type { FC } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tv } from "lucide-react"

interface TVChannelsSidebarProps {
  isOpen: boolean
}

export const TVChannelsSidebar: FC<TVChannelsSidebarProps> = ({ isOpen }) => {
  if (!isOpen) return null

  const channels = [
    { id: 1, name: "Sports HD", live: 3, color: "from-blue-500 to-cyan-500" },
    { id: 2, name: "Premier League", live: 2, color: "from-purple-500 to-pink-500" },
    { id: 3, name: "NBA Live", live: 1, color: "from-orange-500 to-red-500" },
    { id: 4, name: "Tennis Plus", live: 1, color: "from-green-500 to-emerald-500" },
  ]

  return (
    <aside className="w-56 bg-card border-l border-border/50 overflow-y-auto max-h-[calc(100vh-80px)]">
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Tv className="h-5 w-5 text-primary" />
          <h3 className="font-bold text-foreground">TV Channels</h3>
        </div>

        {channels.map((channel) => (
          <Card
            key={channel.id}
            className={`overflow-hidden border-0 shadow-sm hover:shadow-md transition-all cursor-pointer bg-gradient-to-br ${channel.color} p-0.5`}
          >
            <div className="bg-card rounded-[calc(0.625rem-2px)] p-3">
              <div className="flex items-start justify-between mb-2">
                <p className="text-sm font-bold text-foreground">{channel.name}</p>
                <Badge className="bg-red-500 text-white text-xs font-bold animate-pulse">{channel.live}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {channel.live} event{channel.live !== 1 ? "s" : ""} live
              </p>
            </div>
          </Card>
        ))}
      </div>
    </aside>
  )
}
