// import logo from './logo.svg';
// import { Button } from 'antd';
// import { Input } from 'antd';
import * as AntdComponent from 'antd'; //การใช้ทั้งหมด
import 'antd/dist/reset.css';
import './App.css';
// import { useState } from 'react';
// import { PoweroffOutlined} from '@ant-design/icons';
// import * as icons from '@ant-design/icons';

 
const App = () => {

  // const [loading,setLoading] = useState(false)

  // const onButtonClick=(e)=>{
  //   console.log('Click')
  //   setLoading(true)
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },2000)
  // }
   
  return (<div className="App">
    <header className="App-header">
      {/* <AntdComponent.Button type="primary" 
         block
         loading={loading}
         icon={<icons.PoweroffOutlined/>}
         className='my-button'
         onClick={onButtonClick}
         >Button</AntdComponent.Button> */}
      <AntdComponent.Input
      placeholder='Name'
      maxLength={10}
      ></AntdComponent.Input>
    </header>
  </div>)
};


export default App;
