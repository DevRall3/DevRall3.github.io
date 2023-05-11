<svelte:head>
  <title>Memory Game</title>
</svelte:head>

<script>
    let cards = [];
    let imgList = ['notrick.gif','moon.png','memorycard.jpg'];
    for (let index = 0; index < imgList.length*2; index++) {
      cards.push({
        id: index, 
        img: imgList[Math.floor(index/2)],
        flipped: false,
        completed: false,
      });
    }
    shuffleArray(cards)
    let flipcount = 0;
    function flip(card) {
      card.flipped = true;
      flipcount = flipcount + 1;
      // flip card over if two cards are not already flipped
      // TODO: and card is already not flipped
      if (card.flipped && flipcount <= 2) {
        for (var i = 0; i < cards.length; i++) {
          if (cards[i].flipped && !cards[i].completed && cards[i].id !== card.id) {
            if (cards[i].img === card.img) {
              card.completed = true;
              cards[i].completed = true;
            } else {
              setTimeout(() => {
                card.flipped = false;
                cards[i].flipped = false;
              }, 1000);
            }
            break;
          }
        }

    //Do something
        // TODO: Probably do what?
        // flip the cards over after 2s from seeing both cards
        if (flipcount == 2) {
          setTimeout(() => {
            // flip over cards that have not been marked as "completed"
            cards.forEach((card) => {
              card.flipped = card.completed;
            });
            flipcount = 0;
            cards = cards;
          }, 1500);
        }
        cards = cards;
      } 
      
      else {
        alert("chill");
      }
    }

    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
    }
  </script>
  
  <main>
    <div class="row">
      {#each cards as card, i}
        <div
          on:click={() => {
            flip(card);
          }}
          on:keypress={() => {
            flip(card);
          }}
          class:flipped={card.flipped}
          class="card"
        >
          <img class="front" src={card.img} alt="" />
          <img class="back" src='./memorycard.jpg' alt="" />
        </div>
      {/each}
    </div>
  </main>
  
  <style>
    main {
      margin-top: 50px;
      display: flex;
      place-content: center;
      place-items: center;
    }
    .row {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(4, 150px);
      grid-template-rows: repeat(4, 150px);
    }
    .card {
      border: 1px solid black;
      cursor: pointer;
      transition: transform 1s;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
    }
    .card.flipped {
      transform: rotateY(180deg);
    }
    .card .back {
      transform: rotateY(0deg);
    }
    .card .front {
      transform: rotateY(180deg);
    }
    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      position: absolute;
      border-radius: 16px;
    }
  </style>