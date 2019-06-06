import Taro from '@tarojs/taro';
const handleAjax = (url, method = 'get', data, successFunc, failFunc) => {
  Taro.request({
    url,
    header: {'content-type':'application/json'},
    method,
    data,
    dataType: 'json',
  })
  .then( (res) => { successFunc(res)})
  .catch(err => {failFunc(err)})
  .finally( () => {console.log(`对接口${url}发起的请求已结束`)});
}

export default handleAjax;