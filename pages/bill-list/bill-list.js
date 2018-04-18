const timeUtils = require('../../utils/time');
const UrlUtils = require('../../utils/url.js');
const HttpHelper = require('../../helpers/http.js');
const api = require('../../constants/api');
const STATUS = require('../../constants/status');

Page({
  data: {
    date: timeUtils.formatTimestamp(Date.now(), 'YYYY-MM'),
    bills: [],
    yearBills: {},
    billsTree: {},
    pageStatus: STATUS.DEFAULT,

  },
  onReady: function () {
    this.getPastBills();
  },

  getPastBills() {
    const [year, mth] = this.data.date.split('-');
    let endDate = '';
    const beginDate = `${year - 1}-${mth}`;
    if (this.data.pageStatus = STATUS.DEFAULT) {
      endDate = `${year + 3}-${mth}`;
    } else {
      endDate = this.data.date;
    }

    const url = UrlUtils.getUrlWithQs(api.BILLS_LIST, {
      arrears_only: 0,
      end_date: endDate,
      begin_date: beginDate,
    });

    HttpHelper.get({
      url,
      success: data1 => {
        const data = {
          "cust_code": "612566",
          "totalUnpaid": 1075.73,
          "wqUnpaid": 0.0,
          "house_mdscode": "1003A11000000000BYXB",
          "remain": 0.0,
          "allUnpaid": 1075.73,
          "bis": [
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 359.32,
              "totalExpenses": 359.32,
              "mth": "2018-06",
              "costs": [
                {
                  "status": 0,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201806,
                  "paid": 0.0,
                  "expenses": 32.67,
                  "unpaid": 32.67,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 162906888
                },
                {
                  "status": 0,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201806,
                  "paid": 0.0,
                  "expenses": 326.65,
                  "unpaid": 326.65,
                  "expenseName": "高层物业服务费",
                  "expenseId": 162906887
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 359.32,
              "totalExpenses": 359.32,
              "mth": "2018-05",
              "costs": [
                {
                  "status": 0,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201805,
                  "paid": 0.0,
                  "expenses": 326.65,
                  "unpaid": 326.65,
                  "expenseName": "高层物业服务费",
                  "expenseId": 162932056
                },
                {
                  "status": 0,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201805,
                  "paid": 0.0,
                  "expenses": 32.67,
                  "unpaid": 32.67,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 162932057
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 357.09,
              "totalExpenses": 359.32,
              "mth": "2018-04",
              "costs": [
                {
                  "status": 0,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201804,
                  "paid": 2.23,
                  "expenses": 326.65,
                  "unpaid": 324.42,
                  "expenseName": "高层物业服务费",
                  "expenseId": 163044724
                },
                {
                  "status": 0,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201804,
                  "paid": 0.0,
                  "expenses": 32.67,
                  "unpaid": 32.67,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 163044725
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 0.0,
              "totalExpenses": 359.32,
              "mth": "2018-03",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201803,
                  "paid": 326.65,
                  "expenses": 326.65,
                  "unpaid": 0.0,
                  "expenseName": "高层物业服务费",
                  "expenseId": 142668378
                },
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201803,
                  "paid": 32.67,
                  "expenses": 32.67,
                  "unpaid": 0.0,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 142668379
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 7749789,
              "totalUnpaid": 0.0,
              "totalExpenses": 20.0,
              "mth": "2018-03",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 260,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": "201803",
                  "paid": 20.0,
                  "expenses": 20.0,
                  "unpaid": 0.0,
                  "expenseName": "有偿维修",
                  "expenseId": 7749789260
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 0.0,
              "totalExpenses": 359.32,
              "mth": "2018-02",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201802,
                  "paid": 32.67,
                  "expenses": 32.67,
                  "unpaid": 0.0,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 142690935
                },
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201802,
                  "paid": 326.65,
                  "expenses": 326.65,
                  "unpaid": 0.0,
                  "expenseName": "高层物业服务费",
                  "expenseId": 142690934
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 0.0,
              "totalExpenses": 359.32,
              "mth": "2018-01",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201801,
                  "paid": 326.65,
                  "expenses": 326.65,
                  "unpaid": 0.0,
                  "expenseName": "高层物业服务费",
                  "expenseId": 142653334
                },
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201801,
                  "paid": 32.67,
                  "expenses": 32.67,
                  "unpaid": 0.0,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 142653335
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 7426445,
              "totalUnpaid": 0.0,
              "totalExpenses": 60.0,
              "mth": "2018-01",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 260,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": "201801",
                  "paid": 60.0,
                  "expenses": 60.0,
                  "unpaid": 0.0,
                  "expenseName": "有偿维修",
                  "expenseId": 7426445260
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 0.0,
              "totalExpenses": 359.32,
              "mth": "2017-12",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201712,
                  "paid": 326.65,
                  "expenses": 326.65,
                  "unpaid": 0.0,
                  "expenseName": "高层物业服务费",
                  "expenseId": 125232616
                },
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201712,
                  "paid": 32.67,
                  "expenses": 32.67,
                  "unpaid": 0.0,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 125232617
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 7128196,
              "totalUnpaid": 0.0,
              "totalExpenses": 20.0,
              "mth": "2017-12",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 238,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": "201712",
                  "paid": 20.0,
                  "expenses": 20.0,
                  "unpaid": 0.0,
                  "expenseName": "社区一卡通工本费",
                  "expenseId": 7128196238
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 0.0,
              "totalExpenses": 359.32,
              "mth": "2017-11",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201711,
                  "paid": 32.67,
                  "expenses": 32.67,
                  "unpaid": 0.0,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 125244496
                },
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201711,
                  "paid": 326.65,
                  "expenses": 326.65,
                  "unpaid": 0.0,
                  "expenseName": "高层物业服务费",
                  "expenseId": 125244495
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 6541784,
              "totalUnpaid": 0.0,
              "totalExpenses": 30.0,
              "mth": "2017-11",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 260,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": "201711",
                  "paid": 30.0,
                  "expenses": 30.0,
                  "unpaid": 0.0,
                  "expenseName": "有偿维修",
                  "expenseId": 6541784260
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 0.0,
              "totalExpenses": 359.32,
              "mth": "2017-10",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201710,
                  "paid": 326.65,
                  "expenses": 326.65,
                  "unpaid": 0.0,
                  "expenseName": "高层物业服务费",
                  "expenseId": 125364024
                },
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201710,
                  "paid": 32.67,
                  "expenses": 32.67,
                  "unpaid": 0.0,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 125364025
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 6493735,
              "totalUnpaid": 0.0,
              "totalExpenses": 20.0,
              "mth": "2017-10",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 238,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": "201710",
                  "paid": 20.0,
                  "expenses": 20.0,
                  "unpaid": 0.0,
                  "expenseName": "社区一卡通工本费",
                  "expenseId": 6493735238
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 6437308,
              "totalUnpaid": 0.0,
              "totalExpenses": 100.0,
              "mth": "2017-10",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 260,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": "201710",
                  "paid": 100.0,
                  "expenses": 100.0,
                  "unpaid": 0.0,
                  "expenseName": "有偿维修",
                  "expenseId": 6437308260
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 0.0,
              "totalExpenses": 359.32,
              "mth": "2017-09",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201709,
                  "paid": 326.65,
                  "expenses": 326.65,
                  "unpaid": 0.0,
                  "expenseName": "高层物业服务费",
                  "expenseId": 109873635
                },
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201709,
                  "paid": 32.67,
                  "expenses": 32.67,
                  "unpaid": 0.0,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 109873636
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 0.0,
              "totalExpenses": 359.32,
              "mth": "2017-08",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201708,
                  "paid": 32.67,
                  "expenses": 32.67,
                  "unpaid": 0.0,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 109900496
                },
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201708,
                  "paid": 326.65,
                  "expenses": 326.65,
                  "unpaid": 0.0,
                  "expenseName": "高层物业服务费",
                  "expenseId": 109900495
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 0.0,
              "totalExpenses": 359.32,
              "mth": "2017-07",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201707,
                  "paid": 326.65,
                  "expenses": 326.65,
                  "unpaid": 0.0,
                  "expenseName": "高层物业服务费",
                  "expenseId": 109863835
                },
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201707,
                  "paid": 32.67,
                  "expenses": 32.67,
                  "unpaid": 0.0,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 109863836
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 4722476,
              "totalUnpaid": 0.0,
              "totalExpenses": 100.0,
              "mth": "2017-07",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 54,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": "201707",
                  "paid": 100.0,
                  "expenses": 100.0,
                  "unpaid": 0.0,
                  "expenseName": "室外车位租赁费",
                  "expenseId": 472247654
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 0.0,
              "totalExpenses": 359.32,
              "mth": "2017-06",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201706,
                  "paid": 326.65,
                  "expenses": 326.65,
                  "unpaid": 0.0,
                  "expenseName": "高层物业服务费",
                  "expenseId": 93798170
                },
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201706,
                  "paid": 32.67,
                  "expenses": 32.67,
                  "unpaid": 0.0,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 93798171
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 4722475,
              "totalUnpaid": 0.0,
              "totalExpenses": 100.0,
              "mth": "2017-06",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 54,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": "201706",
                  "paid": 100.0,
                  "expenses": 100.0,
                  "unpaid": 0.0,
                  "expenseName": "室外车位租赁费",
                  "expenseId": 472247554
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 0.0,
              "totalExpenses": 359.32,
              "mth": "2017-05",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201705,
                  "paid": 326.65,
                  "expenses": 326.65,
                  "unpaid": 0.0,
                  "expenseName": "高层物业服务费",
                  "expenseId": 93810339
                },
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201705,
                  "paid": 32.67,
                  "expenses": 32.67,
                  "unpaid": 0.0,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 93810340
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 4722474,
              "totalUnpaid": 0.0,
              "totalExpenses": 100.0,
              "mth": "2017-05",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 54,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": "201705",
                  "paid": 100.0,
                  "expenses": 100.0,
                  "unpaid": 0.0,
                  "expenseName": "室外车位租赁费",
                  "expenseId": 472247454
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 0,
              "totalUnpaid": 0.0,
              "totalExpenses": 359.32,
              "mth": "2017-04",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 2,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201704,
                  "paid": 326.65,
                  "expenses": 326.65,
                  "unpaid": 0.0,
                  "expenseName": "高层物业服务费",
                  "expenseId": 93808449
                },
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 19,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": 201704,
                  "paid": 32.67,
                  "expenses": 32.67,
                  "unpaid": 0.0,
                  "expenseName": "日常收取的维修资金",
                  "expenseId": 93808450
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 4275877,
              "totalUnpaid": 0.0,
              "totalExpenses": 100.0,
              "mth": "2017-04",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 54,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": "201704",
                  "paid": 100.0,
                  "expenses": 100.0,
                  "unpaid": 0.0,
                  "expenseName": "室外车位租赁费",
                  "expenseId": 427587754
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 4900195,
              "totalUnpaid": 0.0,
              "totalExpenses": 20.0,
              "mth": "2017-04",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 238,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": "201704",
                  "paid": 20.0,
                  "expenses": 20.0,
                  "unpaid": 0.0,
                  "expenseName": "社区一卡通工本费",
                  "expenseId": 4900195238
                }
              ],
              "totalLateFee": 0.0
            },
            {
              "billMonthId": "",
              "order_id": 4858036,
              "totalUnpaid": 0.0,
              "totalExpenses": 20.0,
              "mth": "2017-04",
              "costs": [
                {
                  "status": 1,
                  "lateFee": 0.0,
                  "billAcctItemId": 238,
                  "servCode": "1003A11000000000BYXB",
                  "billingCycleId": "201704",
                  "paid": 20.0,
                  "expenses": 20.0,
                  "unpaid": 0.0,
                  "expenseName": "社区一卡通工本费",
                  "expenseId": 4858036238
                }
              ],
              "totalLateFee": 0.0
            }
          ]
        }
        const nextDate = mth === '01' ?
          `${year - 2}-12` :
          `${year - 1}-${(mth - 1).toString().padStart(2,'0')}`;

        if (this.data.pageStatus = STATUS.DEFAULT) {
          this.setData({ pageStatus: STATUS.SUCCESS });
        }

        const { bis } = data;
        const billsTree = Object.assign({}, this.data.billsTree);

        bis.forEach(bill => {
          const { mth } = bill;
          if (billsTree[mth]) {
            billsTree[mth].push(bill);
          } else {
            billsTree[mth] = [bill];
          }
        });

        const yearBills = {};

        Object.keys(billsTree).forEach(mth => {
          const [year, month] = mth.split('-');
          const bill = {};
          bill.totalUnpaid = billsTree[mth].reduce((unpaid,v) => unpaid + v.totalUnpaid, 0);
          bill.totalExpenses = billsTree[mth].reduce((unpaid,v) => unpaid + v.totalExpenses, 0);
          bill.mth = mth;
          bill.isSelected = true;
          if (!yearBills[year]) {
            yearBills[year]=[bill];
          } else {
            yearBills[year].push(bill);
          }
        });

        const bills = Object.keys(yearBills).map(key => ({
          title: key,
          data: yearBills[key],
        })).sort((a,b) => b.title - a.title);

        this.setData({
          billsTree,
          bills,
          yearBills,
        })
      },
      fail: err => {
        console.log('fail', err);
      },
      complete(){
      }
    });
  },


})
