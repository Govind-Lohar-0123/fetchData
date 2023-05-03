let content = document.getElementsByClassName("content")[0];
console.log(content);
let writter = document.getElementsByClassName("writter")[0];

let newQuotos = document.getElementsByClassName("btn")[0];
//**** */ fetch API***********
let api = "https://type.fit/api/quotes";
let count;
let readable;

function getQouts() {
    count = Math.floor(Math.random() * 1632);
    writter.innerHTML = readable[count].author;
    content.innerHTML = readable[count].text;
}
let getData = async () => {
    let fetcher = fetch(api);
    try {
        let data = await fetcher;
        readable = await data.json();
        getQouts();

    }
    catch (error) {
        console.log("error");
    }
}
// fetch end
getData();
//****new qotous**** */



newQuotos.addEventListener("click", () => {
    count = Math.floor(Math.random() * 1632);

    let check = readable[count].author;
    if (check) {
        writter.innerHTML = readable[count].author;
        content.innerHTML = readable[count].text;
        ;
    }
    else {
        writter.innerHTML = 'unknown';
    }




}
)




//



