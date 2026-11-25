const CATEGORIES = [
  { id: "all", name: "Barcha mahsulotlar", subs: ["11.11 Xitlar", "50% gacha chegirma", "0-0-12 Muddatli to‘lov"] },
  { id: "electronics", name: "Elektronika", subs: ["Smartfonlar", "Quloqchinlar", "Smart soatlar", "Noutbuklar"] },
  { id: "appliances", name: "Maishiy texnika", subs: ["Kir yuvish mashinalari", "Changyutgichlar", "Mikroto‘lqinli pechlar", "Choynaklar"] },
  { id: "clothing", name: "Kiyim-kechak", subs: ["Kurtkalar", "Futbolkalar", "Shimlar", "Xudilar"] },
  { id: "footwear", name: "Poyabzal", subs: ["Krossovkalar", "Botinkalar", "Kundalik oyoq kiyim"] },
  { id: "cosmetics", name: "Kosmetika", subs: ["Yuz parvarishi", "Atirlar", "Soch parvarishi"] },
  { id: "home", name: "Uy-ro‘zg‘or buyumlari", subs: ["Idish-tovoq", "Interyer", "Tekstil"] },
  { id: "kids", name: "Bolalar mahsulotlari", subs: ["O‘yinchoqlar", "Bolalar kiyimi", "Maktab anjomlari"] }
];

