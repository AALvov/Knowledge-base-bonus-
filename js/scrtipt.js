const element = document.querySelector('select');
const choices = new Choices(element,
  {
    searchEnabled: false,
    shouldSort: false,

    placeholder: true,

    itemSelectText: '',

    position: 'bottom'
  });

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [48.8534, 2.3488],
    zoom: 13,
    // controls: []
  }, {
    searchControlProvider: 'yandex#search'
  }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),


    myPlacemarkWithContent = new ymaps.Placemark([48.872185, 2.354224], {
      hintContent: 'Собственный значок метки с контентом',
      balloonContent: 'А эта — новогодняя',
      iconContent: ''
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: '../img/Subtract.svg',
      // Размеры метки.
      iconImageSize: [28, 40],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-24, -24],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [15, 15],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects

    .add(myPlacemarkWithContent);
});


let customScroll = document.querySelector('.custom__scroll');
new SimpleBar(customScroll, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

new JustValidate('.custom__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },

    mail: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      function: (name, value) => {
        const tel = selector.inputmask.unmaskedvalue()
        return Number(tel) && tel.length === 10
      }
    }
  },
  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Имя слишком короткое',
      maxLength: 'Имя слишком длинное'
    },
    phone: {
      required: 'Вы не ввели телефон',
      function: 'Некорректно введен телефон'

    },
    mail: {
      required: 'Вы не ввели e-mail',
      email: 'Вы ввели некорректный e-mail'
    },
  },


});

let tooltip_content = document.getElementById('popup');

tippy('#ToolTip', {
  content: 'Глава 2, страница 176',
  placement: 'top',
  maxWidth: 160,
  theme: 'gray',
  popperOptions: {

    modifiers: [
      {
        name: 'flip',

        enabled: false,

      }
    ]
  }
});
