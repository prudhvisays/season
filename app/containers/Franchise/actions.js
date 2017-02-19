export function postFrancCord(data) {
  return {
    type: 'POST_FRANC_CORD',
    payload: data,
  };
}

export function postGeoFence(data) {
  return {
    type: 'POST_GEO_FENCE',
    payload: data,
  };
}

export function onFormChange(data) {
  return {
    type: 'ON_FORM_CHANGE',
    payload: data,
  };
}
