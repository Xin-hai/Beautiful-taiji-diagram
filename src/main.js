let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `/* 你好,我是一名前端工程师Xinhai
 * 我将用代码画一下中国的优美太极两仪图。
 * 《周易》道：“易有太极，是生两仪。两仪生四象，四象生八卦。”
 * 注意看好了，接下来我要开始加样式了
 * 首先,准备一个div
 */
#div1{
    border: 1px solid blue;
    width: 200px;
    height: 200px;
}
/* 
 * 然后,把div变为一个圆
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 两仪是阴阳分明的
 * 阴阳为一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加入一黑一白两个“风火轮” */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}
/* 谢谢您的观看，新海一直在成长中，必将继续努力。*/
`;
let string2 = ''

// string = string.replace(/\n/g,"<br>")
console.log(string.length)

let n = 0

let step = ()=>{
    setTimeout(() =>{
      
        if(string[n] === '\n'){
            string2 = string2 + "<br>"  // 回车
        }else if(string[n] === " "){
            string2 += "&nbsp"  // 空格
        }else{
            string2 = string2 + string[n] // 如果不是回车就直接给它
        }
        // string2 +=(string[n] === "\n" ? "<br>" : string[n])
       html.innerHTML = string2 
       style.innerHTML = string.substring(0,n)
       window.scrollTo(0, 99999);
       html.scrollTo(0, 99999);
        if(n < string.length -1){
            // 如果n不是最后一个就继续
            n +=1
            step()
        } 
    }, 0)   
}

step()




