#JONGSEOK TEST PAGE 1
    연습용 페이지입니다.

## Screens
- [ ] Home
- [ ] Introduce
- [ ] Notice
- [ ] Apply
- [ ] Board
- [ ] Post
- [ ] Task
- [ ] Contact





### strat project
    composer create-project --prefer-dist laravel/laravel project2 "5.7.*"
### .env
    DB_CONNECTION=mysql
    DB_HOST=laravel.cim78dtgz3dv.ap-northeast-1.rds.amazonaws.com
    DB_PORT=3306
    DB_DATABASE=
    DB_USERNAME=
    DB_PASSWORD=

### AppServiceProvider.php
    App\Provider\AppServiceProvider.php에 아래 라인 추가.

    use Illuminate\Support\Facades\Schema;

    public function boot()
    {
        Schema::defaultStringLength(191);
    }
### setup
    php artisan preset react

    npm install && npm run dev

    yarn add react-router-dom
    npm install react-router-dom

    yarn add axios
    npm install axios

    yarn add styled-components
    npm install styled-components

    yarn add styled-reset
    npm install styled-reset

    php artisan serve
    
    npm run watch
    
### npm 관련
    Step 1: $ npm cache clean --force

    Step 2: delete node_modules by $ rm -rf node_modules folder or delete it manually by going into the directory and right-click > delete.

    Step 3: npm install

    To start again, $ npm start

    This worked for me. Hopes it works for you too.

    PS: Still if it is there, kindly check the error it displays in red and act accordingly. This error is specific to node.js environment. Happy Coding!!

### make auth
    php artisan make:auth
    php artisan migrate

### view에 넣기
    <div id="root"></div>
    <script src="{{ asset('js/app.js') }}" defer></script>

### 폴더 및 파일 생성
    1. components/App.js 
    2. components/Router.js
    3. Route/~~.js
    4. components/Header.js
    5. components/GlobalStyles.js
