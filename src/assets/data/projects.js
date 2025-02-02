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

const projects = [{
  "id": 1,
  "title": "Портфолио художника",
  "dark": true,
  "links": [
    {
      "name": "Посетить сайт",
      "link": "link2"
    }
  ],
  "color": "#222129",
  "stack": ["React", "CSS", "JavaScript", "React Router", "Redux Toolkit", "Vite"],
  "screenshots": [
    art, 
    art2,
    art3
  ],
  "thumbnail": art_thumbnail,
  "text": "Этот проект я делала для иллюстратора, рисующего красочные работы на заказ. На сайте можно посмотреть обширную галерею уже созданных изображений, узнать все условия обслуживания, а также, конечно, выйти на контакт с художником.\nУ сайта есть своя панель администратора, созданная при помощи Headless Wordpress. Хостится все это на своем VPS-сервере. Со всеми этими технологиями на момент разработки я столкнулась впервые, так что пришлось много в чем разбираться! Но я рада финальному результату, а особенно его визуальной составляющей, над которой я трудилась по дизайнам заказчика."
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
    conbuild, 
    conbuild2,
    conbuild3,
    conbuild4
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
      "link": "https://github.com/edelsid/hexlet-filters"
    },
    {
      "name": "Посмотреть код",
      "link": "https://edelsid.github.io/hexlet-filters/"
    }
  ],
  "color": "#fff0e7",
  "stack": ["React", "CSS", "Redux Saga", "Vite"],
  "screenshots": [
    filters, 
    filters2
  ],
  "thumbnail": filters_thumbnail,
  "text": "Проект был создан в рамках ивента \"Прими вызов\" от Хабр Карьеры и онлайн-школы Хекслет. Это второе упражнение с трека фронтендеров: система фильтрации отзывов о гипотетической услуге. По задумке ивента все задания должны были походить на реальные тестовые задачи, которые работодатели могли бы предложить соискателям.\nОсновные требования были такими:\n - Загрузить список отзывов через redux-saga,\n - Реализовать фильтрацию отзывов по платформе и диапазону оценок,\n - Реализовать сортировку отзывов по времени и оценке."
}];

export default projects;