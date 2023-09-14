import React, { PureComponent } from 'react';
class ListExample extends PureComponent {
    render() {
        const priceList = [1000, 2000, 3000, 4000];
        const price = priceList.map((v, i)=>(
            <div key={i}>가격 : {v}원</div>
        ));
        return (
            [1,2,3,4,5].map((v, i)=>(
                <div key={i}>가격 : {v}원</div>
            ))
            // <>
            //     <div>
            //         <label>가격 목록</label>
            //         {price}     
            //     </div>
            //     <div>
            //         <h1>aaaa</h1>
            //     </div>
            // </>
        );
    }
}

export default ListExample;