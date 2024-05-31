export parseVideoDuration = (duration) => {

    console.log(duration);


    const durationParts = duration
    .replace("PT","")
    .replace("H","")
    .replace("M","")
    .replace("M","")
    .split(":");   


    console.log(durationParts);

    if(durationParts.length === 3){
        return `${durationParts[0]}:${parseInt(durationParts[1])<10 ? `0${durationParts[1]}` 
        :durationParts[1]
    }:${

    }`;
    }

    return (
    
<>
</>
    )
}