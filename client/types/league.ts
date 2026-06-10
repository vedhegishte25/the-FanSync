export interface League {
  id: number;
  external_id: number;
  name: string;
  sport: string;
  country: string | null;
  logo_url: string | null;
  season: number | null;
}