<?php
if(strpos($_SERVER['REQUEST_URI'],'api')==FALSE){
    $pathPrefix = '/';
    // $pathPrefix = '/root/football-app/public/';
    die('<html><head><meta name="viewport" content="width=device-width, initial-scale=1"><title>Book My Table</title></head><body><div id="app"></div><script crossorigin src="'.$pathPrefix.'js/app.js?v=1.0" defer></script></body></html>');
}