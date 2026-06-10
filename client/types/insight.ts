export interface Insight {
  id: number;
  title: string;
  body: string;
  sport: string | null;
  match_id: number | null;
  created_at: string | null;
}