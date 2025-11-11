import type { FC } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Match } from "@/types/types"
import { Clock, MapPin, Users, TrendingUp, Target, Zap, Award, AlertCircle } from "lucide-react"

interface FixtureCardProps {
  match: Match
}

export const FixtureCard: FC<FixtureCardProps> = ({ match }) => {
  const isLive = match.status === "live"
  const isUpcoming = match.status === "upcoming"

  return (
    <Card className="overflow-hidden border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 bg-white card-glow">
      <div className="bg-primary text-white px-3 py-2 border-b border-primary/20 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <Badge className="bg-white/20 text-white text-xs font-bold px-1.5 py-0.5 border border-white/30">
            {match.sport}
          </Badge>
          <span className="text-sm font-bold truncate">{match.competition}</span>
        </div>
        {match.venue && (
          <div className="flex items-center gap-1 text-xs text-white/80 ml-2">
            <MapPin className="h-3 w-3 flex-shrink-0" />
            <span className="hidden sm:inline truncate text-xs">{match.venue}</span>
          </div>
        )}
      </div>

      <div className="p-2.5 space-y-1.5">
        {/* Time and Status Row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-xs font-semibold text-primary">
            <Clock className="h-3 w-3" />
            {match.time}
          </div>

          {/* Status Badge */}
          <div className="ml-auto">
            {isLive && (
              <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-red-500/15 rounded border border-red-500/30">
                <span className="inline-block w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold text-red-600">LIVE</span>
              </div>
            )}
            {isUpcoming && (
              <Badge className="bg-blue-500/15 text-blue-700 text-xs font-bold border border-blue-500/30 px-1.5 py-0.5">
                Soon
              </Badge>
            )}
            {match.status === "completed" && (
              <Badge className="bg-gray-500/15 text-gray-700 text-xs font-bold border border-gray-500/30 px-1.5 py-0.5">
                Done
              </Badge>
            )}
          </div>
        </div>

        {/* Teams and Score */}
        <div className="flex items-center justify-between gap-1.5 bg-gray-50 rounded p-1.5 border border-gray-200">
          <div className="text-center min-w-0 flex-1">
            <p className="text-sm font-bold text-foreground truncate">{match.homeTeam}</p>
            {match.homeFormation && <p className="text-xs text-primary/60">{match.homeFormation}</p>}
          </div>

          <div className="flex flex-col items-center px-2">
            <p className="text-lg font-bold text-primary">{match.homeScore !== undefined ? match.homeScore : "-"}</p>
            <p className="text-xs text-muted-foreground">-</p>
            <p className="text-lg font-bold text-secondary">{match.awayScore !== undefined ? match.awayScore : "-"}</p>
          </div>

          <div className="text-center min-w-0 flex-1">
            <p className="text-sm font-bold text-foreground truncate">{match.awayTeam}</p>
            {match.awayFormation && <p className="text-xs text-secondary/60">{match.awayFormation}</p>}
          </div>
        </div>

        {/* Goal Scorers and Cards - Compact Grid */}
        {(match.goalScorers && (match.goalScorers.home.length > 0 || match.goalScorers.away.length > 0)) ||
        (match.cards && (match.cards.home.length > 0 || match.cards.away.length > 0)) ? (
          <div className="grid grid-cols-2 gap-1.5">
            {/* Home Team Details */}
            <div className="space-y-1">
              {match.goalScorers && match.goalScorers.home.length > 0 && (
                <div>
                  <p className="font-bold text-primary text-xs flex items-center gap-0.5 mb-0.5">
                    <Award className="h-2.5 w-2.5" />
                    Goals
                  </p>
                  <div className="space-y-0.5">
                    {match.goalScorers.home.map((goal, idx) => (
                      <div key={idx} className="bg-primary/8 rounded px-1 py-0.5 border border-primary/15">
                        <p className="font-semibold text-primary text-xs leading-tight">{goal.player}</p>
                        <p className="text-muted-foreground text-xs leading-tight">
                          {goal.minute}' {goal.penalty && "P"} {goal.ownGoal && "OG"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {match.cards && match.cards.home.length > 0 && (
                <div>
                  <p className="font-bold text-red-600 text-xs flex items-center gap-0.5 mb-0.5">
                    <AlertCircle className="h-2.5 w-2.5" />
                    Cards
                  </p>
                  <div className="space-y-0.5">
                    {match.cards.home.map((card, idx) => (
                      <div
                        key={idx}
                        className={`rounded px-1 py-0.5 flex items-center gap-0.5 border text-xs ${
                          card.type === "red"
                            ? "bg-red-500/10 border-red-500/20"
                            : "bg-yellow-500/10 border-yellow-500/20"
                        }`}
                      >
                        <div
                          className={`w-1 h-1.5 rounded-sm flex-shrink-0 ${
                            card.type === "red" ? "bg-red-600" : "bg-yellow-600"
                          }`}
                        ></div>
                        <div className="min-w-0">
                          <p className="font-semibold text-foreground text-xs leading-tight truncate">{card.player}</p>
                          <p className="text-muted-foreground text-xs leading-tight">{card.minute}'</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Away Team Details */}
            <div className="space-y-1">
              {match.goalScorers && match.goalScorers.away.length > 0 && (
                <div>
                  <p className="font-bold text-secondary text-xs flex items-center gap-0.5 mb-0.5">
                    <Award className="h-2.5 w-2.5" />
                    Goals
                  </p>
                  <div className="space-y-0.5">
                    {match.goalScorers.away.map((goal, idx) => (
                      <div key={idx} className="bg-secondary/8 rounded px-1 py-0.5 border border-secondary/15">
                        <p className="font-semibold text-secondary text-xs leading-tight">{goal.player}</p>
                        <p className="text-muted-foreground text-xs leading-tight">
                          {goal.minute}' {goal.penalty && "P"} {goal.ownGoal && "OG"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {match.cards && match.cards.away.length > 0 && (
                <div>
                  <p className="font-bold text-red-600 text-xs flex items-center gap-0.5 mb-0.5">
                    <AlertCircle className="h-2.5 w-2.5" />
                    Cards
                  </p>
                  <div className="space-y-0.5">
                    {match.cards.away.map((card, idx) => (
                      <div
                        key={idx}
                        className={`rounded px-1 py-0.5 flex items-center gap-0.5 border text-xs ${
                          card.type === "red"
                            ? "bg-red-500/10 border-red-500/20"
                            : "bg-yellow-500/10 border-yellow-500/20"
                        }`}
                      >
                        <div
                          className={`w-1 h-1.5 rounded-sm flex-shrink-0 ${
                            card.type === "red" ? "bg-red-600" : "bg-yellow-600"
                          }`}
                        ></div>
                        <div className="min-w-0">
                          <p className="font-semibold text-foreground text-xs leading-tight truncate">{card.player}</p>
                          <p className="text-muted-foreground text-xs leading-tight">{card.minute}'</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : null}

        {/* Stats Grid */}
        {(match.homeStats || match.awayStats) && (
          <div className="grid grid-cols-6 gap-0.5 text-xs">
            {match.homeStats && (
              <>
                <div className="bg-primary/8 rounded p-0.5 text-center border border-primary/15">
                  <p className="text-muted-foreground text-xs leading-tight">Poss</p>
                  <p className="font-bold text-primary text-xs leading-tight">{match.homeStats.possession}%</p>
                </div>
                <div className="bg-primary/8 rounded p-0.5 text-center border border-primary/15">
                  <p className="text-muted-foreground text-xs leading-tight">Shots</p>
                  <p className="font-bold text-primary text-xs leading-tight">{match.homeStats.shots}</p>
                </div>
                <div className="bg-primary/8 rounded p-0.5 text-center border border-primary/15">
                  <p className="text-muted-foreground text-xs leading-tight">Target</p>
                  <p className="font-bold text-primary text-xs leading-tight">{match.homeStats.shotsOnTarget}</p>
                </div>
                <div className="bg-secondary/8 rounded p-0.5 text-center border border-secondary/15">
                  <p className="text-muted-foreground text-xs leading-tight">Poss</p>
                  <p className="font-bold text-secondary text-xs leading-tight">{match.awayStats?.possession}%</p>
                </div>
                <div className="bg-secondary/8 rounded p-0.5 text-center border border-secondary/15">
                  <p className="text-muted-foreground text-xs leading-tight">Shots</p>
                  <p className="font-bold text-secondary text-xs leading-tight">{match.awayStats?.shots}</p>
                </div>
                <div className="bg-secondary/8 rounded p-0.5 text-center border border-secondary/15">
                  <p className="text-muted-foreground text-xs leading-tight">Target</p>
                  <p className="font-bold text-secondary text-xs leading-tight">{match.awayStats?.shotsOnTarget}</p>
                </div>
              </>
            )}
          </div>
        )}

        {/* Footer Info */}
        <div className="flex flex-wrap gap-1 text-xs border-t border-gray-200 pt-1">
          {match.attendance && (
            <div className="flex items-center gap-0.5 text-muted-foreground">
              <Users className="h-3 w-3 text-primary" />
              <span className="text-xs">{(match.attendance / 1000).toFixed(0)}K</span>
            </div>
          )}
          {match.referee && (
            <div className="flex items-center gap-0.5 text-muted-foreground">
              <Zap className="h-3 w-3 text-primary" />
              <span className="text-xs">Ref: {match.referee}</span>
            </div>
          )}
          {match.odds && (
            <div className="flex items-center gap-0.5 text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-primary" />
              <span className="text-xs">
                {match.odds.home} / {match.odds.draw || "D"} / {match.odds.away}
              </span>
            </div>
          )}
          {match.nextMatch && (
            <div className="flex items-center gap-0.5 text-muted-foreground">
              <Target className="h-3 w-3 text-primary" />
              <span className="text-xs">{match.nextMatch}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-1 pt-1">
          <Button
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold text-xs h-7 transition-all"
          >
            {isLive ? "Watch" : isUpcoming ? "Remind" : "Details"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/30 text-primary hover:bg-primary/5 bg-white text-xs h-7"
          >
            {isLive ? "Stats" : "Info"}
          </Button>
        </div>
      </div>
    </Card>
  )
}
