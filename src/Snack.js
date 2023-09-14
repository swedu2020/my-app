function Snack(obj){
    console.dir(obj);
    const users = {
        '홍길동':['새우깡', '고래밥', '콘칩', '포테이토칩'],
        '이순신':['고구마깡', '치토스', '썬칩', '홈런볼']
    };
    function printSnacks(){
        var result = [];
        if(users[obj.name]){
            for(let i=0; i<obj.cnt; i++){
                result.push(<h3 key={i}>{users[obj.name][i]}</h3>);
            }
        }
        return result;
    }
    return(
        <div>{printSnacks()}</div>
    );
}
export default Snack;