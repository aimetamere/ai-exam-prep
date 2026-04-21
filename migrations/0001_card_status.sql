CREATE TABLE IF NOT EXISTS card_status (
  user_id TEXT NOT NULL,
  deck_type TEXT NOT NULL,
  card_id TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('learned', 'not_learned')),
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, deck_type, card_id)
);

CREATE INDEX IF NOT EXISTS idx_card_status_user_deck
  ON card_status (user_id, deck_type, updated_at DESC);
