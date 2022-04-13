import React, {Component} from 'react';
import { Button,DatePicker } from 'antd';
import {WechatOutlined, SearchOutlined} from  '@ant-design/icons';



const { RangePicker } = DatePicker;
class App extends Component {
    render() {
        return (
            <div>
                App
                <button>点我</button>
                <Button type="primary">Primary Button</Button>
                <Button type="link">link Button</Button>
                <WechatOutlined />
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <DatePicker />
                <RangePicker showTime />
            </div>
        );
    }
}

export default App;