const CATEGORY_TEMPLATES = {
  electronics: {
    basePrice: 1450000,
    stepPrice: 135000,
    models: [
      "Smartfon Galaxy Pro 11.11 Edition",
      "Simsiz quloqchin ANC Max",
      "Smart soat AMOLED Watch S9",
      "Noutbuk Ultrabook 15.6 FHD",
      "Planshet Tab Ultra 11 dyuym",
      "Powerbank 20000 mAh FastCharge",
      "Mexanik klaviatura RGB Compact",
      "Simsiz sichqoncha Ergonomic Pro"
    ],
    images: [
      "https://olcha.uz/image/675x900/products/cdn_1/supplier/stores/1/2024-04-29/1CP8OoP5dnOaU6HgM29GSvlrZc942EkY8oWGmD8qGX9QNBKv0oYVOjxOgiBU.jpg",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
    ]
  },
  appliances: {
    basePrice: 1290000,
    stepPrice: 95000,
    models: [
      "Avtomatik kir yuvish mashinasi Inverter",
      "Simsiz qo‘l changyutgichi Turbo",
      "Mikroto‘lqinli pech Grill 23L",
      "Elektr choynak Shisha/Po‘lat 1.8L",
      "Blender ko‘p funksiyali 1200W",
      "Dazmol bug‘li Ceramic Sole",
      "Havo namlagich Aromatherapy",
      "Multivarka 5L 16 dasturli"
    ],
    images: [
      "https://mini-io-api.texnomart.uz/catalog/product/817/81751/204943/e151c03b-5b05-46ea-b4f3-3a365e3c5d46.webp",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585659722983-3a675dab414d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80"
    ]
  },
  clothing: {
    basePrice: 185000,
    stepPrice: 19000,
    models: [
      "Qishki issiq kurtka 11.11 Kolleksiya",
      "Paxtali xudi Oversize",
      "Klassik futbolka 100% Paxta",
      "Jinsi shim Slim/Regular Fit",
      "Sviter naqshli Yumshoq trikotaj",
      "Sport kostyumi Kundalik",
      "Palto yarim mavsumiy",
      "Ko‘ylak Casual Style"
    ],
    images: [
      "http://www.czsuxing.com/uploads/2.down-jacket-1.jpg",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  footwear: {
    basePrice: 245000,
    stepPrice: 22000,
    models: [
      "Sport krossovkasi Air Cushion",
      "Kundalik botinka Charm/Eko",
      "Yugurish krossovkasi UltraLight",
      "Loferlar Klassik qulay",
      "Keda yengil Street Style",
      "Qishki issiq etik",
      "Uy uchun yumshoq shippak",
      "Trekking poyabzali"
    ],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    ]
  },
  cosmetics: {
    basePrice: 89000,
    stepPrice: 12000,
    models: [
      "Yuz uchun namlantiruvchi zardob",
      "Parfyumeriya suvi Eau de Parfum",
      "Tungi tiklovchi krem",
      "Soch uchun keratin niqobi",
      "SPF 50+ himoya kremi",
      "Lab uchun balzam va skrab",
      "Kundalik tozalovchi gel",
      "Atir-upa to‘plami 11.11"
    ],
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=800&q=80"
    ]
  },
  home: {
    basePrice: 115000,
    stepPrice: 16000,
    models: [
      "Keramik choynak va kosa to‘plami",
      "Yotoq choyshabi Satin 100%",
      "Oshxona idishlari to‘plami",
      "Dekorativ yostiq va pled",
      "Shisha termos 1.2L",
      "Vanna uchun sochiqlar to‘plami",
      "LED stol lampasi",
      "Saqlash konteynerlari 6 dona"
    ],
    images: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584990347449-a624ff147311?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  kids: {
    basePrice: 95000,
    stepPrice: 14000,
    models: [
      "Rivojlantiruvchi yog‘och konstruktor",
      "Masofadan boshqariluvchi mashinka",
      "Bolalar ryukzagi Ortopedik",
      "Yumshoq o‘yinchoq ayiqcha",
      "Rasm chizish to‘plami 86 qism",
      "Bolalar velosipedi / Samokat",
      "Aqlli alifbo planheti",
      "Stol o‘yini Oilaviy"
    ],
    images: [
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80"
    ]
  }
};

function generateProductsPerCategory(countPerCat = 100) {
  const result = [];
  let idCounter = 1;
  const selectableCats = CATEGORIES.filter((c) => c.id !== "all");

  selectableCats.forEach((cat, catIdx) => {
    const tpl = CATEGORY_TEMPLATES[cat.id];
    for (let i = 1; i <= countPerCat; i++) {
      const model = tpl.models[(i - 1) % tpl.models.length];
      const image = tpl.images[(i - 1) % tpl.images.length];
      const price = Math.round((tpl.basePrice + ((i * 37) % 18) * tpl.stepPrice) / 1000) * 1000;
      const discountPct = i % 5 === 0 ? 35 : i % 3 === 0 ? 25 : i % 2 === 0 ? 15 : 11;
      const oldPrice = Math.round((price / (1 - discountPct / 100)) / 1000) * 1000;
      const rating = Number((4.5 + ((i + catIdx) % 5) * 0.1).toFixed(1));
      const reviews = 24 + ((i * 19 + catIdx * 43) % 480);

      result.push({
        id: idCounter++,
        title: `${model} #${i} (${cat.name})`,
        category: cat.id,
        price,
        oldPrice,
        rating: Math.min(rating, 5.0),
        reviews,
        isPopular: i % 3 === 0,
        isPromo: i % 2 === 0,
        is1111: i % 4 === 0 || discountPct >= 25,
        description: `11.11 maxsus taklif: ${model} (#${i}) — ${cat.name} bo‘limidagi tekshirilgan sifatli mahsulot. Tez yetkazib berish va qulay bo‘lib to‘lash imkoniyati mavjud.`,
        image
      });
    }
  });

  return result;
}

const PRODUCTS = generateProductsPerCategory(100);
const PAGE_SIZE = 30;

const SLIDES = [
  {
    badge: "11.11 KATTA SAVDO · 50% GACHA",
    title: "11.11 — Yilning eng katta chegirmalari boshlandi!",
    desc: "Har bir bo‘limda 100 tadan mahsulot, maxsus narxlar va 0-0-12 bo‘lib to‘lash.",
    cta: "11.11 Xitlarni ko‘rish",
    quick: "1111",
    category: "all",
    image: "https://olcha.uz/image/675x900/products/cdn_1/supplier/stores/1/2024-04-29/1CP8OoP5dnOaU6HgM29GSvlrZc942EkY8oWGmD8qGX9QNBKv0oYVOjxOgiBU.jpg"
  },
  {
    badge: "11.11 ELEKTRONIKA & TEXNIKA",
    title: "Smartfonlar va maishiy texnikaga 11.11 narxlar",
    desc: "Rasmiy kafolat va Toshkent hamda viloyatlarga tez yetkazib berish.",
    cta: "Elektronikani ochish",
    quick: null,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },
  {
    badge: "11.11 KIYIM & POYABZAL",
    title: "Mavsumiy kolleksiyaga bayramona chegirmalar",
    desc: "Kiyim-kechak, poyabzal, kosmetika va uy buyumlari bir joyda.",
    cta: "Kiyimlarni ko‘rish",
    quick: null,
    category: "clothing",
    image: "http://www.czsuxing.com/uploads/2.down-jacket-1.jpg"
  }
];

const STORAGE_KEYS = {
  cart: "uzum_1111_cart_v1",
  favorites: "uzum_1111_favorites_v1",
  user: "uzum_1111_user_v1"
};

const state = {
  category: "all",
  quickFilter: null,
  searchQuery: "",
  sortBy: "default",
  currentPage: 1,
  slideIndex: 0,
  activeCatalogCat: "electronics",
  cart: loadJson(STORAGE_KEYS.cart, []),
  favorites: loadJson(STORAGE_KEYS.favorites, []),
  user: loadJson(STORAGE_KEYS.user, null)
};

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatPrice(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so‘m";
}

function getDiscountPercent(price, oldPrice) {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

function getMonthlyInstallment(price) {
  return formatPrice(Math.round(price / 12)) + "/oy";
}

let toastTimer = null;
function showToast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add("hidden"), 2200);
}

