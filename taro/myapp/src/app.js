import Taro, { Component } from '@tarojs/taro'
import Home from './pages/home/home'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config = {
    pages: [
      'pages/home/home',
      'pages/shop/shop',
      'pages/person/person',
      'pages/login/login',
      'pages/register/register'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      list: [
        {
          pagePath: "pages/home/home",
          iconPath: './images/home-page.png',
          selectedIconPath: './images/home-page.png',
          text: "首页",
        },
        {
          pagePath: "pages/shop/shop",
          iconPath: './images/shop.png',
          selectedIconPath: './images/shop.png',
          text: "商城",
        },
        {
          pagePath: "pages/person/person",
          iconPath: './images/person-center.png',
          selectedIconPath: './images/person-center.png',
          text: "我的",
        }
      ],
      custom: true,
      color: "#a6a6a6",
      selectedColor: "#78a4fa",
      backgroundColor: "#ffffff",
      borderStyle: "black"
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
