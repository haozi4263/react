import React, {Component} from 'react';

/*  let obj = {name:"jude",age:11}
    name='jude'&age=18 ==>urlencoded
    querystring 可以实现改功能
    yarn add querystring
*/


const data = [
    {id:'01',content:'Meg01'},
    {id:'02',content:'Meg02'},
    {id:'03',content:'Meg03'},
]
class Detail extends Component {
    render() {
        // 接受state参数
        console.log(this.props)
        // params
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