// Kirish animatsiyasi
function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;
  setTimeout(() => {
    preloader.classList.add("is-done");
    setTimeout(() => preloader.remove(), 600);
  }, 1150);
}

// 11:11:11 taymer animatsiyasi
function start1111Timer() {
  const timerEl = document.getElementById("saleCountdown");
  if (!timerEl) return;
  let totalSec = 11 * 3600 + 11 * 60 + 11;

  const tick = () => {
    const h = String(Math.floor(totalSec / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
    const s = String(totalSec % 60).padStart(2, "0");
    timerEl.textContent = `${h}:${m}:${s}`;
    totalSec = totalSec > 0 ? totalSec - 1 : 11 * 3600 + 11 * 60 + 11;
  };

  tick();
  setInterval(tick, 1000);
}

// Kategoriyalar va Katalog menyusi
function renderCategories() {
  const navList = document.getElementById("categoryNavList");
  navList.innerHTML = CATEGORIES.map(
    (cat) => `
      <button
        type="button"
        class="cat-pill ${state.category === cat.id && !state.quickFilter ? "is-active" : ""}"
        data-category="${cat.id}"
      >
        ${cat.name}
      </button>
    `
  ).join("");

  navList.querySelectorAll(".cat-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.category;
      state.quickFilter = null;
      state.currentPage = 1;
      syncQuickPills();
      renderCategories();
      renderProducts();
      scrollToProducts();
    });
  });

  renderCatalogDropdown();
}

function renderCatalogDropdown() {
  const sidebar = document.getElementById("catalogSidebar");
  const content = document.getElementById("catalogContent");
  const selectableCats = CATEGORIES.filter((c) => c.id !== "all");

  sidebar.innerHTML = selectableCats
    .map(
      (cat) => `
        <button
          type="button"
          class="catalog-cat-item ${state.activeCatalogCat === cat.id ? "is-active" : ""}"
          data-cat-id="${cat.id}"
        >
          <span>${cat.name} (100)</span>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      `
    )
    .join("");

  sidebar.querySelectorAll(".catalog-cat-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      state.activeCatalogCat = item.dataset.catId;
      renderCatalogDropdown();
    });
    item.addEventListener("click", () => {
      state.category = item.dataset.catId;
      state.quickFilter = null;
      state.currentPage = 1;
      closeCatalog();
      syncQuickPills();
      renderCategories();
      renderProducts();
      scrollToProducts();
    });
  });

  const current = selectableCats.find((c) => c.id === state.activeCatalogCat) || selectableCats[0];
  content.innerHTML = `
    <h3>${current.name} · 100 ta mahsulot</h3>
    <div class="catalog-subgrid">
      ${current.subs
        .map(
          (sub) => `
            <button type="button" class="catalog-sub-card" data-sub="${sub}">
              ${sub}
            </button>
          `
        )
        .join("")}
    </div>
  `;

  content.querySelectorAll(".catalog-sub-card").forEach((subBtn) => {
    subBtn.addEventListener("click", () => {
      state.category = current.id;
      state.quickFilter = null;
      state.currentPage = 1;
      closeCatalog();
      syncQuickPills();
      renderCategories();
      renderProducts();
      scrollToProducts();
      showToast(`${current.name}: ${subBtn.dataset.sub}`);
    });
  });
}

