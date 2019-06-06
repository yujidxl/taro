import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import qs from 'qs';
import FormNormal from '../../components/form'
import handleAjax from '../../utils/ajax'
import '../login/login.scss';

export default class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      formTitle: '注册',
      user_name: '',
      user_pwd: ''
    }
  }

  setName(name){
    this.setState({
      user_name: name
    })
  }

  setPwd(pwd){
    this.setState({
      user_pwd: pwd
    })
  }

  showRegisterSuccess(param){
    let data = param.data;
    console.log(data);
    if (data.code == 0) {
      Taro.showToast({
        title: '注册成功，自动登录中...',
        icon: 'loading',
        duration: 2000
      })
      setTimeout(() => {
        window.location.href = '#/pages/home/home'
      }, 2000);
    } else {
      Taro.showToast({
        title: data.msg,
        icon: 'none',
        duration: 2000
      })
    }
  }


  showRegisterFailed(param){
    console.log(param);
    Taro.showToast({
      title: '接口错误',
      icon: 'none',
      duration: 2000
    })
  }

  

  confirmRegister(){
    const url = 'http://127.0.0.1:3000/register';
    console.log(this.state.user_name, this.state.user_pwd)
    if(!this.state.user_name || !this.state.user_pwd){
      Taro.showToast({
        title: '用户名和密码不能为空',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    let data = {user_name: this.state.user_name, user_pwd: this.state.user_pwd};

    handleAjax(url, 'post', data, this.showRegisterSuccess, this.showRegisterFailed)

  }

  config: config = {
    navigationBarTitleText: '注册'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render(){
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
    return(
      <View className='login'>
        <Text onClick={() => link()} className='text'>{this.state.formTitle}</Text>
        <FormNormal 
        handleName={(msg) => this.setName(msg)} 
        handlePwd={(msg) => this.setPwd(msg)} 
        msg={{name: this.state.user_name, pwd: this.state.user_pwd}} 
        />
        <Button type='primary' className='btn' hoverClass='btn-dot' onClick={() => { this.confirmRegister() }}>注册</Button>
        <Text className='regist' onClick={() => window.location.href = '#/pages/login/login'}>去登陆&gt;</Text>
      </View>
    )
  }
}