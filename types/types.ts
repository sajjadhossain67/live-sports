export interface GoalScorer {
  player: string
  minute: number
  penalty?: boolean
  ownGoal?: boolean
}

export interface Card {
  player: string
  minute: number
  type: "yellow" | "red"
}

export interface Match {
  id: string
  sport: string
  competition: string
  homeTeam: string
  awayTeam: string
  homeTeamCountry: string
  awayTeamCountry: string
  homeScore?: number
  awayScore?: number
  time: string
  status: "live" | "upcoming" | "completed"
  venue?: string
  attendance?: number
  referee?: string
  homeFormation?: string
  awayFormation?: string
  homeStats?: {
    possession: number
    shots: number
    shotsOnTarget: number
    passes: number
    tackles: number
    fouls: number
  }
  awayStats?: {
    possession: number
    shots: number
    shotsOnTarget: number
    passes: number
    tackles: number
    fouls: number
  }
  odds?: {
    home: number
    draw: number
    away: number
  }
  goalScorers?: {
    home: GoalScorer[]
    away: GoalScorer[]
  }
  cards?: {
    home: Card[]
    away: Card[]
  }
  highlights?: string
  commentary?: string
  nextMatch?: string
}