function toggleCatalog(forceClose = false) {
  const dropdown = document.getElementById("catalogDropdown");
  const btn = document.getElementById("catalogToggleBtn");
  const shouldOpen = forceClose ? false : !dropdown.classList.contains("is-open");
  dropdown.classList.toggle("is-open", shouldOpen);
  btn.setAttribute("aria-expanded", String(shouldOpen));
}

function closeCatalog() {
  toggleCatalog(true);
}

// Banner Slider
let sliderInterval = null;

function renderSlider() {
  const track = document.getElementById("sliderTrack");
  const dots = document.getElementById("sliderDots");

  track.innerHTML = SLIDES.map(
    (slide, idx) => `
      <div class="slide slide--${idx + 1}">
        <div class="slide__content">
          <span class="slide__badge">${slide.badge}</span>
          <h2 class="slide__title">${slide.title}</h2>
          <p class="slide__desc">${slide.desc}</p>
          <button type="button" class="slide__cta" data-slide-idx="${idx}">
            <span>${slide.cta}</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div class="slide__visual">
          <img src="${slide.image}" alt="${slide.title}" />
        </div>
      </div>
    `
  ).join("");

  dots.innerHTML = SLIDES.map(
    (_, idx) => `
      <button
        type="button"
        class="slider__dot ${idx === state.slideIndex ? "is-active" : ""}"
        data-slide-idx="${idx}"
        aria-label="${idx + 1}-banner"
      ></button>
    `
  ).join("");

  track.querySelectorAll(".slide__cta").forEach((btn) => {
    btn.addEventListener("click", () => {
      const s = SLIDES[Number(btn.dataset.slideIdx)];
      state.category = s.category || "all";
      state.quickFilter = s.quick || null;
      state.currentPage = 1;
      syncQuickPills();
      renderCategories();
      renderProducts();
      scrollToProducts();
    });
  });

  dots.querySelectorAll(".slider__dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      goToSlide(Number(dot.dataset.slideIdx));
      restartAutoSlide();
    });
  });

  updateSliderPosition();
}

function updateSliderPosition() {
  const track = document.getElementById("sliderTrack");
  const dots = document.querySelectorAll(".slider__dot");
  track.style.transform = `translateX(-${state.slideIndex * 100}%)`;
  dots.forEach((d, idx) => d.classList.toggle("is-active", idx === state.slideIndex));
}

function goToSlide(index) {
  const total = SLIDES.length;
  state.slideIndex = ((index % total) + total) % total;
  updateSliderPosition();
}

function startAutoSlide() {
  stopAutoSlide();
  sliderInterval = setInterval(() => {
    goToSlide(state.slideIndex + 1);
  }, 4500);
}

function stopAutoSlide() {
  if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = null;
  }
}

function restartAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Filtrlash, saralash va sahifalash
function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (state.quickFilter === "1111") {
    list = list.filter((p) => p.is1111);
  } else if (state.quickFilter === "discounts") {
    list = list.filter((p) => getDiscountPercent(p.price, p.oldPrice) > 0);
  } else if (state.quickFilter === "promotions") {
    list = list.filter((p) => p.isPromo);
  } else if (state.quickFilter === "popular") {
    list = list.filter((p) => p.isPopular);
  } else if (state.quickFilter === "favorites") {
    list = list.filter((p) => state.favorites.includes(p.id));
  } else if (state.category !== "all") {
    list = list.filter((p) => p.category === state.category);
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.trim().toLowerCase();
    list = list.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }

  if (state.sortBy === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "discount-desc") {
    list.sort((a, b) => getDiscountPercent(b.price, b.oldPrice) - getDiscountPercent(a.price, a.oldPrice));
  } else if (state.sortBy === "rating-desc") {
    list.sort((a, b) => b.rating - a.rating);
  }

  return list;
}

