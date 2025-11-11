"use client"

import type { FC } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"

interface FiltersSidebarProps {
  selectedSport: string
  selectedCompetition: string
  selectedLocation: string
  selectedStatus: string
  searchQuery: string
  onSportChange: (sport: string) => void
  onCompetitionChange: (competition: string) => void
  onLocationChange: (location: string) => void
  onStatusChange: (status: string) => void
  onSearchChange: (query: string) => void
}

export const FiltersSidebar: FC<FiltersSidebarProps> = ({
  selectedSport,
  selectedCompetition,
  selectedStatus,
  searchQuery,
  onSportChange,
  onCompetitionChange,
  onStatusChange,
  onSearchChange,
}) => {
  const sports = ["All Sports", "Football", "Basketball", "Tennis", "Cricket", "Boxing"]
  const competitions = ["All Competitions", "Premier League", "NBA", "Grand Slam", "IPL", "Championship"]
  const statuses = ["all", "live", "upcoming", "completed"]

  return (
    <aside className="w-64 bg-card border-r border-border/50 overflow-y-auto max-h-[calc(100vh-80px)]">
      <div className="p-4 space-y-6">
        {/* Search */}
        <div>
          <label className="text-xs font-bold text-muted-foreground uppercase mb-2 block">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search matches..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9 bg-muted/50 border-border/50 focus:border-primary"
            />
          </div>
        </div>

        {/* Sport Filter */}
        <div>
          <label className="text-xs font-bold text-muted-foreground uppercase mb-3 flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Sport
          </label>
          <div className="space-y-2">
            {sports.map((sport) => (
              <Button
                key={sport}
                variant={selectedSport === sport ? "default" : "outline"}
                size="sm"
                onClick={() => onSportChange(sport)}
                className={`w-full justify-start text-xs font-medium transition-all ${
                  selectedSport === sport
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border-border/50 hover:border-primary/50"
                }`}
              >
                {sport}
              </Button>
            ))}
          </div>
        </div>

        {/* Competition Filter */}
        <div>
          <label className="text-xs font-bold text-muted-foreground uppercase mb-3 block">Competition</label>
          <div className="space-y-2">
            {competitions.map((comp) => (
              <Button
                key={comp}
                variant={selectedCompetition === comp ? "default" : "outline"}
                size="sm"
                onClick={() => onCompetitionChange(comp)}
                className={`w-full justify-start text-xs font-medium transition-all ${
                  selectedCompetition === comp
                    ? "bg-secondary text-white hover:bg-secondary/90"
                    : "border-border/50 hover:border-secondary/50"
                }`}
              >
                {comp}
              </Button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className="text-xs font-bold text-muted-foreground uppercase mb-3 block">Status</label>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <Badge
                key={status}
                variant={selectedStatus === status ? "default" : "outline"}
                onClick={() => onStatusChange(status)}
                className={`cursor-pointer capitalize transition-all ${
                  selectedStatus === status ? "bg-accent text-white" : "border-border/50 hover:border-accent/50"
                }`}
              >
                {status}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
