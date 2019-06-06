import Taro from '@tarojs/taro';
const handleAjax = (url, method = 'GET', data, successFunc, failFunc) => {
  let options = {
    url,
    method,
    responseType: 'json',
    data,
  }
  if(method == 'POST'){
    options.header = { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
  }
  Taro.request(options)
  .then( (res) => { successFunc(res)})
  .catch(err => {failFunc(err)})
  .finally( () => {console.log(`对接口${url}发起的请求已结束`)});
}

export default handleAjax;