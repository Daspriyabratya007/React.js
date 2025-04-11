function Cards({data}) {
    return (

        <div className="cards-layout" style={{backgroundColor:data.eyeColor}}>
            <p>{`${data.firstName} ${data.lastName}`}</p>
            <img src={data.image} alt ="Image is broken"/>
            <p>Username:@{data.username}</p>
            <p>My EyeColour is {data.eyeColor}</p>
            <p>My age is:{data.age}</p>
            <p>My Blood groop is:{data.bloodGroup}</p>
            <p>My hair colour is :{data.hair.color}</p>
            <p>My hair Type is :{data.hair.type}</p>

        </div>
    );
}
export default Cards;