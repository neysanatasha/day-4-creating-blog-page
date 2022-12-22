let namaId = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

// Ngecek
let nodeJs = namaId('nodeJs')
let javaScript = namaId('javascript')
let reactJs = namaId('reactJs')
let typeScript = namaId('typeScript')

const data = []

function addData(event){
    event.preventDefault()
    let title = namaId('input-title').value
    let content = namaId('input-content').value
    let image = namaId('input-upload').files
    let gambar = URL.createObjectURL(image[0])
    console.log("gambar path ", gambar)

    // Menyimpan gambar utk dipanggil
    let iconNodeJs = ''
    let iconjavaScript = ''
    let iconReactJs = ''
    let icontypeScript = ''

    // Mengecek kondisi jika benar isi let diatas
    if(nodeJs.checked === true)
    {
        iconNodeJs = 'assets/img/nodejs.png'
    }
    if(javaScript.checked === true)
    {
        iconjavaScript = 'assets/img/javaScript.png'
    }
    if(reactJs.checked === true)
    {
        iconReactJs = 'assets/img/reactJs.png'
    }
    if(typeScript.checked === true)
    {
        icontypeScript = 'assets/img/typeScript.png'
    }

    // Menampung data buat dikirim ke array data
    let blog = {
        title,
        content,
        gambar,
        iconNodeJs,
        iconReactJs,
        iconjavaScript,
        icontypeScript
    }
    data.push(blog)
    console.log(data)
    renderBlog()
}

function renderBlog(){
    namaId('content').innerHTML = ''
    for(let index = 0; index < data.length; index++)
    {
        namaId('content').innerHTML +=
        `<div class="card-myproject">
            <img src="${data[index].gambar}" alt="">
            <h3>${data[index].title}</h3>
            <p>Durasi: 3 days ago</p>
            <p>${data[index].content}</p>
            <div class="icon-myproject">
                <img src="${data[index].iconNodeJs}" alt="">
                <img src="${data[index].iconjavaScript}" alt="">
                <img src="${data[index].iconReactJs}" alt="">
                <img src="${data[index].icontypeScript}" alt="">
            </div>
            <div class="custom-myproject">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>`
    }
}