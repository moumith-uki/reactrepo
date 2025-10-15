

export default function Props(){
    
    const flower ={
        name:'rose',
        count:'40'
    }

    const flower2 =[
        {name:'a',count:'10'},
        {name:'b',count:'20'},
        {name:'c',count:'32'}
]
    return(
        <>
        <h1>This is a : {flower2[2].name}</h1>
        </>
    );
}
