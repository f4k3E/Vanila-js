import HomePage from "./pages/HomePage.js";
import ProductsPage from "./pages/ProductsPage.js";
import ProductDetail from "./pages/ProductDetail.js";
import { parseRequestUrl, $ } from "./utils.js";
import Header from "./components/Header.js";
import Error404Page from "./pages/Error404.js";
import CategoryPage from "./pages/CategoryPage.js";
import Footer from "./components/Footer.js";
import AdminProductPage from "./pages/AdminProductPage.js";
import CateAddPage from "./pages/CateAddPage.js";
import AdminCategoryPage from "./pages/AdminCategoryPage.js";
import ProductAddPage from "./pages/ProductAddPage.js";
import ProductEditPage from "./pages/ProductEditPage.js";
import CateEditPage from "./pages/CateEditPage.js";
import BlogPage from "./pages/BlogPage.js";
import AboutPage from "./pages/AboutPage.js";
import ContactPage from "./pages/ContactPage.js";

// import ListCategory from './components/ListCategory.js';

// const $ = selector => {
//     let elements = document.querySelectorAll(selector);
//      return elements.length == 1 ? elements[0] : [...elements];

// }
const routes = {
  "/": HomePage,
  "/products": ProductsPage,
  "/products/:id": ProductDetail,
  "/category/:id": CategoryPage,
  "/blog": BlogPage,
  "/about": AboutPage,
  "/contact": ContactPage,
  "/list-product": AdminProductPage,
  "/add-cate": CateAddPage,
  "/list-category": AdminCategoryPage,
  "/add-product": ProductAddPage,
  "/edit-product/:id": ProductEditPage,
  "/edit-cate/:id": CateEditPage,
  
};

const router = async () => {
  const { resource, id } = parseRequestUrl();
  const parseUrl = (resource ? `/${resource}` : "/") + (id ? `/:id` : "");

  // console.log(parseUrl);
  const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;

  $("#header").innerHTML = await Header.render();
  $("#main-content").innerHTML = await page.render();
  $("#footer").innerHTML = await Footer.render();
  if(page.afterRender){await page.afterRender();}
  
};

window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);
