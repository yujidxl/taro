import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'

export default class FormNormal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() {}

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View>
        <div className='form'>
          <Input type='text' id='name' placeholder='请输入用户名' value={this.props.msg.name} onInput={(e) => this.props.handleName(e.target.value)} />
          <Input type='text' id='pwd' placeholder="请输入密码" value={this.props.msg.pwd} onInput={(e) => this.props.handlePwd(e.target.value)} />
        </div>
      </View>
    )
  }
}