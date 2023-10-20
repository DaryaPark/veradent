let center =  [55.67758506907369, 37.630705499999905];
function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 16,
  });

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/svg/mark.svg',
    iconImageSize: [50, 100],
    iconImagOffset: [-3, -42]
  });
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  // map.controls.remove('typeSelector'); // удаляем тип
  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  // map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scroll']); // отключаем скролл карты (опционально)

  map.behaviors.disable(['drag']); // отключаем прокрутку карты

  // let placemark = new ymaps.Placemark([center], {}, {
  //   iconLayout: 'default#image',
  //   iconImageHref: 'img/point-map.svg',
  //   iconImageSize: [28, 40],
  //   iconImagOffset: [-3, -42]
  // });
   // Размещение геообъекта на карте.
  map.geoObjects.add(placemark);
  }





ymaps.ready(init);
