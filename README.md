# luigimurru.github.io

Sito personale statico (HTML/CSS/JS puro, nessun build tool) — percorso, progetti e competenze.

## Come pubblicarlo su GitHub Pages

1. **Creare il repository** su GitHub con il nome esatto:
   ```
   luigimurru.github.io
   ```
   Deve corrispondere esattamente al tuo username (`Owner → Settings` per verificarlo). Con questo nome GitHub lo tratta come "user site" e lo pubblica automaticamente alla radice, senza bisogno di configurare altro.

2. **Caricare questi file** nella root del repository (non in una sottocartella):
   ```
   index.html
   style.css
   script.js
   ```
   Da terminale, dentro questa cartella:
   ```bash
   git init
   git add .
   git commit -m "Prima versione del sito"
   git branch -M main
   git remote add origin https://github.com/luigimurru/luigimurru.github.io.git
   git push -u origin main
   ```

3. **Attivare Pages**: `Settings → Pages → Build and deployment → Source: Deploy from a branch`, branch `main`, cartella `/ (root)`. Salva.

4. Dopo 1–2 minuti il sito sarà live su:
   ```
   https://luigimurru.github.io
   ```

## Cosa aggiornare prima di andare online

- **Link ai progetti** (in `index.html`, sezione `#progetti`): verificare che puntino alle repository GitHub reali.
- **LinkedIn**: in caso si voglia aggiungerlo, c'è spazio pronto accanto al link GitHub sia nell'hero (`.hero-actions`) sia nei contatti (`.contact-links`).

## Struttura

```
index.html   → contenuto e testi (IT/EN tramite attributi data-it / data-en)
style.css    → design system (colori, tipografia, layout)
script.js    → toggle lingua, scroll reveal
```

Il toggle lingua (IT/EN in alto a destra) traduce ogni elemento che ha gli attributi `data-it` / `data-en`: per aggiungere testo nuovo, ricordare di popolare entrambi gli attributi.

## Note tecniche

- Nessuna dipendenza da installare: è HTML/CSS/JS statico, funziona aprendo `index.html` anche in locale.
- Rispetta `prefers-reduced-motion`: se l'utente ha disattivato le animazioni di sistema, lo scroll-reveal resta statico.
