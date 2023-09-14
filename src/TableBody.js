import React from "react";
class TableBody extends React.Component{
    render(){
        const stu = this.props.stu;
        console.log(stu);
        return(
            <tbody>
                {
                    stu.map((v, i)=>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{v.name}</td>
                            <td>{v.kor}</td>
                            <td>{v.eng}</td>
                            <td>{v.math}</td>
                        </tr>
                    ))
                }
            </tbody>
        );
    }
}
export default TableBody;