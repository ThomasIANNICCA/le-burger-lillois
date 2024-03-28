# Backend

Tu trouveras ici le code source de la partie backend du projet : l' **API**.

Ce code est basé sur le framework _Laravel_.

Comme d'habitude, il faudra installer les dépendance du projet avec Composer pour le faire fonctionner :
```
composer install
```

N'oublie pas non plus de configurer Laravel en copiant le fichier `.env.example` en `.env` et en allant
modifier ce qui doit l'être. :wink:

Pour lancer le serveur Web pour la partie backend, c'est selon ta préférence :
```
php artisan serve
```
ou
```
php -S localhost:8000 -t public
```

## Code actuel

Le code fourni contient déjà quelques fonctionnalités.

- certains _Models_ sont fournis (mais à compléter)
- certains _Controllers_ sont fournis (mais à compléter)
- 3 routes sont configurées
- les endpoints #3, #6 et #12 sont déjà en place
- une fois le dépôt cloné, n'oublie pas le fichier `.env` :wink:

## Documents

- les [endpoints](../docs/api.md) de l'API
- le [code _MoCoDo_](../docs/game-reviews.mcd) du MCD du projet
- le [MCD (svg)](../docs/game-reviews.svg) du projet
- l'[import](../docs/import.sql) de la base de données
