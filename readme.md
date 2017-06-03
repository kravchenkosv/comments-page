Comments Page.

1. Создаем базу и подключаем.
2. Настроить корневую папку public.
3. php artisan migrate
4. npm install
5. npm install react react-dom
6. npm install timeago-react
7. npm run dev
8. Файл .env добавить домен в APP_URL
9.  composer require laravel/dusk
10. php artisan dusk:install
11. php artisan dusk tests/Browser/ExampleTest

    Тест создаст в базе два случайных комментария и проверит есть ли они на странице.
    
12. php artisan dusk tests/Browser/testAddCommenOnComment

    Тест со страницы добавит случайный комментарий, проверит его появление на странице и прокомментирует его случайным комментарием.
    
13. php artisan dusk tests/Browser/testCreateEditDeleteComment

    - Тест создает комментарий в базе и проверяет его появление на странице;
    - Далее комментарий редактируется и проверяется;
    - Далее комментарий удаляется.
    
14. php artisan dusk tests/Browser/testEditeAndChangeParentComment

    - Тест создает два комментария в базе и проверяет их вывод на странице;
    - Потом тест редактируется с изменением родителя(комментарий к комментарию) и изменением текста;
    - Комментарий проверяется на наличие изменений и удаляется;
    - Добавляется новый комментарий к первому комментарию, проверяется на добавление;
    - Теперь удаляется первый комментарий, при удалении которого должны удалиться все комментарии к нему.
    
15. vendor/bin/phpunit.bat tests/feature/exampletest.php
16. vendor/bin/phpunit.bat tests/feature/testShowComments.php
17. vendor/bin/phpunit.bat tests/feature/testStoreComment.php
18. vendor/bin/phpunit.bat tests/feature/testEditComment.php
18. vendor/bin/phpunit.bat tests/feature/testDeleteComment.php