<main data-theme="cupcake">
  <div class="navbar bg-base-300">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 bg-base-300 rounded-box w-56">
          <li class=""><a href="/bilrekond">Hem</a></li>
          <li class=""><a href="/bilrekond/tvätt">Tvätt</a></li>
          <li class=""><a href="/bilrekond/information">Information</a></li>
          <li class=""><a href="/bilrekond/kontakt">Kontakt</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl">Bilrekond AB</a>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span class="badge badge-sm indicator-item">9</span>
          </div>
        </label>
        <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-300 shadow">
          <div class="card-body">
            <span class="font-bold text-lg">8 Items</span>
            <span >Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="min-h-screen bg-base-100">
      <div class="text-center">
        <div>
          <div class="helaBilboxen">
            <div class="flex flex-col w-full border-opacity-50">
              <div class="divider">Vänligen välj typ av bil</div>
            </div>
            <div class="biltypBox" id="biltyp">
              <label class="label cursor-pointer grund">
                <div class="label">
                  <input type="radio" name="radio" class="radio" value="personbil" checked on:click={()=>{
                    selectedPris = personbilArr;
                  }}/>
                  <div class="label btn btn-ghost no-animation">
                    Personbil
                  </div>
                </div>
              </label>
              <label class="label cursor-pointer grund">
                <div class="label">
                  <input type="radio" name="radio" class="radio" value="familjebil" on:click={()=>{
                    selectedPris = familjebilArr;
                  }}>
                  <div class="label btn btn-ghost no-animation">
                    Familjebil
                  </div>
                </div>
              </label>
              <label class="label cursor-pointer grund">
                <div class="label">
                  <input type="radio" name="radio" class="radio" value="minibuss" on:click={()=>{
                    selectedPris = minibussArr;
                  }}/>
                  <div class="label btn btn-ghost no-animation">
                    Minibuss
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div class="text">
            <h1>Vänligen kryssa i vad som önskas göras på din bil!</h1>
            <h2>"För mer information, klicka på alternativet som önskas."</h2>
          </div>
          <div class="valBox">
            <div class="left">
              <div class="flex flex-col w-full border-opacity-50">
                <div class="divider">Enkel</div>
              </div>
              <label class="label cursor-pointer grund bara">
                <div class="label">
                  <input on:change={()=>{
                    rasmusbool = !rasmusbool;
                  }} type="checkbox" class="checkbox" id="stad" />
                  <label for="städ" class="btn btn-ghost bara">Invändigt Städ</label>
                  <input type="checkbox" id="städ" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg">Invändigt Städ</h3>
                      <p class="py-4">**invändigt städ** information</p>
                      <div class="modal-action">
                        <label for="städ" class="btn">Stäng</label>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool}>+{selectedPris[0]}kr</span>
              </label>
              <label class="label cursor-pointer grund bara">
                <div class="label">
                  <input on:change={()=>{
                    rasmusbool1 = !rasmusbool1;
                  }} type="checkbox" class="checkbox" id="utvandigTvatt" />
                  <label for="utvändigTvätt" class="btn btn-ghost bara">Utvändig Tvätt</label>
                  <input type="checkbox" id="utvändigTvätt" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg">Utvändig Tvätt</h3>
                      <p class="py-4">**utvändig tvätt** information</p>
                      <div class="modal-action">
                        <label for="utvändigTvätt" class="btn">Stäng</label>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool1}>+{selectedPris[1]}kr</span>
              </label>
              <div class="flex flex-col w-full border-opacity-50">
                <div class="divider">Rekond</div>
              </div>
              <label class="label cursor-pointer extraTillval bara">
                <div class="label">
                  <input on:click={()=>{
                    autoCheck(); selectRadio(2); autoCheckMotortvatt();
                  }} type="radio" name="radioRekond" class="radio" id="deluxPaketet"/>
                  <label for="deluxpaket" class="btn btn-ghost bara">Deluxpaket</label>
                  <input type="checkbox" id="deluxpaket" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg">Deluxpaket</h3>
                      <p class="py-4">**deluxpaketet** information</p>
                      <div class="modal-action">
                        <label for="deluxpaket" class="btn">Stäng</label>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool2}>+{selectedPris[2]}kr</span>
              </label>
              <label class="label cursor-pointer grund bara">
                <div class="label">
                  <input on:change={()=>{
                  autoCheckVaxningMotortvatt(); selectRadio(3); autoCheck();
                  }} type="radio" name="radioRekond" class="radio" id="grundRekond"/>
                  <label for="grundrekond" class="btn btn-ghost bara">Grundrekond</label>
                  <input type="checkbox" id="grundrekond" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg">Grundrekond</h3>
                      <p class="py-4">**grundrekond** information</p>
                      <div class="modal-action">
                        <label for="grundrekond" class="btn">Stäng</label>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool3}>+{selectedPris[3]}kr</span>
              </label>
              <label class="label cursor-pointer grund bara">
                <div class="label">
                  <input on:click={()=>{
                    selectRadio(4); autoCheck(); autoCheckMotorTvattPolering();
                  }} type="radio" name="radioRekond" class="radio" id="helrekondSteg_1"/>
                  <label for="helrekondSteg1" class="btn btn-ghost bara">Helrekond Steg 1</label>
                  <input type="checkbox" id="helrekondSteg1" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg">Helrekond Steg 1</h3>
                      <p class="py-4">**helrekond steg 1** information</p>
                      <div class="modal-action">
                        <label for="helrekondSteg1" class="btn">Stäng</label>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool4}>+{selectedPris[4]}kr</span>
              </label>
              <label class="label cursor-pointer grund bara">
                <div class="label">
                  <input on:click={()=>{
                    selectRadio(5); autoCheck(); autoCheckMotorTvattPoleringKladselTvatt();
                  }} type="radio" name="radioRekond" class="radio" id="helrekondSteg_2" />
                  <label for="helrekondSteg2" class="btn btn-ghost bara">Helrekond Steg 2</label>
                  <input type="checkbox" id="helrekondSteg2" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg">Helrekond Steg 2</h3>
                      <p class="py-4">**helrekond steg 2** information</p>
                      <div class="modal-action">
                        <label for="helrekondSteg2" class="btn">Stäng</label>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool5}>+{selectedPris[5]}kr</span>
              </label>
              <label class="label cursor-pointer grund bara">
                <div class="label">
                  <input on:click={()=>{
                    selectRadio(6); autoCheck(); autoCheckMotorTvattPoleringKladselTvattGlansforsegling()
                  }} type="radio" name="radioRekond" class="radio" id="helrekondSteg_3" />
                  <label for="helrekondSteg3" class="btn btn-ghost bara">Helrekond Steg 3</label>
                  <input type="checkbox" id="helrekondSteg3" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg">Helrekond Steg 3</h3>
                      <p class="py-4">**helrekond steg 3** information</p>
                      <div class="modal-action">
                        <label for="helrekondSteg3" class="btn">Stäng</label>
                      </div>
                    </div>
                  </div>
                </div>
                <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool6}>+{selectedPris[6]}kr</span>
              </label>
            </div>
            <div class="right">
              <div>
                <div class=" border-opacity-50">
                  <div class="divider">Extra Tillval</div>
                </div>
                <label class="label cursor-pointer extraTillval">
                  <div class="label">
                    <input on:change={()=>{
                      rasmusbool7 = !rasmusbool7; autoCheckPolering(); rasmusbool8 = true;
                    }} type="checkbox" class="checkbox" id="vaxning" />
                    <label for="vaxning" class="btn btn-ghost">Vaxning</label>
                    <input type="checkbox" id="vaxning" class="modal-toggle" />
                    <div class="modal">
                      <div class="modal-box">
                        <h3 class="font-bold text-lg">Vaxning</h3>
                        <p class="py-4">**vaxning** information</p>
                        <div class="modal-action">
                          <label for="vaxning" class="btn">Stäng</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool7}>+{selectedPris[7]}kr</span>
                </label>
                <label class="label cursor-pointer extraTillval">
                  <div class="label">
                    <input on:change={()=>{
                      rasmusbool8 = !rasmusbool8; autoCheckVaxning(); rasmusbool7 = true;
                    }} type="checkbox" class="checkbox" id="polering" />
                    <label for="polering" class="btn btn-ghost">Polering + Vaxning</label>
                    <input type="checkbox" id="polering" class="modal-toggle" />
                    <div class="modal">
                      <div class="modal-box">
                        <h3 class="font-bold text-lg">Polering + Vaxning</h3>
                        <p class="py-4">**polering + vaxning** information</p>
                        <div class="modal-action">
                          <label for="polering" class="btn">Stäng</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool8}>+{selectedPris[8]}kr</span>
                </label>
                <label class="label cursor-pointer extraTillval">
                  <div class="label">
                    <input on:change={()=>{
                      rasmusbool9 = !rasmusbool9;
                    }} type="checkbox" class="checkbox" id="kladselTvatt"/>
                    <label for="klädseltvätt" class="btn btn-ghost">Klädseltvätt</label>
                    <input type="checkbox" id="klädseltvätt" class="modal-toggle" />
                    <div class="modal">
                      <div class="modal-box">
                        <h3 class="font-bold text-lg">Klädseltvätt</h3>
                        <p class="py-4">**klädseltvätt** information</p>
                        <div class="modal-action">
                          <label for="klädseltvätt" class="btn">Stäng</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool9}>+{selectedPris[9]}kr</span>
                </label>
                <label class="label cursor-pointer extraTillval">
                  <div class="label">
                    <input on:change={()=>{
                      rasmusbool10 = !rasmusbool10;
                    }} type="checkbox" class="checkbox" id="dackByte" />
                    <label for="däckbyte" class="btn btn-ghost">Däckbyte</label>
                    <input type="checkbox" id="däckbyte" class="modal-toggle" />
                    <div class="modal">
                      <div class="modal-box">
                        <h3 class="font-bold text-lg">Däckbyte</h3>
                        <p class="py-4">**däckbyte** information</p>
                        <div class="modal-action">
                          <label for="däckbyte" class="btn">Stäng</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool10}>+{selectedPris[10]}kr</span>
                </label>
                <label class="label cursor-pointer extraTillval">
                  <div class="label">
                    <input on:change={()=>{
                      rasmusbool11 = !rasmusbool11;
                    }} type="checkbox" class="checkbox" id="motorTvatt" />
                    <label for="motortvätt" class="btn btn-ghost">Motortvätt</label>
                    <input type="checkbox" id="motortvätt" class="modal-toggle" />
                    <div class="modal">
                      <div class="modal-box">
                        <h3 class="font-bold text-lg">Motortvätt</h3>
                        <p class="py-4">**motortvätt** information</p>
                        <div class="modal-action">
                          <label for="motortvätt" class="btn">Stäng</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool11}>+{selectedPris[11]}kr</span>
                </label>
                <label class="label cursor-pointer extraTillval">
                  <div class="label">
                    <input on:change={()=>{
                      rasmusbool12 = !rasmusbool12;
                    }} type="checkbox" class="checkbox" id="glansForsegling" />
                    <label for="glansförsegling" class="btn btn-ghost">Glansförsegling</label>
                    <input type="checkbox" id="glansförsegling" class="modal-toggle" />
                    <div class="modal">
                      <div class="modal-box">
                        <h3 class="font-bold text-lg">Glansförsegling</h3>
                        <p class="py-4">**glansförsegling** information</p>
                        <div class="modal-action">
                          <label for="glansförsegling" class="btn">Stäng</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span class="badge badge-sm indicator-item pris" class:hidden={rasmusbool12}>+{selectedPris[12]}kr</span>
                </label>
              </div>




              <div style="margin-top: 30px;">
                <button on:click={()=>{
                  avmarkeraAllt();
                }} class="btn">Avmarkera allt</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="nästa">
    <a href="mailto:ralle.mikaelsson@hotmail.com?subject=Bilrekonditionering: &body=Vad:"><button class="btn btn-lg">Färdig? Tryck för att Kontakta</button></a>
  </div>
  <div class="bg-base-100 flex flex-col w-full border-opacity-50">
    <div class="divider">Products</div>
  </div>
  <div class="kortBox bg-base-100">
    <div class="kort">
      <div class="card w-96 glass">
        <figure><img src="/schampo.png" alt="schampo"/></figure>
        <div class="card-body">
          <h2 class="card-title">Schampo</h2>
          <p>**shampo** information</p>
          <div class="card-actions justify-end">
            <button class="btn">Läs Mer!</button>
          </div>
        </div>
      </div>
    </div>
    <div class="kort">
      <div class="card w-96 glass">
        <figure><img src="/flygrost.png" alt="flygrost"/></figure>
        <div class="card-body">
          <h2 class="card-title">Flygrost</h2>
          <p>**flygrost** information</p>
          <div class="card-actions justify-end">
            <button class="btn">Läs Mer!</button>
          </div>
        </div>
      </div>
    </div>
    <div class="kort">
      <div class="card w-96 glass">
        <figure><img src="/foam.png" alt="foam lance skum"/></figure>
        <div class="card-body">
          <h2 class="card-title">Foam Lance Skum</h2>
          <p>**foam lance skum** information</p>
          <div class="card-actions justify-end">
            <button class="btn">Läs Mer!</button>
          </div>
        </div>
      </div>
    </div>
    <div class="kort">
      <div class="card w-96 glass">
        <figure><img src="/alkaliskavfettning.png" alt="alkalisk avfettning"/></figure>
        <div class="card-body">
          <h2 class="card-title">Alkalisk Avfettning</h2>
          <p>**alkalisk avfettning** information</p>
          <div class="card-actions justify-end">
            <button class="btn">Läs Mer!</button>
          </div>
        </div>
      </div>
    </div>
    <div class="kort">
      <div class="card w-96 glass">
        <figure><img src="/multi.png" alt="multirengöring"/></figure>
        <div class="card-body">
          <h2 class="card-title">Multirengöring</h2>
          <p>**multirengöring** information</p>
          <div class="card-actions justify-end">
            <button class="btn">Läs Mer!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <div>
        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
        <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
      </div>
      <div>
        <span class="footer-title">Social</span>
        <div class="grid grid-flow-col gap-4">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
      </div>
    </footer>
  </div>
