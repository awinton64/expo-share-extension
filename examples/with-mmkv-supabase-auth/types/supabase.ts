export interface SharedUrl {
  id: string
  url: string
  created_at: string
  user_id: string
}

export interface Session {
  user: {
    id: string
    email?: string
  } | null
} 