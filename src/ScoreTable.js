import React from "react";
import TableBody from "./TableBody";
class ScoreTable extends React.Component{
    render(){
        const name = this.props.name;
        const stu = this.props.stu;
        return(
            <div>
                <center>{name}</center>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>국어</th>
                            <th>영어</th>
                            <th>수학</th>
                        </tr>
                    </thead>
                    <TableBody stu={stu}/>
                </table>
            </div>
        );
    }
}
export default ScoreTable;