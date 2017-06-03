<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{--<!-- CSRF Token -->--}}
        <meta name="csrf-token" content="{{ csrf_token() }}">

        {{--<!--Import Google Icon Font-->--}}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        {{--<!-- Styles -->--}}
        <link href="{{ elixir('css/app.css') }}" rel="stylesheet">
        <link href="{{ elixir('css/main.css') }}" rel="stylesheet">
    </head>
    <body>

        <div id="main">Загрузка...</div>

        {{--<!-- JavaScripts -->--}}
        <script src="{{ elixir('js/app.js') }}"></script>
        <script src="{{ elixir('js/main.js') }}"></script>
    </body>
</html>