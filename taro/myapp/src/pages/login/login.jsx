import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import FormNormal from '../../components/form'
import handleAjax from '../../utils/ajax';
import './login.scss';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      formTitle: '登录',
      name: '',
      pwd: '',
    }
  }

  toRegister(){
    window.location.href = '#/pages/register/register'
  }

  
  config: config = {
    navigationBarTitleText: '登录'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const link = () => {
      window.location.href = '#/pages/home/home';
    }

    const setName = (name) => {
      this.setState({
        name: name
      })
    }

    const setPwd = (pwd) => {
      this.setState({
        pwd: pwd
      })
    }

    const showLoginSuccess = (param) => {
      let data = param.data;
      if(data.code == 0){
        Taro.showToast({
          title: '登录成功',
          icon: 'loading',
          duration: 2000
        })
        setTimeout(() => {
          link();
        }, 2000);
      }else{
        Taro.showToast({
          title: data.msg,
          icon: 'none',
          duration: 2000
        })
      }
    }

    const showLoginFailed = (param) => {
      Taro.showToast({
        title: '接口错误',
        icon: 'none',
        duration: 2000
      })
    }

    const confirmLogin = () => {
      const url = '//127.0.0.1:3000/users';
      if(!this.state.name || !this.state.pwd){
        Taro.showToast({
          title: '当前用户名和密码为空，请检查后重试',
          icon: 'none',
          duration: 2000,
        })
        return;
      }
      const data = {
        user_name: this.state.name,
        user_pwd: this.state.pwd 
      }
      handleAjax(url, 'GET', data, showLoginSuccess, showLoginFailed);
    }

    return (
      <View className='login'>
        <Text onClick={() => link()} className='text'>{this.state.formTitle}</Text>
        <FormNormal handleName={(msg) => setName(msg)}  handlePwd={(msg) => setPwd(msg)} msg={this.state}/>
        <Button  type='primary' className='btn' hoverClass='btn-dot' onClick={() =>{confirmLogin()}}>登录</Button>
        <Text className='regist' onClick={() => this.toRegister()}>去注册&gt;</Text>
      </View>
    )
  }

}

