export interface Team {
  id: number;
  external_id: number;
  name: string;
  sport: string;
  league_id: number | null;
  country: string | null;
  logo_url: string | null;
}