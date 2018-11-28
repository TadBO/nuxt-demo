/**
 * @Author: Tuber
 * @Date: 2018/11/23
 * @Version: 1.0
 * @Last Modified by: Tuber
 * @Last Modified time: 2018/11/23
 */
export default ( { $axios, redirect } ) => {
  //请求发送之前
  $axios.onRequest(config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers['Accept'] = 'text/plain, */*; q=0.01'
    if (config.method === 'get') {
      config.params = Object.assign({ t: +new Date() }, config.params)
    }
  })
  //请求返回
  $axios.onResponse(response => {
    const res = response.data
    if (res.state === 0) {
      return Promise.resolve(response)
    } else if (res.state === -8) {
      return redirect('/sign/login')
    } else {
      return Promise.reject(response)
    }
  })
  //请求失败
  $axios.onResponseError(error => {
    return Promise.reject(error)
  })
}
