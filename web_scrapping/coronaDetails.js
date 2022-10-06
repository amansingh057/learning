const request = require('request');

const cheerio = require('cheerio')


console.log('Before')
request('https://www.worldometers.info/coronavirus/', cb);

function cb(error,response,html){
    if(error){
        console.log(error)
    }
    else{
        handleHtml(html)
    }
}

function handleHtml(html){
    // in setTool we get whole html and cheerio is formatting it in cheerio format
    let selTool = cheerio.load(html)
    // console.log(selTool)

    let contentArr = selTool('.maincounter-number span')
    // for(let i=0;i<contentArr.length;i++){
    //     let data = selTool(contentArr[i]).text();
    //     console.log(data)
    // }
    let totalCases = selTool(contentArr[0]).text();
    let totalDeaths = selTool(contentArr[1]).text();
    let totalRecovered = selTool(contentArr[2]).text();

    console.log('totalCases -->'+totalCases)
    console.log('totalDeaths -->'+totalDeaths)
    console.log('totalRecovered -->'+totalRecovered)
}
console.log('After')