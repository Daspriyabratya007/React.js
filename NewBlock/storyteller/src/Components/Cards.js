function Cards({name,imgPath,username,eyecolor,age,address,BloodG}) {
    //name and imgPath is called propsr
    // let bgColour = "";
    // if(eyecolor=="blue")
    // {
    //     bgColour = "rgb(2, 2, 36)";
    // }
    // else if (eyecolor=="Red")
    // {
    //     bgColour = "rgb(244, 3, 3)";
    // }
    // else if (eyecolor == "Hazel")
    // {
    //     bgColour ="rgb(165, 42, 42)";
    // }
    // else if (eyecolor == "Amber")
    // {
    //     bgColour ="rgb(255, 191, 0)";
    // }
    // else if (eyecolor=="Green")
    // {
    //     bgColour =  "rgb(63, 244, 3)";
    // }
    // else if (eyecolor=="Hazel")
    // {
    //     bgColour = "rgb(165, 42, 42)";
    // }
    // else{
    //     bgColour = "rgb(3, 3, 3)";
    // }

    return (

        <div className="cards-layout">
            <p>{name}</p>
            <img src={imgPath} alt ="Image is broken"/>
            <p>{username}</p>
            <p>{eyecolor}</p>
            <p>{age}</p>
            <p>{BloodG}</p>

        </div>
    );
}
export default Cards;