function updateSectionHeading(count) {
  const titleEl = document.getElementById("sectionTitle");
  const subtitleEl = document.getElementById("sectionSubtitle");

  if (state.quickFilter === "1111") {
    titleEl.textContent = "11.11 Super Xit mahsulotlar";
  } else if (state.quickFilter === "discounts") {
    titleEl.textContent = "Chegirmadagi mahsulotlar";
  } else if (state.quickFilter === "promotions") {
    titleEl.textContent = "Aksiyadagi tovarlar";
  } else if (state.quickFilter === "popular") {
    titleEl.textContent = "Mashhur bo‘lim mahsulotlari";
  } else if (state.quickFilter === "favorites") {
    titleEl.textContent = "Saralangan mahsulotlar";
  } else {
    const found = CATEGORIES.find((c) => c.id === state.category);
    titleEl.textContent = found ? `11.11 · ${found.name}` : "11.11 Barcha mahsulotlar";
  }

  const searchPart = state.searchQuery.trim() ? ` · Qidiruv: "${state.searchQuery.trim()}"` : "";
  subtitleEl.textContent = `${count} ta mahsulot topildi (har bo‘limda 100 ta)${searchPart}`;
}

function renderPagination(totalItems) {
  const nav = document.getElementById("pagination");
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);

  if (totalPages <= 1) {
    nav.innerHTML = "";
    return;
  }

  if (state.currentPage > totalPages) {
    state.currentPage = totalPages;
  }

  let buttons = `
    <button type="button" class="page-btn" id="prevPageBtn" ${state.currentPage === 1 ? "disabled" : ""} aria-label="Oldingi sahifa">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
  `;

  for (let p = 1; p <= totalPages; p++) {
    buttons += `
      <button type="button" class="page-btn ${p === state.currentPage ? "is-active" : ""}" data-page="${p}">
        ${p}
      </button>
    `;
  }

  buttons += `
    <button type="button" class="page-btn" id="nextPageBtn" ${state.currentPage === totalPages ? "disabled" : ""} aria-label="Keyingi sahifa">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  `;

  nav.innerHTML = buttons;

  document.getElementById("prevPageBtn")?.addEventListener("click", () => {
    state.currentPage -= 1;
    renderProducts();
    scrollToProducts();
  });

  document.getElementById("nextPageBtn")?.addEventListener("click", () => {
    state.currentPage += 1;
    renderProducts();
    scrollToProducts();
  });

  nav.querySelectorAll("[data-page]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.currentPage = Number(btn.dataset.page);
      renderProducts();
      scrollToProducts();
    });
  });
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const empty = document.getElementById("emptyState");
  const filtered = getFilteredProducts();

  updateSectionHeading(filtered.length);

  if (filtered.length === 0) {
    grid.innerHTML = "";
    document.getElementById("pagination").innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");

  const start = (state.currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  grid.innerHTML = pageItems
    .map((product) => {
      const discount = getDiscountPercent(product.price, product.oldPrice);
      const isFav = state.favorites.includes(product.id);

      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-card__media" data-open-modal="${product.id}">
            <img src="${product.image}" alt="${product.title}" class="product-card__img" loading="lazy" />
            <button
              type="button"
              class="product-card__fav ${isFav ? "is-active" : ""}"
              data-fav-id="${product.id}"
              aria-label="Saralanganlarga qo‘shish"
            >
              <i class="${isFav ? "fa-solid" : "fa-regular"} fa-heart"></i>
            </button>
            ${discount > 0 ? `<span class="product-card__badge">11.11 -${discount}%</span>` : ""}
          </div>

          <div class="product-card__body">
            <div class="product-card__prices">
              <span class="product-card__price">${formatPrice(product.price)}</span>
              ${product.oldPrice ? `<span class="product-card__old-price">${formatPrice(product.oldPrice)}</span>` : ""}
            </div>

            <h3 class="product-card__title" data-open-modal="${product.id}">${product.title}</h3>

            <div class="product-card__rating">
              <i class="fa-solid fa-star"></i>
              <span>${product.rating.toFixed(1)} (${product.reviews} sharh)</span>
            </div>

            <span class="product-card__installment">${getMonthlyInstallment(product.price)}</span>

            <button type="button" class="product-card__cart-btn" data-add-cart="${product.id}">
              <i class="fa-solid fa-bag-shopping"></i>
              <span>Savatga</span>
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  renderPagination(filtered.length);

  grid.querySelectorAll("[data-open-modal]").forEach((el) => {
    el.addEventListener("click", () => openProductModal(Number(el.dataset.openModal)));
  });

  grid.querySelectorAll("[data-fav-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(Number(btn.dataset.favId));
    });
  });

  grid.querySelectorAll("[data-add-cart]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(Number(btn.dataset.addCart));
    });
  });
}

