

function ip(str:string, sol:string="", level:number=3, res:string[]=[]){
    if (level == 0) {
        if (parseInt(str) <= 255){
            res.push((sol+"."+str).substr(1));
        }
        return
    }
    for (let i = 0; i < 3; i++) {        
        if (str.length > i+1){
            let tempPart = str.substr(0,i+1);
            let tempStr = str.substr(i+1);
            let tsLen = tempStr.length

            // filter solutions
            if (parseInt(tempPart) <= 255 && tsLen <= (level*3) && tsLen >= level){
                // might be a solution
                ip(tempStr, sol+"."+tempPart, level - 1, res);
            }
        }
    }

    return res;
}



console.log(ip("26134520"));
 