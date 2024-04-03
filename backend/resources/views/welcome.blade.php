<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Oups&hellip;</title>
        <style>
            body {
                font-family: sans-serif;
            }
            h2 {
                color: #777;
            }
            code {
                background-color: #eee;
                border-radius: 5px;
                color: #f0f;
                padding: 0.1em 0.3em;
            }
        </style>
    </head>
    <body>
        <h1>Routes : </h1>
        <ul>
            <li>api/districts : tous les quartiers</li>
            <li>api/districts/{id} : le quartier sélectionné par l'id</li>
            <li>api/districts : tous les restaurants</li>
            <li>api/districts/{id} : le restaurant sélectionné par l'id</li>
        </ul>
        <!--
                     .
                    /'
                   //
               .  //
               |\//7
              /' " \
             .   . .
             | (    \     '._
             |  '._  '    '. '
             /    \'-'_---. ) )
            .              :.'
            |               \
            | .    .   .     .
            ' .    |  |      |
             \^   /_-':     /
             / | |    '\  .'
            / /| |     \\  |
            \ \( )     // /
             \ | |    // /
              L! !   // /
               [_]  L[_|
        -->
    </body>
</html>
