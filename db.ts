import Database from 'better-sqlite3';

// Öffnet die Datei daten.sqlite (wird beim ersten Mal erstellt)
export const db = new Database('daten.sqlite');

// Tabelle anlegen, falls sie noch nicht existiert
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

// Admin einmalig anlegen
// prepare bereitet den SQL-Befehl vor. Die ? sind Platzhalter für die Werte, die später übergeben werden.
// get führt die Abfrage aus und gibt den gefundenen Datensatz zurück.
const admin = db.prepare('SELECT * FROM users WHERE username = ?').get('Admin');
if (!admin) {
	// run führt den vorbereiteten SQL-Befehl aus (z. B. INSERT, UPDATE oder DELETE).
	db.prepare('INSERT INTO users (username, password) VALUES (?, ?)').run('Admin', '1234');
	console.log('Admin-Benutzer angelegt (Passwort 1234)');
}
