<svelte:head>
    <title>Home</title>
</svelte:head>

<script>
    let openBool = false;

    function openMenu() {
        openBool = !openBool;
    }
</script>

<main>
    <header>
        <div class="navbar">
            <div class="logo"><a href="/">Dev <span>Ralle</span>.</a></div>
            <ul class="links">
                <li><a href="/">Home</a></li>
                <li><a href="/clicker">Clicker</a></li>
                <li><a href="/todoapp">Todo</a></li>
                <li><a href="/telltale">Telltale</a></li>
                <li><a href="/memory">Memory</a></li>
                <li><a href="/loginprototype">Loginprototype</a></li>
                <li><a href="/rekond">Bilrekond</a></li>
            </ul>
            <a href="/" class="action_btn">Hejsan!</a>
            <div on:click={() => openMenu()} on:keydown={() => openMenu()} class="toggle_btn">
                <i class="fa-solid fa-bars-staggered" />
            </div>
        </div>

        <div style="z-index: 1000;" class="dropdown_menu" class:open={openBool}>
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
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Animi necessitatibus placeat, iusto officia, minima dicta
                    iste nobis, nostrum unde sint maiores velit ab ut. Neque
                    officiis sit beatae alias dicta?
                </p>
            </div>
        </section>
    </header>
</main>

<style>
    main {
        height: 100vh;
        background: #000;
        background-image: url("https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80");
        background-size: cover;
        background-position: center;
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

    .navbar .logo a {
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
        padding: 0 25px;
        margin-right: 500px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 10px;
        overflow: hidden;
    }

    .about-me h1,
    .about-me span {
        color: white;
        font-size: 42px;
        font-weight: bold;
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
        margin-bottom: 20px;
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
            margin: 55vh 0 0;
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
