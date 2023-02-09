<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
</svelte:head>

<a href="http://localhost:5173/" class="home" style="color: #666666; padding: 5px;">Home</a>

<script>
                        // QUESTIONS
    let questionIndex = 0;
    let questionAray = [{question:'You find an abandned bag with lots of money. What do you do?',
                                options:[{option:"Keep the money for yourself?",next_question_id:1},
                                         {option:"Report it to the police?", next_question_id:0}], 
                                         id:0},
                        {question:'You decided to take the money. How will you proceed?',
                                options:[{option:"Invest in a shady business for a chance to make even more money?",next_question_id:2},
                                         {option:"Buy a Bugatti?", next_question_id:3}], 
                                         id:1},
                        {question:'The next day, you are watching the news and you find out that the money was stolen. What do you do?',
                                options:[{option:"Admit that you took the money?",next_question_id:5},
                                         {option:"Keep investing in the shady business", next_question_id:6}], 
                                         id:2},
                        {question:'You decided to buy a Bugatti. One of oyur friends car breaks down and he steals your brand new Bugatti. What do yo do now?',
                                options:[{option:"Report your freind and the stealing of your car to the police?",next_question_id:5},
                                         {option:"Do nothing about it?", next_question_id:4}], 
                                         id:3},


                        // GOOD ENDINGS
                        {question:'You do not do nothing about it, because you have so much money you can just buy a new car instead. Congrats, you made it out with the money and continued to make good decisions in order for your money to grow! ',
                                options:[], 
                                         id:4},

                        // BAD ENDINGS
                        {question: 'You choose to report the stealing of your brand new car and the police decides to do some more digging and finds out your fraud. You get put in prison!',
                                options:[],
                                         id:5},
                        {question:'The business fails and you get murdered! Wasted',
                                options:[], 
                                         id:6}];

</script>

    <main>
        <title class="title">Telltale Story</title>
        
        <h1>Telltale Story</h1>
        <div class="container">
          <p>
            {questionAray[questionIndex].question}
          </p>
          {#each questionAray[questionIndex].options as option}
            <p>
            <button class="btn" on:click={()=>{questionIndex= option.next_question_id}}>{option.option}</button>
          </p>
          {/each}

          {#if questionAray[questionIndex].options.length == 0}
          <button class="reset" on:click={()=>{questionIndex= 0}}>Restart</button>

          {/if}
        
        </div>
    </main>

    <style>
       p {
        font-family: Georgia;
        border: none;
        background-color: none;
        }
        
        main {
          font-family: Georgia;
          font-size: 1.25em;
          background-color: #f2f2f2;
          min-height: 100vh;
        }

        h1 {
          font-size: 1.5em;
          font-weight: bold;
          text-align: center;
          color: #666;
        }

        .container {
          font-family: Georgia;
          padding: 1em;
          width: 500px;
          margin: 0 auto;
          background-color: #fff;
        }

        .btn {
          font-family: Georgia;
          background-color: #ccc;
          padding: 0.25em 0.5em;
          border: none;
          font-size: 1em;
          font-weight: bold;
          cursor: pointer;

          transition: all 0.3s;
        }

        .btn:hover {
          transform: translate(0,-3.5px);
          background-color: #525151;
        }

        .reset {
          transition: all 0.3s;
        }

        .reset:hover {
          transform: translate(0,-3.5px);
        }

      </style>