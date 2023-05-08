
<script>
    let openBool = false;

    function openMenu() {
        openBool = !openBool
    }
</script>

<main>
    <header>
        <div class="navbar">
            <div class="logo"><a href="/">Dev <span>Ralle</span>.</a></div>
            <ul class="links">
                <li><a href="">Home</a></li>
                <a href="">Projects</a>
                <li><a href="">Games</a></li>
            </ul>
            <a href="/" class="action_btn">Hejsan!</a>
            <div on:click={()=>
            openMenu()} class="toggle_btn">
                <i class="fa-solid fa-bars-staggered"></i>
            </div>
        </div>

        <div class="dropdown_menu" class:open={openBool}>
            <li><a href="/">Home</a></li>
            <li><a href="/clicker">Clicker</a></li>
            <li><a href="/todoapp">Todo</a></li>
            <li><a href="/telltale">Telltale</a></li>
            <li><a href="/memory">Memory</a></li>
            <li><a href="/loginprototype">Loginprototype</a></li>
            <li><a href="/rekond">Bilrekond</a></li>
        </div>

        <section class="about">
            <div class="about-me">
                <h1>Rasmus <span>Mikaelsson</span>.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi necessitatibus placeat, iusto officia, minima dicta iste nobis, nostrum unde sint maiores velit ab ut. Neque officiis sit beatae alias dicta?</p>
            </div>
        </section>
    </header>
</main>

<style>
    main {
        height: 100vh;
        background: #000;
        background-image: url('https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80');
        background-size: cover;
        background-position: center;
    }

    main img {
        position: relative;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1rem;

        transition: all 0.2s ease;
    }

    a:hover {
        color: var(--main-color);
    }

    /* Header */
    header {
        position: relative;
        padding: 0 2rem;
    }

    .navbar {
        width: 100%;
        height: 60px;
        min-width: 95%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .navbar li {
        float: left;
        position: relative;
        width: auto;
    }

    .navbar .logo a{
        font-size: 1.5rem;
        font-weight: bold;
    }

    .navbar .logo span {
        color: var(--main-color);
    }

    .navbar .links {
        display: flex;
        gap: 2.5rem;
    }

    .navbar .toggle_btn {
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
    }

    .action_btn {
        background: var(--main-color);
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        outline: none;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .action_btn:hover {
        scale: 1.05;
        color: white;
    }

    .action_btn:active {
        scale: 0.95;
    }

    /* Dropdown Menu */
    .dropdown_menu {
        display: none;
        position: absolute;
        right: 2rem;
        top: 60px;
        width: 300px;
        height: 0;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.2s ease;
    }

    .dropdown_menu.open {
        height: fit-content;
    }

    .dropdown_menu li {
        padding: 0.7rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* About Section */
    .about {
        margin: 50vh 10vw 0;
        margin-right: 500px;
    }


    .about-me h1,
    .about-me span {
        color: white;
        font-size: 42px;
        text-align: left;
        margin: 10px 0;
    }

    .about-me span {
        color: var(--main-color);
    }

    .about-me p {
        color: white;
        font-size: 20px;
        margin: 10px 0;
    }

    /* Responsivenes */
    @media (max-width: 992px) {
        .navbar .links,
        .navbar .action_btn {
            display: none;
        }

        .navbar .toggle_btn {
            display: block;
        }

        .dropdown_menu {
            display: block;
        }

        .about {
            margin: 45vh 10vw 0;
        }
        .about-me h1,
        .about-me span {
            color: white;
            font-size: 25px;
            text-align: left;
            margin: 10px 0;
        }

        .about-me p {
            font-size: 16px;
        }

        .about-me span {
            color: var(--main-color);
        }
    }

    :root {
        --main-color: orange;
        --background-color: #24262b;
    }

</style>

<!-- <svelte:head>
    <title>Home</title>
</svelte:head>

<main>
    <nav>
        <div class="nav-container">
            <div class="logo">
                <h1>Rasmus Mikaelsson</h1>
            </div>
            <div class="nav-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Games</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <section class="header">
        <div class="header-container">
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sapiente voluptate a culpa doloribus architecto, eligendi nulla expedita magni amet sequi ratione qui ipsum obcaecati fuga. Molestiae eveniet repudiandae deleniti?</p>
            <button>Learn More</button>
        </div>
    </section>
</main>

<style>

.nav-container {
    display: flex;
    justify-content: space-between;
    margin: 40px 60px 40px;
}

.nav-container .logo h1 {
    font-size: 35px;
}

ul {
    display: flex;
    justify-content: space-evenly;

}

.nav-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.nav-items ul li {
    font-size: 18px;
    margin: 0 60px;
}

</style>

<body>
    <header>
        <img src="/homeicon.png" alt="Home" class="homeIcon">
        <ul>
            <li class="home"><a href="">Home</a></li>
            <li class="clicker"><a href="/clicker">Clicker</a></li>
            <li class="todoapp"><a href="/todoapp">To-do App</a></li>
            <li class="telltale"><a href="/telltale">Telltale</a></li>
            <li class="loginprototype"><a href="/loginprototype">Login Prototype</a></li>
        </ul>
    </header>

    <section>
        <img src="/stars.png" class="stars" alt="star" style="width:100%; height:70vh;">
    </section>
    <div class="box">
        <h2>Hello!</h2>
    </div>
    <section>
        <img src="/mountains_front.png" class="mountains_front" alt="mountains_front" style="width:100%; height:100%;">
    
    </section>
</body>

<style>
    .box {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 38%;
        margin-right: 62%;
        margin-bottom: 10px;
        width: 380px;
        height: 420px;
        background: linear-gradient(#2b1055, transparent);
        border-radius: 8px;
    }

    .box h2 {
        color: white;
    }

    .homeIcon {
        height: 7vh;
        aspect-ratio: 1/1;
    }

    .stars {
        z-index: 0;
    }

    .mountains_front {
        z-index: 1;
    }

    .clicker, .telltale, .todoapp, .home, .todoapp,.loginprototype {
        transition: transform 0.3s;
    }

    .clicker:hover, .telltale:hover,.home:hover, .todoapp:hover, .loginprototype:hover {
        transform: translate(0,5px);
    }

    header {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    section{
        position: relative;
        padding:0;
        margin: 0;
    }

    body {
        background: linear-gradient(#2b1055, #7597de);
        padding: 0;
        margin: 0;
    }

    header{
        position: fixed;
        top: 0;
        left: 0;
        right:0;
        padding: 30px 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        z-index: 1000;
    }

    header .logo {
        color: white;
        font-weight: 700;
        text-decoration: none;
        font-size: 2em;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-top: auto;
        margin-bottom: auto;
        padding: 15px;
        border-radius: 20px;
        transition: all 0.3s;
    }

    header .logo:hover {
        transform: translate(0,5px);
        background: white;
        color: #2b1055;
    }

    header ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header li {
        list-style: none;
        margin-left: 20px;
    }

    header ul li a {
        text-decoration: none;
        padding: 15px;
        color: white;
        border-radius: 20px;
        transition: background 0.3s;
    }

    header ul li a:hover {
        background: white;
        color: #2b1055;
        transform: translate(0,5px);
    }
</style> -->