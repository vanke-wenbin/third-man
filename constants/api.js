const ZHUZHER = '/api/zhuzher';
const FD = '/fd/api';
module.exports = {
  LOGIN: `${FD}/sns/callback`,
  BILLS_LIST: `${ZHUZHER}/yz/bills`,
  HOUSE_LIST: `${ZHUZHER}/users/me/houses`,
  CHANGE_HOUSE: `${ZHUZHER}/users/me/houses/main`
};
