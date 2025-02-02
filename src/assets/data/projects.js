import art from "../images/art2.png"
import art2 from "../images/art2-1.png"
import art3 from "../images/art2-2.png"
import conbuild from "../images/conbuild2.png"
import conbuild2 from "../images/conbuild2-1.png"
import conbuild3 from "../images/conbuild2-2.png"
import conbuild4 from "../images/conbuild2-3.png"
import filters from "../images/filters.png"
import filters2 from "../images/filters-2.png"
import art_thumbnail from "../images/card_art.png"
import conbuild_thumbnail from "../images/card_conbuild.png"
import filters_thumbnail from "../images/card_filters.png"
import art_webp from "../images/art2.webp"
import art2_webp from "../images/art2-1.webp"
import art3_webp from "../images/art2-2.webp"
import conbuild_webp from "../images/conbuild2.webp"
import conbuild2_webp from "../images/conbuild2-1.webp"
import conbuild3_webp from "../images/conbuild2-2.webp"
import conbuild4_webp from "../images/conbuild2-3.webp"
import filters_webp from "../images/filters.webp"
import filters2_webp from "../images/filters-2.webp"
import art_thumbnail_webp from "../images/card_art.webp"
import conbuild_thumbnail_webp from "../images/card_conbuild.webp"
import filters_thumbnail_webp from "../images/card_filters.webp"

const projects = [{
  "id": 1,
  "title": "Портфолио художника",
  "dark": true,
  "links": [
    {
      "name": "Посетить сайт",
      "link": "https://chakiryshka.art"
    }
  ],
  "color": "#222129",
  "stack": ["React", "CSS", "JavaScript", "React Router", "Redux Toolkit", "Vite", "Wordpress"],
  "screenshots": [
    {
      "png": art,
      "webp": art_webp
    },
    {
      "png": art2,
      "webp": art2_webp
    },
    {
      "png": art3,
      "webp": art3_webp
    }
  ],
  "thumbnail": art_thumbnail,
  "text": "Этот проект я делала для иллюстратора, рисующего работы на заказ. На сайте можно посмотреть галерею уже созданных изображений, узнать все условия обслуживания, а также, конечно, выйти на контакт с художником.\nУ сайта есть своя панель администратора, созданная при помощи Headless Wordpress. Хостится все это на своем VPS-сервере. Со этими технологиями на момент разработки я столкнулась впервые, так что пришлось много в чем разбираться! Но я рада финальному результату, а особенно его визуальной составляющей, над которой я трудилась по дизайнам заказчика."
},
{
  "id": 2,
  "title": "Лендинг строительной компании",
  "dark": false,
  "links": [
    {
      "name": "Посетить сайт",
      "link": "https://team8html-event2024-nine.vercel.app"
    },
    {
      "name": "Версия с хакатона",
      "link": "https://team8html-event2024.vercel.app"
    },
    {
      "name": "Посмотреть код",
      "link": "https://github.com/edelsid/team8htmlEvent2024"
    }
  ],
  "color": "#fff",
  "stack": ["HTML5", "SCSS", "JavaScript", "Vite"],
  "screenshots": [
    {
      "png": conbuild,
      "webp": conbuild_webp,
    },
    {
      "png": conbuild2,
      "webp": conbuild2_webp,
    },
    {
      "png": conbuild3,
      "webp": conbuild3_webp,
    },
    {
      "png": conbuild4,
      "webp": conbuild4_webp,
    },
  ],
  "thumbnail": conbuild_thumbnail,
  "text": "Продающая страница для выдуманной организации. Изначально разрабатывалась в команде на благотворительном хакатоне для фронтендеров. Для меня это была отличная практика верстки, а также прекрасная возможность изучить SCSS и поупражняться в создании слайдеров на чистом JavaScript. После окончания ивента уже лично мной было принято решение доработать проект, поправить его недочеты и сделать для него адаптив.\nВсе внедренные изменения описаны в README проекта."
},
{
  "id": 3,
  "title": "Фильтрация отзывов",
  "dark": false,
  "links": [
    {
      "name": "Посетить сайт",
      "link": "https://edelsid.github.io/hexlet-filters/"
    },
    {
      "name": "Посмотреть код",
      "link": "https://github.com/edelsid/hexlet-filters"
    }
  ],
  "color": "#fff0e7",
  "stack": ["React", "CSS", "Redux Saga", "Vite"],
  "screenshots": [
    {
      "png": filters,
      "webp": filters_webp,
    }, 
    {
      "png": filters2,
      "webp": filters2_webp,
    }
  ],
  "thumbnail": filters_thumbnail,
  "text": "Проект был создан в рамках ивента \"Прими вызов\" от Хабр Карьеры и онлайн-школы Хекслет. Это второе упражнение с трека фронтендеров: система фильтрации отзывов о гипотетической услуге. По задумке ивента все задания должны были походить на реальные тестовые задачи, которые работодатели могли бы предложить соискателям.\nОсновные требования были такими:\n - Загрузить список отзывов через redux-saga,\n - Реализовать фильтрацию отзывов по платформе и диапазону оценок,\n - Реализовать сортировку отзывов по времени и оценке."
}];

export default projects;