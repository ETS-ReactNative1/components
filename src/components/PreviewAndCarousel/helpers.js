function checkIsRetinaDisplay() {
  if (window.matchMedia) {
    var mq = window.matchMedia(
      'only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)'
    );
    return (mq && mq.matches) || window.devicePixelRatio > 1;
  }
  return false;
}

function isNotEmpty(items) {
  return !!items && items.length > 0;
}

function createCarouselItems(list, attrs = {}) {
  return list.map((item) => {
    return {
      thumbnail_url: item,
      media_type: 'image',
      src_retina: item.replace(/\/large\//, '/original/'),
      ...attrs
    };
  });
}

function getCarouselItems(listingDetails) {
  let items = [];
  const {
    image_list_without_floorplans = [],
    image_list_large = [],
    multimedia_list = [],
    floor_plan_list = []
  } = listingDetails;

  if (isNotEmpty(image_list_without_floorplans)) {
    items = [...items, ...createCarouselItems(image_list_without_floorplans)];
  } else if (isNotEmpty(image_list_large)) {
    items = [...items, ...createCarouselItems(image_list_large)];
  }

  if (isNotEmpty(floor_plan_list)) {
    items = [...items, ...createCarouselItems(floor_plan_list, { floorplan: true })];
  }

  if (isNotEmpty(multimedia_list)) {
    items = [
      ...items,
      ...listingDetails.multimedia_list.map((item) => ({
        ...item,
        multimedia: true
      }))
    ];
  }

  return items;
}

function firstIndexOfType(items, type) {
  return items.findIndex((item) => item[`${type}`]);
}

export { getCarouselItems, firstIndexOfType };
