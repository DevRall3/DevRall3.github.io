<body>
    <header>
        <img src="/homeicon.png" alt="Home" class="homeIcon">
        <ul>
            <li class="home"><a href="">Home</a></li>
            <li class="clicker"><a href="http://localhost:5173/clicker">Clicker</a></li>
            <li class="todoapp"><a href="http://localhost:5173/todoapp">To-do App</a></li>
            <li class="telltale"><a href="http://localhost:5173/telltale">Telltale</a></li>
            <li class="loginprototype"><a href="http://localhost:5173/loginprototype">Login Prototype</a></li>
        </ul>
    </header>

    <section>
        <img src="/stars.png" class="stars" alt="star" style="width:100%; height:70vh;">
    </section>
    <div class="box">
        <h2>Hello</h2>
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
</style>