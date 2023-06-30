
let openNav = () =>{
    document.getElementById("mySidenav").style.width = "250px";
}
let closeNav = () =>{
    document.getElementById("mySidenav").style.width = "0";
}
let left = document.getElementById("leftSide");
let right = document.getElementById("rightSide");



// Replace this with your desired message
  
 

// let setWidth = setInterval(()=>{
  if(innerWidth <= 845){
   
    document.getElementById("LargeScreen").remove()
    document.getElementById("printSmallScreen").innerHTML = `
    <swiper-container class="mySwiper" slides-per-view="2" centered-slides="true" space-between="30" pagination="true"
    pagination-type="fraction" navigation="true">
 



    <swiper-slide>
      <div class="dealsCard item_direction">
        <div class="mainRebbenSec">
          <button class="bttnCard">
            +Add to Bucket
          </button>

          <div class="redRibbens">
            <div class="redRibben"></div>
            <div class="redRibben left"></div>
            <div class="redRibben left"></div>
          </div>
          <i class="fa-regular fa-heart fa-xl" style="color: #dc1e1e;"></i>
        </div>
        <div>
          <center>
            <img height="170px" src="images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png"
              class="cardimg" alt="...">
          </center>
          <h5 class="name">Crispy Duo Box</h5>
          <p class="name">Twister + 1 Regular fries + 1 Regular <br> drink</p>
          <p class="priceDeal">Rs 640</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="dealsCard item_direction">
        <div class="mainRebbenSec">
          <button class="bttnCard">
            +Add to Bucket
          </button>
          <div class="redRibbens">
            <div class="redRibben"></div>
            <div class="redRibben left"></div>
            <div class="redRibben left"></div>
          </div>
          <i class="fa-regular fa-heart fa-xl" style="color: #dc1e1e;"></i>
        </div>
        <div>
          <center>
            <img height="170px" src="images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png"
              class="cardimg" alt="...">
          </center>
          <h5 class="name">Zinger Stacker Combo</h5>
          <p class="name">1 Zinger Stacker + 1 Regular fries + 1 Regular <br> drink</p>
          <p class="priceDeal">Rs 810</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="dealsCard item_direction">
        <div class="mainRebbenSec">
          <button class="bttnCard">
            +Add to Bucket
          </button>
          <div class="redRibbens">
            <div class="redRibben"></div>
            <div class="redRibben left"></div>
            <div class="redRibben left"></div>
          </div>
          <i class="fa-regular fa-heart fa-xl" style="color: #dc1e1e;"></i>
        </div>
        <div>
          <center>
            <img height="170px" src="images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png"
              class="cardimg" alt="...">
          </center>
          <h5 class="name">Twister Combo</h5>
          <p class="name">Twister + 1 Regular fries + 1 Regular <br> drink</p>
          <p class="priceDeal">Rs 640</p>
        </div>
      </div>
    </swiper-slide>
  </swiper-container>




  <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>

    `
    
  }


else
   
     
document.getElementById("LargeScreen").remove()
      document.getElementById("printSmallScreen").innerHTML = `
      <swiper-container class="mySwiper" slides-per-view="1" centered-slides="true" space-between="30" pagination="true"
      pagination-type="fraction" navigation="true">
    <!-- swiper-slide elements -->
  
  
  
      <swiper-slide>
        <div class="dealsCard item_direction">
          <div class="mainRebbenSec">
            <button class="bttnCard">
              +Add to Bucket
            </button>
  
            <div class="redRibbens">
              <div class="redRibben"></div>
              <div class="redRibben left"></div>
              <div class="redRibben left"></div>
            </div>
            <i class="fa-regular fa-heart fa-xl" style="color: #dc1e1e;"></i>
          </div>
          <div>
            <center>
              <img height="170px" src="images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png"
                class="cardimg" alt="...">
            </center>
            <h5 class="name">Crispy Duo Box</h5>
            <p class="name">Twister + 1 Regular fries + 1 Regular <br> drink</p>
            <p class="priceDeal">Rs 640</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dealsCard item_direction">
          <div class="mainRebbenSec">
            <button class="bttnCard">
              +Add to Bucket
            </button>
            <div class="redRibbens">
              <div class="redRibben"></div>
              <div class="redRibben left"></div>
              <div class="redRibben left"></div>
            </div>
            <i class="fa-regular fa-heart fa-xl" style="color: #dc1e1e;"></i>
          </div>
          <div>
            <center>
              <img height="170px" src="images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png"
                class="cardimg" alt="...">
            </center>
            <h5 class="name">Zinger Stacker Combo</h5>
            <p class="name">1 Zinger Stacker + 1 Regular fries + 1 Regular <br> drink</p>
            <p class="priceDeal">Rs 810</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="dealsCard item_direction">
          <div class="mainRebbenSec">
            <button class="bttnCard">
              +Add to Bucket
            </button>
            <div class="redRibbens">
              <div class="redRibben"></div>
              <div class="redRibben left"></div>
              <div class="redRibben left"></div>
            </div>
            <i class="fa-regular fa-heart fa-xl" style="color: #dc1e1e;"></i>
          </div>
          <div>
            <center>
              <img height="170px" src="images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png"
                class="cardimg" alt="...">
            </center>
            <h5 class="name">Twister Combo</h5>
            <p class="name">Twister + 1 Regular fries + 1 Regular <br> drink</p>
            <p class="priceDeal">Rs 640</p>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  
  
  
  
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>
  
      `
    
// },100)
