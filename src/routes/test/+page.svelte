<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
</svelte:head>

<main>
  <title>Home</title>
  
  <div class="topLinks">
    <a class="linkClass" href="http://localhost:5173/">Home</a>
    <a class="linkClass" href="http://localhost:5173/telltale/">Telltale </a>
    <a class="linkClass" href="http://localhost:5173/clicker/">Clicker </a>
    <a class="linkClass" href="http://localhost:5173/todoapp/">To-do App</a>
    <a class="linkClass" href="http://localhost:5173/typegame/">Typegame</a>
  </div>
  <body>
    <div class="main">
      <h1>Hub</h1>
      
      <div class="intro">
        <h2>Welcome to the main page of my website!</h2>
        <p>This is my website. In the top bar there are four games at the moment for you to choose from. Feel free to visit one or two games!</p>
      </div>
      

    </div>
  </body>
  

</main>


<style>
  h1 {
    color: white; 
  }

  h2 {
    color: white;
  }
  .intro {

  }

  .main {
    background-color: #23395d;
  }
   .topLinks{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 15%;
    background-color: #152238;
  }

   body {
    background-color: #23395d;
  }

  .linkClass{
    color: white;
    text-decoration: none;
    padding: 10px;
    font-size: medium;

    transition: all 0.3s;
  }

  .linkClass:hover{
    font-size: large;
  }


</style>