import React, {Component} from 'react';

const data = [
    {id:'01',content:'Meg01'},
    {id:'02',content:'Meg02'},
    {id:'03',content:'Meg03'},
]
class Detail extends Component {
    render() {
        // 接受params参数
        const {id,title} = this.props.match.params
        const findResult = data.find((detailObj)=>{
            return detailObj.id = id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        );
    }
}

export default Detail;