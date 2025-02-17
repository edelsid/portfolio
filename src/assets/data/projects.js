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
import card_RaM from "../images/card_RaM.png"
import card_RaM_webp from "../images/card_RaM.webp"
import RaM1 from "../images/RaM1.png"
import RaM1_webp from "../images/RaM1.webp"
import RaM2 from "../images/RaM2.png"
import RaM2_webp from "../images/RaM2.webp"

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
  "thumbnail": {
    "png": art_thumbnail,
    "webp": art_thumbnail_webp
  },
  "text": "Этот проект я&nbsp;делала для иллюстратора, рисующего работы на&nbsp;заказ. На&nbsp;сайте можно посмотреть галерею уже созданных изображений, узнать все условия обслуживания, а&nbsp;также, конечно, выйти на&nbsp;контакт с&nbsp;художником.\nУ&nbsp;сайта есть своя панель администратора, созданная при&nbsp;помощи Headless Wordpress. Хостится все это на&nbsp;своем VPS-сервере. Со&nbsp;этими технологиями на&nbsp;момент разработки я&nbsp;столкнулась впервые, так что пришлось много в&nbsp;чем разбираться! Но&nbsp;я&nbsp;рада финальному результату, а&nbsp;особенно его визуальной составляющей, над которой я&nbsp;трудилась по&nbsp;дизайнам заказчика."
}, {
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
  "thumbnail": {
    "png": conbuild_thumbnail,
    "webp": conbuild_thumbnail_webp,
  },
  "text": "Продающая страница для&nbsp;выдуманной организации. Изначально разрабатывалась в&nbsp;команде на&nbsp;благотворительном хакатоне для фронтендеров. Для&nbsp;меня это была отличная практика верстки, а&nbsp;также прекрасная возможность изучить SCSS и&nbsp;поупражняться в&nbsp;создании слайдеров на&nbsp;чистом JavaScript. После окончания ивента я решила доработать проект, поправить его недочеты и&nbsp;сделать для него адаптив.\nВсе внедренные изменения описаны в&nbsp;README проекта."
}, {
  "id": 3,
  "title": "Поиск персонажей",
  "dark": false,
  "links": [
    {
      "name": "Посетить сайт",
      "link": "https://edelsid.github.io/character-search/"
    },
    {
      "name": "Посмотреть код",
      "link": "https://github.com/edelsid/character-search"
    },
    {
      "name": "API",
      "link": "https://rickandmortyapi.com/documentation/#character"
    }
  ],
  "color": "#eeecec",
  "stack": ["React", "CSS", "JavaScript", "Vite"],
  "screenshots": [
    {
      "png": RaM1,
      "webp": RaM1_webp,
    }, 
    {
      "png": RaM2,
      "webp": RaM2_webp,
    }
  ],
  "thumbnail": {
    "png": card_RaM,
    "webp": card_RaM_webp,
  },
  "text": "Этот простой сервис был сделан на&nbsp;основе The&nbsp;Rick and Morty API, и&nbsp;с&nbsp;его помощью можно искать персонажей этого мультсериала по&nbsp;имени. Результаты отображаются в&nbsp;виде списка карточек с&nbsp;минимальной информацией: полное имя, статус, дата добавления в&nbsp;базу данных. Поисковая строка принимает только английский язык и&nbsp;цифры. "
}, {
  "id": 4,
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
  "thumbnail": {
    "png": filters_thumbnail,
    "webp": filters_thumbnail_webp,
  },
  "text": "Проект был создан в&nbsp;рамках ивента \"Прими вызов\" от&nbsp;Хабр Карьеры и&nbsp;онлайн-школы Хекслет. Это&nbsp;второе упражнение с&nbsp;трека фронтендеров: система фильтрации отзывов о&nbsp;гипотетической услуге. По&nbsp;задумке ивента все задания должны были походить на&nbsp;реальные тестовые задачи, которые работодатели могли бы&nbsp;предложить соискателям.\nОсновные требования были такими:\n - Загрузить список отзывов через redux-saga,\n - Реализовать фильтрацию отзывов по&nbsp;платформе и&nbsp;диапазону оценок,\n - Реализовать сортировку отзывов по&nbsp;времени и&nbsp;оценке."
}];

export default projects;