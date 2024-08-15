const COLORS ={
    green:{
        bg:"bg-[#ECF7D4]",
        badge:"bg-[#D6F497]",
    },
    orange:{
        bg:"bg-[#F9EFE1]",
        badge:"bg-[#F7E0B8]",
    },
    red:
    {
        bg:"bg-[#FBESE7]",
        badge:"bg-[#FDC6C7]",


    },
};
export const getRandomColor =()=>{
    const colorNames = Object.keys(COLORS);//get array of the keys (color names)
    ["green","orange","red"]
    const randomIndex =Math.floor(Math.random()*colorNames.length);//get a random index
    const randomColorName =colorNames[randomIndex];//get the color name at the random index
    return COLORS[randomColorName];//return the color object corresponding to the random color name
};