</main>




<script>

  import { onMount } from 'svelte';

  let photos = [];

  onMount(async () => {
    const res = await fetch(`/tutorial/api/album`);
    photos = await res.json();
  });

  let rasmusbool = true;
  let rasmusbool1 = true;
  let rasmusbool2 = true;
  let rasmusbool3 = true;
  let rasmusbool4 = true;
  let rasmusbool5 = true;
  let rasmusbool6 = true;
  let rasmusbool7 = true;
  let rasmusbool8 = true;
  let rasmusbool9 = true;
  let rasmusbool10 = true;
  let rasmusbool11 = true;
  let rasmusbool12 = true;
  let städPrisPersonbil = 299;
  let städFamiljebil = 399;
  let städPrisMinibuss =599;
  let utvändigTvättPrisPersonbil = 199;
  let utvändigTvättPrisFamiljeBil = 249;
  let utvändigTvättPrisMinibuss = 349;
  let deluxpaketPrisPersonbil = 599;
  let deluxpaketPrisFamiljebil = 699;
  let deluxpaketPrisMinibuss = 799;
  let grundrekondPrisPersonbil = 1499;
  let grundrekondPrisFamiljebil = 2199;
  let grundrekondPrisMinibuss = 2199;
  let helrekondSteg1PrisPersonbil = 1999;
  let helrekondSteg1PrisFamiljebil = 2499;
  let helrekondSteg1PrisMinibuss = 2499;
  let helrekondSteg2PrisPersonbil = 2499;
  let helrekondSteg2PrisFamiljebil = 2999;
  let helrekondSteg2PrisMinibuss = 2999;
  let helrekondSteg3PrisPersonbil = 3499;
  let helrekondSteg3PrisFamiljebil = 3999;
  let helrekondSteg3PrisMinibuss = 3999;
  let vaxningPersonbil = 799;
  let vaxningFamiljebil = 1299;
  let vaxningMinibuss = 1799;
  let poleringPersonbil = 1499;
  let poleringFamiljebil = 1899;
  let poleringMinibuss = 2999;
  let klädseltvättPersonbil = 899;
  let klädseltvättFamiljebil = 1299;
  let klädseltvättMinibuss = 1799;
  let däckbytePersonbil = 149;
  let däckbyteFamiljebil = 149;
  let däckbyteMinibuss = 299;
  let motortvättPersonbil = 199;
  let motortvättFamiljebil = 199;
  let motortvättMinibuss = 199
  let glasFörsegling = 1499;




  var personbilArr = [städPrisPersonbil, utvändigTvättPrisPersonbil, deluxpaketPrisPersonbil,
                      grundrekondPrisPersonbil, helrekondSteg1PrisPersonbil, helrekondSteg2PrisPersonbil,
                      helrekondSteg3PrisPersonbil, vaxningPersonbil, poleringPersonbil, klädseltvättPersonbil,
                      däckbytePersonbil, motortvättPersonbil, glasFörsegling];




  var familjebilArr = [städFamiljebil, utvändigTvättPrisFamiljeBil, deluxpaketPrisFamiljebil,
                      grundrekondPrisFamiljebil,helrekondSteg1PrisFamiljebil, helrekondSteg2PrisFamiljebil,
                      helrekondSteg3PrisFamiljebil, vaxningFamiljebil, poleringFamiljebil, klädseltvättFamiljebil,
                      däckbyteFamiljebil, motortvättFamiljebil, glasFörsegling];




  var minibussArr = [städPrisMinibuss, utvändigTvättPrisMinibuss, deluxpaketPrisMinibuss,
                    grundrekondPrisMinibuss, helrekondSteg1PrisMinibuss, helrekondSteg2PrisMinibuss,
                    helrekondSteg3PrisMinibuss, vaxningMinibuss, poleringMinibuss, klädseltvättMinibuss,
                    däckbyteMinibuss, motortvättMinibuss, glasFörsegling];




  let selectedPris = personbilArr;




  function selectRadio(index){
    rasmusbool = index != 0;
    rasmusbool1 = index != 1;
    rasmusbool2 = index != 2;
    rasmusbool3 = index != 3;
    rasmusbool4 = index != 4;
    rasmusbool5 = index != 5;
    rasmusbool6 = index != 6;
    rasmusbool7 = index != 7;
    rasmusbool8 = index != 8;
    rasmusbool9 = index != 9;
    rasmusbool10 = index != 10;
    rasmusbool11 = index != 11;
    rasmusbool12 = index != 12;
  }




  function avmarkeraAllt() {
    document.getElementById("stad").checked = false;
    document.getElementById("stad").disabled = false;
    document.getElementById("utvandigTvatt").checked = false;
    document.getElementById("utvandigTvatt").disabled = false;
    document.getElementById("deluxPaketet").checked = false;
    document.getElementById("grundRekond").checked = false;
    document.getElementById("helrekondSteg_1").checked = false;
    document.getElementById("helrekondSteg_2").checked = false;
    document.getElementById("helrekondSteg_3").checked = false;
    document.getElementById("vaxning").checked = false;
    document.getElementById("vaxning").disabled = false;
    document.getElementById("polering").checked = false;
    document.getElementById("polering").disabled = false;
    document.getElementById("kladselTvatt").checked = false;
    document.getElementById("kladselTvatt").disabled = false;
    document.getElementById("dackByte").checked = false;
    document.getElementById("dackByte").disabled = false;
    document.getElementById("motorTvatt").checked = false;
    document.getElementById("motorTvatt").disabled = false;
    document.getElementById("glansForsegling").checked = false;
    document.getElementById("glansForsegling").disabled = false;
    rasmusbool = true;
    rasmusbool1 = true;
    rasmusbool2 = true;
    rasmusbool3 = true;
    rasmusbool4 = true;
    rasmusbool5 = true;
    rasmusbool6 = true;
    rasmusbool7 = true;
    rasmusbool8 = true;
    rasmusbool9 = true;
    rasmusbool10 = true;
    rasmusbool11 = true;
    rasmusbool12 = true;
  }




  function autoCheck() {
    if (document.getElementById("deluxPaketet").checked == true) {
      document.getElementById("stad").disabled = true;
      document.getElementById("stad").checked = false;
      document.getElementById("utvandigTvatt").disabled= true;
      document.getElementById("utvandigTvatt").checked = false;
      document.getElementById("vaxning").checked = false;
      document.getElementById("vaxning").disabled = false;
      document.getElementById("polering").checked = false;
      document.getElementById("polering").disabled = false;
      document.getElementById("kladselTvatt").checked = false;
      document.getElementById("dackByte").checked = false;
      document.getElementById("motorTvatt").checked = false;
      document.getElementById("motorTvatt").disabled = false;
      document.getElementById("glansForsegling").checked = false;
      document.getElementById("glansForsegling").disabled = false;
    }
     
  }
    // Grundrekond
  function autoCheckVaxningMotortvatt() {
    if (document.getElementById("grundRekond").checked == true) {
      document.getElementById("stad").disabled = true;
      document.getElementById("stad").checked = false;
      document.getElementById("utvandigTvatt").disabled= true;
      document.getElementById("utvandigTvatt").checked = false;
      document.getElementById("vaxning").checked = false;
      document.getElementById("vaxning").disabled = true;
      document.getElementById("polering").checked = false;
      document.getElementById("polering").disabled = false;
      document.getElementById("kladselTvatt").checked = false;
      document.getElementById("dackByte").checked = false;
      document.getElementById("motorTvatt").checked = false;
      document.getElementById("motorTvatt").disabled = true;
      document.getElementById("glansForsegling").checked = false;
      document.getElementById("glansForsegling").disabled = false;
    }
  }
    // Helrekond Steg 1
  function autoCheckMotorTvattPolering() {
    if (document.getElementById("helrekondSteg_1").checked == true) {
      document.getElementById("stad").disabled = true;
      document.getElementById("stad").checked = false;
      document.getElementById("utvandigTvatt").disabled= true;
      document.getElementById("utvandigTvatt").checked = false;
      document.getElementById("vaxning").checked = false;
      document.getElementById("vaxning").disabled = true;
      document.getElementById("polering").checked = false;
      document.getElementById("polering").disabled = true;
      document.getElementById("kladselTvatt").checked = false;
      document.getElementById("kladselTvatt").disabled = false;
      document.getElementById("dackByte").checked = false;
      document.getElementById("dackByte").disabled = false;
      document.getElementById("motorTvatt").checked = false;
      document.getElementById("motorTvatt").disabled = true;
    }
  }
    //Helrekond Steg 2
  function autoCheckMotorTvattPoleringKladselTvatt() {
    if (document.getElementById("helrekondSteg_2").checked == true) {
      document.getElementById("stad").disabled = true;
      document.getElementById("stad").checked = false;
      document.getElementById("utvandigTvatt").disabled= true;
      document.getElementById("utvandigTvatt").checked = false;
      document.getElementById("vaxning").checked = false;
      document.getElementById("vaxning").disabled = true;
      document.getElementById("polering").checked = false;
      document.getElementById("polering").disabled = true;
      document.getElementById("kladselTvatt").checked = false;
      document.getElementById("kladselTvatt").disabled = true;
      document.getElementById("dackByte").checked = false;
      document.getElementById("dackByte").disabled = false;
      document.getElementById("motorTvatt").checked = false;
      document.getElementById("motorTvatt").disabled = true;
      document.getElementById("glansForsegling").checked = false;
      document.getElementById("glansForsegling").disabled = false;
    }
  }
    // Helrekond Steg 3
  function autoCheckMotorTvattPoleringKladselTvattGlansforsegling() {
    if (document.getElementById("helrekondSteg_3").checked == true) {
      document.getElementById("stad").disabled = true;
      document.getElementById("stad").checked = false;
      document.getElementById("utvandigTvatt").disabled= true;
      document.getElementById("utvandigTvatt").checked = false;
      document.getElementById("vaxning").checked = false;
      document.getElementById("vaxning").disabled = true;
      document.getElementById("polering").checked = false;
      document.getElementById("polering").disabled = true;
      document.getElementById("kladselTvatt").checked = false;
      document.getElementById("kladselTvatt").disabled = true;
      document.getElementById("dackByte").checked = false;
      document.getElementById("dackByte").disabled = false;
      document.getElementById("motorTvatt").checked = false;
      document.getElementById("motorTvatt").disabled = true;
      document.getElementById("glansForsegling").checked = false;
      document.getElementById("glansForsegling").disabled = true;
    }
  }




  function autoCheckVaxning() {
    if(document.getElementById("vaxning").checked == true) {
      document.getElementById("vaxning").checked = false;
    }
  }
 
    function autoCheckPolering() {
    if (document.getElementById("polering").checked == true) {
      document.getElementById("polering").checked = false;
    }
  }




</script>




<style>
  #nästa {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }




  .biltypBox {
    display: flex;
    justify-content:center;
  }




  .helaBilboxen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px auto;
    padding: 0.5rem 2rem;
    max-width: fit-content;
    border-radius: 5px;
    background: hsl(var(--b3));
  }




  .text {
    margin-bottom: 20px;
  }




  .hidden {
    visibility: hidden;
  }




  .kortBox{
    display: flex;
    justify-content: center;
    margin: auto;
    flex-wrap: wrap;
    max-width: 75vw;
  }
  .kort {
    padding: 25px;
  }




  .left, .right {
    background: hsl(var(--b3));
    padding: 0.5rem 2rem;
    width: 25vw;
    border-radius: 5px;
  }




  .valBox {
    display: flex;
    padding: 40px;
   
    justify-content: space-evenly;
  }




  .grund, .extraTillval {
    display: flex;
    justify-content: flex-start;
  }
</style>