// Savat va Saralanganlar
function addToCart(productId, qty = 1) {
  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ id: productId, qty });
  }
  saveJson(STORAGE_KEYS.cart, state.cart);
  updateBadges();
  showToast("Mahsulot savatga qo‘shildi");
}

function updateCartQty(productId, delta) {
  const item = state.cart.find((i) => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((i) => i.id !== productId);
  }
  saveJson(STORAGE_KEYS.cart, state.cart);
  updateBadges();
  openDrawer("cart");
}

function toggleFavorite(productId) {
  const exists = state.favorites.includes(productId);
  if (exists) {
    state.favorites = state.favorites.filter((id) => id !== productId);
    showToast("Saralanganlardan olib tashlandi");
  } else {
    state.favorites.push(productId);
    showToast("Saralanganlarga qo‘shildi");
  }
  saveJson(STORAGE_KEYS.favorites, state.favorites);
  updateBadges();
  renderProducts();
}

function updateBadges() {
  const totalCartItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").textContent = String(totalCartItems);
  document.getElementById("favoritesCount").textContent = String(state.favorites.length);
  document.getElementById("authLabel").textContent = state.user ? state.user.name : "Kirish";
}

// Mahsulot Modal oynasi
function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const catObj = CATEGORIES.find((c) => c.id === product.category);
  const discount = getDiscountPercent(product.price, product.oldPrice);
  const isFav = state.favorites.includes(product.id);

  document.getElementById("productModalBody").innerHTML = `
    <div class="product-modal__grid">
      <div class="product-modal__img-wrap">
        <img src="${product.image}" alt="${product.title}" />
      </div>
      <div>
        <div class="product-modal__cat">${catObj ? catObj.name : "Mahsulot"} · 11.11</div>
        <h2 class="product-modal__title" id="modalTitle">${product.title}</h2>
        <div class="product-card__rating">
          <i class="fa-solid fa-star"></i>
          <strong>${product.rating.toFixed(1)}</strong>
          <span>(${product.reviews} sharh)</span>
        </div>
        <div class="product-card__prices" style="margin-top: 14px;">
          <span class="product-card__price" style="font-size: 22px;">${formatPrice(product.price)}</span>
          ${product.oldPrice ? `<span class="product-card__old-price">${formatPrice(product.oldPrice)}</span>` : ""}
          ${discount > 0 ? `<span class="product-card__badge" style="position: static;">11.11 -${discount}%</span>` : ""}
        </div>
        <p class="product-modal__desc">${product.description}</p>
        <div class="product-modal__actions">
          <button type="button" class="btn btn--primary" id="modalAddCartBtn">
            <i class="fa-solid fa-bag-shopping"></i>
            <span>Savatga qo‘shish</span>
          </button>
          <button type="button" class="btn btn--outline" id="modalFavBtn">
            <i class="${isFav ? "fa-solid" : "fa-regular"} fa-heart"></i>
            <span>${isFav ? "Saralangan" : "Saralanganlarga"}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("productModalBackdrop").classList.remove("hidden");

  document.getElementById("modalAddCartBtn").addEventListener("click", () => {
    addToCart(product.id);
    closeProductModal();
  });

  document.getElementById("modalFavBtn").addEventListener("click", () => {
    toggleFavorite(product.id);
    openProductModal(product.id);
  });
}

function closeProductModal() {
  document.getElementById("productModalBackdrop").classList.add("hidden");
}

// Drawer
function openDrawer(mode) {
  const backdrop = document.getElementById("drawerBackdrop");
  const title = document.getElementById("drawerTitle");
  const body = document.getElementById("drawerBody");
  const footer = document.getElementById("drawerFooter");

  backdrop.classList.remove("hidden");
  footer.classList.add("hidden");
  footer.innerHTML = "";

  if (mode === "cart") {
    title.textContent = "Savat";
    if (state.cart.length === 0) {
      body.innerHTML = `<p style="color: var(--text-secondary); padding: 24px 0;">Savatingiz hozircha bo‘sh.</p>`;
      return;
    }

    let total = 0;
    body.innerHTML = state.cart
      .map((item) => {
        const product = PRODUCTS.find((p) => p.id === item.id);
        if (!product) return "";
        total += product.price * item.qty;
        return `
          <div class="cart-item">
            <img src="${product.image}" alt="${product.title}" class="cart-item__img" />
            <div>
              <div class="cart-item__title">${product.title}</div>
              <div class="cart-item__price">${formatPrice(product.price)}</div>
              <div class="qty-control">
                <button type="button" data-qty-id="${item.id}" data-delta="-1">−</button>
                <span>${item.qty}</span>
                <button type="button" data-qty-id="${item.id}" data-delta="1">+</button>
              </div>
            </div>
            <strong>${formatPrice(product.price * item.qty)}</strong>
          </div>
        `;
      })
      .join("");

    body.querySelectorAll("[data-qty-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        updateCartQty(Number(btn.dataset.qtyId), Number(btn.dataset.delta));
      });
    });

    footer.classList.remove("hidden");
    footer.innerHTML = `
      <div class="cart-summary-row">
        <span>Jami to‘lov:</span>
        <strong>${formatPrice(total)}</strong>
      </div>
      <button type="button" class="btn btn--primary" style="width: 100%;" id="checkoutBtn">
        Buyurtma rasmiylashtirish
      </button>
    `;

    document.getElementById("checkoutBtn").addEventListener("click", () => {
      state.cart = [];
      saveJson(STORAGE_KEYS.cart, state.cart);
      updateBadges();
      closeDrawer();
      showToast("11.11 buyurtmangiz qabul qilindi!");
    });
  } else if (mode === "favorites") {
    title.textContent = "Saralangan mahsulotlar";
    const favProducts = PRODUCTS.filter((p) => state.favorites.includes(p.id));
    if (favProducts.length === 0) {
      body.innerHTML = `<p style="color: var(--text-secondary); padding: 24px 0;">Saralangan mahsulotlar hali yo‘q.</p>`;
      return;
    }

    body.innerHTML = favProducts
      .map(
        (p) => `
          <div class="cart-item">
            <img src="${p.image}" alt="${p.title}" class="cart-item__img" />
            <div>
              <div class="cart-item__title">${p.title}</div>
              <div class="cart-item__price">${formatPrice(p.price)}</div>
              <button type="button" class="btn btn--primary" style="height: 32px; padding: 0 12px; font-size: 12px; margin-top: 8px;" data-fav-to-cart="${p.id}">
                Savatga qo‘shish
              </button>
            </div>
            <button type="button" class="icon-btn" data-remove-fav="${p.id}" title="O‘chirish">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        `
      )
      .join("");

    body.querySelectorAll("[data-fav-to-cart]").forEach((btn) => {
      btn.addEventListener("click", () => {
        addToCart(Number(btn.dataset.favToCart));
      });
    });

    body.querySelectorAll("[data-remove-fav]").forEach((btn) => {
      btn.addEventListener("click", () => {
        toggleFavorite(Number(btn.dataset.removeFav));
        openDrawer("favorites");
      });
    });
  } else if (mode === "auth") {
    title.textContent = state.user ? "Profil" : "Kirish yoki ro‘yxatdan o‘tish";
    if (state.user) {
      body.innerHTML = `
        <p style="margin-bottom: 14px;">Xush kelibsiz, <strong>${state.user.name}</strong> (${state.user.phone})!</p>
        <button type="button" class="btn btn--outline" id="logoutBtn">Hisobdan chiqish</button>
      `;
      document.getElementById("logoutBtn").addEventListener("click", () => {
        state.user = null;
        localStorage.removeItem(STORAGE_KEYS.user);
        updateBadges();
        closeDrawer();
        showToast("Hisobdan chiqdingiz");
      });
    } else {
      body.innerHTML = `
        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">
          Telefon raqamingiz va ismingizni kiriting.
        </p>
        <form class="auth-form" id="authForm">
          <input type="text" id="authNameInput" placeholder="Ismingiz" required />
          <input type="tel" id="authPhoneInput" placeholder="+998 90 123 45 67" required />
          <button type="submit" class="btn btn--primary">Kirish</button>
        </form>
      `;
      document.getElementById("authForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("authNameInput").value.trim();
        const phone = document.getElementById("authPhoneInput").value.trim();
        if (!name || !phone) return;
        state.user = { name, phone };
        saveJson(STORAGE_KEYS.user, state.user);
        updateBadges();
        closeDrawer();
        showToast(`Xush kelibsiz, ${name}!`);
      });
    }
  }
}

function closeDrawer() {
  document.getElementById("drawerBackdrop").classList.add("hidden");
}

function syncQuickPills() {
  document.querySelectorAll(".quick-pill").forEach((pill) => {
    pill.classList.toggle("is-active", pill.dataset.quick === state.quickFilter);
  });
}

function scrollToProducts() {
  document.getElementById("catalog-section").scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindEvents() {
  document.getElementById("logoBtn").addEventListener("click", () => {
    state.category = "all";
    state.quickFilter = null;
    state.searchQuery = "";
    state.sortBy = "default";
    state.currentPage = 1;
    document.getElementById("searchInput").value = "";
    document.getElementById("sortSelect").value = "default";
    syncQuickPills();
    renderCategories();
    renderProducts();
  });

  document.getElementById("catalogToggleBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleCatalog();
  });

  document.addEventListener("click", (e) => {
    const dropdown = document.getElementById("catalogDropdown");
    const toggleBtn = document.getElementById("catalogToggleBtn");
    if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeCatalog();
    }
  });

  const searchInput = document.getElementById("searchInput");
  document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    state.searchQuery = searchInput.value;
    state.currentPage = 1;
    renderProducts();
    scrollToProducts();
  });

  searchInput.addEventListener("input", () => {
    state.searchQuery = searchInput.value;
    state.currentPage = 1;
    renderProducts();
  });

  document.getElementById("clearSearchBtn").addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    state.currentPage = 1;
    renderProducts();
  });

  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    state.currentPage = 1;
    renderProducts();
  });

  document.querySelectorAll(".quick-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const key = pill.dataset.quick;
      state.quickFilter = state.quickFilter === key ? null : key;
      if (state.quickFilter) state.category = "all";
      state.currentPage = 1;
      syncQuickPills();
      renderCategories();
      renderProducts();
      scrollToProducts();
    });
  });

  document.getElementById("resetFiltersBtn").addEventListener("click", () => {
    state.category = "all";
    state.quickFilter = null;
    state.searchQuery = "";
    state.sortBy = "default";
    state.currentPage = 1;
    searchInput.value = "";
    document.getElementById("sortSelect").value = "default";
    syncQuickPills();
    renderCategories();
    renderProducts();
  });

  document.getElementById("prevSlideBtn").addEventListener("click", () => {
    goToSlide(state.slideIndex - 1);
    restartAutoSlide();
  });

  document.getElementById("nextSlideBtn").addEventListener("click", () => {
    goToSlide(state.slideIndex + 1);
    restartAutoSlide();
  });

  const heroSlider = document.getElementById("heroSlider");
  heroSlider.addEventListener("mouseenter", stopAutoSlide);
  heroSlider.addEventListener("mouseleave", startAutoSlide);

  document.getElementById("cartOpenBtn").addEventListener("click", () => openDrawer("cart"));
  document.getElementById("favoritesOpenBtn").addEventListener("click", () => openDrawer("favorites"));
  document.getElementById("authOpenBtn").addEventListener("click", () => openDrawer("auth"));
  document.getElementById("closeDrawerBtn").addEventListener("click", closeDrawer);

  document.getElementById("drawerBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "drawerBackdrop") closeDrawer();
  });

  document.getElementById("closeProductModal").addEventListener("click", closeProductModal);
  document.getElementById("productModalBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "productModalBackdrop") closeProductModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCatalog();
      closeDrawer();
      closeProductModal();
    }
  });
}

// Ishga tushirish
initPreloader();
start1111Timer();
renderCategories();
renderSlider();
renderProducts();
updateBadges();
bindEvents();
startAutoSlide();