from app.db.session import SessionLocal
from app.models.league import League
from app.core.constants import FOOTBALL_LEAGUES


def seed_leagues():
    db = SessionLocal()

    try:
        for name, external_id in FOOTBALL_LEAGUES.items():
            existing = db.query(League).filter(
                League.external_id == external_id
            ).first()

            if not existing:
                league = League(
                    external_id=external_id,
                    name=name.replace("_", " ").title(),
                    sport="football",
                    season=2024,
                )
                db.add(league)

        db.commit()
        print("Leagues seeded successfully.")

    except Exception as e:
        db.rollback()
        print(f"Error seeding leagues: {e}")

    finally:
        db.close()


if __name__ == "__main__":
    seed_leagues()