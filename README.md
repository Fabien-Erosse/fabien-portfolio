# Portfolio de Fabien

Portfolio en React + Vite + Tailwind CSS, avec le thème "éditeur de code" (VS Code) —
onglets pour naviguer, barre latérale avec tes compétences, et projets présentés
comme des fichiers.

## 1. Avant de publier — à personnaliser

- `public/photo.jpg` → remplace par ta vraie photo (une image carrée ou en portrait
  fonctionne mieux). Tant qu'elle n'y est pas, un cadre `</>` s'affiche à la place.
- `public/cv-fabien.pdf` → dépose ton CV ici (le bouton "Télécharger mon CV" pointe
  déjà vers ce fichier).
- `src/data/content.js` → mets à jour ton e-mail et ton numéro WhatsApp
  (`contact.email`, `contact.whatsapp`), et ajuste la liste `projects` si tu veux
  ajouter ou retirer un projet.
- Captures d'écran des projets → crée un dossier `public/projects/<slug>/` pour
  chaque projet (le `slug` est indiqué dans `content.js`, ex. `gestion-affectations`)
  et dépose 4 images dedans nommées `capture1.jpg`, `capture2.jpg`, `capture3.jpg`,
  `capture4.jpg`. Tant qu'une image n'existe pas, une case vide s'affiche à sa place.
- Formulaire de contact → le formulaire "Nom / Email / Message" sur la page Contact
  a besoin d'un service gratuit pour t'envoyer les messages par e-mail (le site
  n'a pas de serveur ni de base de données). Va sur https://formspree.io, crée un
  compte gratuit, crée un formulaire, puis remplace `VOTRE_ID` dans
  `contact.formEndpoint` (fichier `src/data/content.js`) par l'identifiant qu'il
  te donne. Tant que ce n'est pas fait, le formulaire affichera une erreur d'envoi.

## 2. Lancer le site en local

```bash
npm install
npm run dev
```

Ouvre ensuite le lien affiché dans le terminal (en général http://localhost:5173).

## 3. Mettre le code sur GitHub

```bash
git init
git add .
git commit -m "Premier envoi du portfolio"
git branch -M main
git remote add origin https://github.com/fabien-gif/fabien-portfolio.git
git push -u origin main
```

(Crée d'abord un dépôt vide nommé `fabien-portfolio` sur GitHub si ce n'est pas
déjà fait, via le bouton "New repository".)

## 4. Déployer sur Vercel

1. Va sur https://vercel.com et connecte-toi avec ton compte GitHub.
2. Clique "Add New… → Project", puis choisis le dépôt `fabien-portfolio`.
3. Vercel détecte automatiquement Vite — laisse les réglages par défaut
   (Build Command: `npm run build`, Output Directory: `dist`).
4. Clique "Deploy". Après une minute, tu obtiens un lien du type
   `fabien-portfolio.vercel.app` que tu peux partager.

Chaque fois que tu fais `git push`, Vercel republie automatiquement le site.
