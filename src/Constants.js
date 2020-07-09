const { protocol } = window.location;
export const REQUEST_URL = `${protocol}//vk.ferma-ivanovka.ru/fetchquery.php`;
export const CART_ITEM = "cartItem";
export const CARD_ITEM = "cardItem";
export const LOADING = "Загрузка данных";
export const WEB_SITE_LINK = "https://ferma-ivanovka.ru";
export const FETCH_PRODUCT_DATA_LINK = `${protocol}//shop.ferma-ivanovka.ru/data.json`;
export const FETCH_CATEGORIES_LINK = `${protocol}//shop.ferma-ivanovka.ru/categories.json`;
export const COPYRIGHT = "© ";
export const COMPANY_NAME = "Ферма «Ивановка»";
export const Cart = {
  ADD_TO_CART: "Добавить",
  REMOVE_FROM_CART: "Убрать",
};

export const Menu = {
  HOME: "Главная",
  CART: "Корзина",
  CHECKOUT: "К заказу",
};

export const CURRENCY = "руб.";
export const CART_TOTAL = "Общая сумма";
export const ORDER_BUTTON = "Оформить заказ";
export const CART_IS_EMPTY = "Корзина пуста!";

export const ORDER_SUMMARY = "Ваш заказ: ";

export const ROUTE_TO_HOME = "/";
export const ROUTE_TO_CART = `${ROUTE_TO_HOME}cart`;
export const ROUTE_TO_CHECKOUT = `${ROUTE_TO_HOME}checkout`;

export const CheckoutText = {
  THANKS: "Благодарим за Ваш заказ",
  PLACE_ORDER: "Разместить заказ",
  CHECKOUT: "Оформить заказ",
  THANKS_TEXT:
    "Ваш заказ принят в обработку. В ближайшее время с Вами свяжутся для уточнения деталей заказа",
};

export const CheckOutForm = {
  name: "Имя",
  lastName: "Фамилия",
  address: "Адрес",
  phone: "Контактный телефон",
  email: "email",
  comment: "Комментарий к заказу",
  total: "Общая сумма заказа",
  agreement: "Я даю согласие на обработку своих персональных данных",
  validation: {
    name: "Имя должно содержать более 3х символов",
    phone: "Укажите корректный мобильный телефон",
  },
};

export const devices = {
  mob: {
    min: 320,
    max: 640,
  },
  tablet: {
    min: 641,
    max: 1023,
  },
  desktop: {
    min: 1024,
  },
};
