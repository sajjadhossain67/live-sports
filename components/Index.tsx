"use client"

import { type FC, useState, useMemo } from "react"
import { Calendar, Menu, X, Tv, Zap, TrendingUp, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FiltersSidebar } from "@/components/FiltersSidebar"
import { TVChannelsSidebar } from "@/components/TVChannelsSidebar"
import { FixtureCard } from "@/components/FixtureCard"
import { TopLiveEvents } from "@/components/TopLiveEvents"
import { TrendingNow } from "@/components/TrendingNow"
import { PopularSports } from "@/components/PopularSports"
import { TrendingSports } from "@/components/TrendingSports"
import { Footer } from "@/components/Footer"
import { mockMatches } from "@/data/mockData"
import type { Match } from "@/types/types"

const Index: FC = () => {
  const [selectedSport, setSelectedSport] = useState<string>("All Sports")
  const [selectedCompetition, setSelectedCompetition] = useState<string>("All Competitions")
  const [selectedLocation, setSelectedLocation] = useState<string>("All Locations")
  const [selectedStatus, setSelectedStatus] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [showFilters, setShowFilters] = useState<boolean>(true)
  const [showTVChannels, setShowTVChannels] = useState<boolean>(true)

  const filteredMatches = useMemo(() => {
    return mockMatches.filter((match: Match) => {
      const sportMatch = selectedSport === "All Sports" || match.sport === selectedSport
      const competitionMatch = selectedCompetition === "All Competitions" || match.competition === selectedCompetition
      const statusMatch = selectedStatus === "all" || match.status === selectedStatus
      const searchMatch =
        searchQuery === "" ||
        match.homeTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
        match.awayTeam.toLowerCase().includes(searchQuery.toLowerCase()) ||
        match.competition.toLowerCase().includes(searchQuery.toLowerCase())

      return sportMatch && competitionMatch && statusMatch && searchMatch
    })
  }, [selectedSport, selectedCompetition, selectedStatus, searchQuery])

  const liveCount = useMemo(() => mockMatches.filter((m) => m.status === "live").length, [mockMatches])
  const upcomingCount = useMemo(() => mockMatches.filter((m) => m.status === "upcoming").length, [mockMatches])
  const completedCount = useMemo(() => mockMatches.filter((m) => m.status === "completed").length, [mockMatches])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex flex-col">
      <header className="sticky top-0 z-50 gradient-hero border-b-2 border-primary/20 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowFilters(!showFilters)}
                className="text-white hover:bg-white/20 transition-all"
              >
                {showFilters ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Live Sports</h1>
                  <p className="text-sm text-white/80 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                    {liveCount} live · {upcomingCount} upcoming · {completedCount} completed
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-white/30 text-white hover:bg-white/20 bg-white/10 transition-all"
              >
                Home
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-white/30 text-white hover:bg-white/20 bg-white/10 transition-all"
              >
                About
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-white/30 text-white hover:bg-white/20 bg-white/10 transition-all"
              >
                Read
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-white/30 text-white hover:bg-white/20 bg-white/10 transition-all"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Today
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowTVChannels(!showTVChannels)}
                className="text-white hover:bg-white/20 transition-all"
              >
                <Tv className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex w-full flex-1">
        {/* Filters Sidebar */}
        {showFilters && (
          <FiltersSidebar
            selectedSport={selectedSport}
            selectedCompetition={selectedCompetition}
            selectedLocation={selectedLocation}
            selectedStatus={selectedStatus}
            searchQuery={searchQuery}
            onSportChange={setSelectedSport}
            onCompetitionChange={setSelectedCompetition}
            onLocationChange={setSelectedLocation}
            onStatusChange={setSelectedStatus}
            onSearchChange={setSearchQuery}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="p-4 md:p-6 bg-white">
            <div className="container mx-auto max-w-7xl space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="gradient-card border border-primary/20 rounded-lg p-4 glow-effect hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground font-medium">LIVE NOW</p>
                      <p className="text-2xl md:text-3xl font-bold text-primary mt-1">{liveCount}</p>
                      <p className="text-xs text-muted-foreground mt-1">Matches</p>
                    </div>
                    <Zap className="h-8 w-8 text-primary/60" />
                  </div>
                </div>
                <div className="gradient-card border border-secondary/20 rounded-lg p-4 glow-effect hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground font-medium">UPCOMING</p>
                      <p className="text-2xl md:text-3xl font-bold text-secondary mt-1">{upcomingCount}</p>
                      <p className="text-xs text-muted-foreground mt-1">Scheduled</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-secondary/60" />
                  </div>
                </div>
                <div className="gradient-card border border-accent/20 rounded-lg p-4 glow-effect hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground font-medium">COMPLETED</p>
                      <p className="text-2xl md:text-3xl font-bold text-accent mt-1">{completedCount}</p>
                      <p className="text-xs text-muted-foreground mt-1">Finished</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-accent/60" />
                  </div>
                </div>
                <div className="gradient-card border border-primary/20 rounded-lg p-4 glow-effect hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground font-medium">TOTAL</p>
                      <p className="text-2xl md:text-3xl font-bold text-primary mt-1">{mockMatches.length}</p>
                      <p className="text-xs text-muted-foreground mt-1">Events</p>
                    </div>
                    <Users className="h-8 w-8 text-primary/60" />
                  </div>
                </div>
              </div>

              {/* Fixtures Section */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                  Featured Matches ({filteredMatches.length})
                </h2>
                {filteredMatches.length === 0 ? (
                  <div className="text-center py-20 bg-muted/30 rounded-lg border border-border">
                    <p className="text-lg text-muted-foreground">No matches found matching your filters</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredMatches.map((match) => (
                      <div key={match.id} className="animate-fade-in">
                        <FixtureCard match={match} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Additional Sections */}
              <TopLiveEvents />
              <TrendingNow />
              <PopularSports />
              <TrendingSports />
            </div>
          </div>
        </main>

        {/* TV Channels Sidebar */}
        <TVChannelsSidebar isOpen={showTVChannels} />
      </div>

      <Footer />
    </div>
  )
}

export default Index
