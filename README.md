# Schere, Stein, Papier

Ein Browser-Spiel gegen den Computer. Das Grundgerüst stammt aus dem JavaScript-Kurs von **SuperSimpleDev**, mehrere Funktionen habe ich selbst ergänzt.

**Live spielen:** https://juliantrouch.github.io/schere-stein-papier/

## Aus dem Kurs

- Bild-Buttons für Schere, Stein und Papier, der Computer wählt zufällig
- Ergebnis (Gewonnen, Verloren, Unentschieden) und beide Züge als Bilder
- Spielstand des aktuellen Spielers mit "Reset Score" zurücksetzen

## Meine eigenen Erweiterungen

- **Auto Play repariert:** Ein Button startet und stoppt das automatische Spielen, eine Runde pro Sekunde (`setInterval` / `clearInterval`)
- **Mehrere Spieler:** Mit "Spielen als" gibst du deinen Namen ein und wechselst zu deinem Spieler oder legst einen neuen an
- **Punkte wie im Fußball:** Sieg 3 Punkte, Unentschieden 1, Niederlage 0
- **Leaderboard:** Rangliste rechts neben dem Spiel, nach Punkten sortiert und in `localStorage` gespeichert

## Verwendete Technik

- HTML
- CSS
- JavaScript (ohne Frameworks)

## Was ich dabei gelernt habe

- Zufallszahlen mit `Math.random()` erzeugen
- Entscheidungen mit `if` / `else` treffen
- Auf Klicks reagieren (Event-Listener)
- Zeitgesteuerte Abläufe mit `setInterval` starten und stoppen
- Daten als JSON in `localStorage` speichern und wieder laden
- Arrays sortieren (`sort`) für die Rangliste

## Starten

Einfach `index.html` im Browser öffnen, oder die Live-Version oben nutzen.
