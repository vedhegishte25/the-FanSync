SPORT_FOOTBALL = "football"
SPORT_CRICKET = "cricket"
SUPPORTED_SPORTS = [SPORT_FOOTBALL, SPORT_CRICKET]

FOOTBALL_LEAGUES = {
    "fifa_world_cup":   1,
    "premier_league":   39,
    "la_liga":          140,
    "serie_a":          135,
    "bundesliga":       78,
    "ligue_1":          61,
    "mls":              253,
    "champions_league": 2,
    "europa_league":    3,
}

FOOTBALL_STATUS_LIVE = ["1H", "HT", "2H", "ET", "BT", "P", "SUSP", "INT", "LIVE"]
FOOTBALL_STATUS_FINISHED = ["FT", "AET", "PEN"]
FOOTBALL_STATUS_SCHEDULED = ["TBD", "NS"]

CRICKET_MATCH_TEST = "Test"
CRICKET_MATCH_ODI = "ODI"
CRICKET_MATCH_T20 = "T20"
CRICKET_MATCH_TYPES = [CRICKET_MATCH_TEST, CRICKET_MATCH_ODI, CRICKET_MATCH_T20]

CRICKET_STATUS_LIVE = "Live"
CRICKET_STATUS_FINISHED = "Match not started"
CRICKET_STATUS_COMPLETED = "completed"

NEWS_CATEGORIES = ["sports"]
NEWS_FOOTBALL_QUERY = "football OR soccer"
NEWS_CRICKET_QUERY = "cricket"
NEWS_MAX_ARTICLES = 20

DEFAULT_PAGE = 1
DEFAULT_PAGE_SIZE = 20
MAX_PAGE_SIZE = 100

CACHE_TTL_LIVE = 120
CACHE_TTL_STANDINGS = 3600
CACHE_TTL_SCHEDULE = 86400
CACHE_TTL_NEWS = 1800