const getUrlWithQs = (url = '', params = {}, withMark = true) => {
  const paramsArr = [];
  for (var key in params) {
    paramsArr.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
  }
  if (withMark) {
    return `${url}?${paramsArr.join('&')}`;
  }
  return url + paramsArr.join('&');
}



module.exports = {
  getUrlWithQs,
}
