const navbarContent = `
    <nav class="bg-white border-zinc-300 border-y">
      <div class="flex h-16 lg:px-16 px-8 items-center justify-between mx-auto">
        <img src="/Docs/Assets/Images/home/logo.svg" alt="log" class="h-6">
        <ul class="items-center md:flex hidden gap-7 text-[17px]">
          <li class="flex items-center gap-2 cursor-pointer relative py-5" id="dropDownNav">
            Rates <i class="fa-solid fa-angle-down mt-1 text-zinc-700 text-sm transition-all duration-300"></i>
            <div class="border w-60 border-zinc-400 absolute z-20 bg-white left-1 overflow-hidden fadeIn">
              <ul>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">Today's Mortgage Rates</li>
                </a>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">Today's Refinance Rates</li>
                </a>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">Mortgage Calculator</li>
                </a>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">Refinance Calculator</li>
                </a>
              </ul>
            </div>
          </li>
          <li class="flex items-center gap-2 cursor-pointer relative py-5" id="dropDownNav">
            Compare <i class="fa-solid fa-angle-down mt-1 text-zinc-700 text-sm transition-all duration-300"></i>
            <div class="border w-48 border-zinc-400 absolute bg-white left-1 overflow-hidden fadeIn z-20">
              <ul>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">Purchase</li>
                </a>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">Refinance</li>
                </a>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">Home Equity</li>
                </a>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">VA Refi (IRRRL)</li>
                </a>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">FHA</li>
                </a>
              </ul>
            </div>
          </li>
          <li class="flex items-center gap-2 cursor-pointer relative py-5" id="dropDownNav">
            Learn <i class="fa-solid fa-angle-down mt-1 text-zinc-700 text-sm transition-all duration-300"></i>
            <div class="border w-48 border-zinc-400 absolute z-20 bg-white right-0 overflow-hidden fadeIn">
              <ul>
                <a href="/BestMoneyTrendingList/Article.html">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">Articles</li>
                </a>
                <a href="/BestMoneyTrendingList/Reviews.html">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">Reviews</li>
                </a>
              </ul>
            </div>
          </li>
        </ul>
        <i class="fa-solid fa-bars text-2xl md:hidden cursor-pointer" id="openNav"></i>
      </div>
    </nav>

    <!-- Responsive Navbar -->
    <div class="w-full h-screen bg-[#000000a8] fixed bottom-0 z-50 fadeIn left-0 transition-all" id="overlayresNav" style="display: none;"></div>
    <div class="fixed top-0 right-0 h-screen bg-white text-black font-36 z-50 transition-all duration-500" id="responsiveNav" style="width: 0rem;">
      <div class="p-10 relative">
        <i class="fa-solid fa-x absolute right-5 cursor-pointer" id="closeNav"></i>
        <ul class="flex flex-col text-[17px]">
          <li class="items-center gap-2 cursor-pointer relative py-5" id="dropDownNav">
            Pet Type <i class="fa-solid fa-angle-down mt-1 text-zinc-700 text-sm transition-all duration-300"></i>
            <div class="border w-full border-zinc-400 mt-7 bg-white left-1 overflow-hidden fadeIn">
              <ul>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">Dog</li>
                </a>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">Cats</li>
                </a>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">Exotic Pets</li>
                </a>
                <a href="">
                  <li class="px-5 py-3 hover:bg-zinc-200 transition-all">All Pets</li>
                </a>
              </ul>
            </div>
          </li>
          <li class="py-5"><a href="">Reviews</a></li>
          <li class="py-5"><a href="">Learn</a></li>
        </ul>
      </div>
    </div>
    `;

// Inject the navbar content into the DOM
document.getElementById("navbar").innerHTML = navbarContent;

// Navbar interaction logic
const openNav = document.getElementById("openNav");
const responsiveNav = document.getElementById("responsiveNav");
const overlayresNav = document.getElementById("overlayresNav");
const closeNav = document.getElementById("closeNav");

openNav.addEventListener("click", () => {
    responsiveNav.style.width = "22rem";
    overlayresNav.style.display = "block";
});

overlayresNav.addEventListener("click", () => {
    responsiveNav.style.width = "0rem";
    overlayresNav.style.display = "none";
});

closeNav.addEventListener("click", () => {
    responsiveNav.style.width = "0rem";
    overlayresNav.style.display = "none";
});
