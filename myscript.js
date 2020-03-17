var myapi='https://www.googleapis.com/youtube/v3/search?key=AIzaSyBWEBpnoZoJQQLXHx3v6r_6ZoBfxC_m3AM&type=video&part=snippet&maxResults=29&q=';
var submitButton=document.getElementById("submit");
submitButton.addEventListener('click',ButtonClicked);
var current_page = 1;
var records_per_page = 6;
var objJson=[];

function ButtonClicked(event)
{
    objJson=[];
    var searchkey=document.getElementById("searchkey").value;
    var url=myapi+searchkey;
    
    fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = "";
      let item = data.items;
      for (card of item) {
          objJson.push(card);
      }
      changePage(1);
    });
    
}
console.log(objJson);
function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    console.log(page);
    footer=`
      <a href="javascript:prevPage()" id="btn_prev">Prev</a>
      <a href="javascript:nextPage()" id="btn_next">Next</a>
      page: <span id="page"></span>`;
      document.getElementById("container").innerHTML = footer;
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";
    var endlimit;
    if(page<numPages())
    {

        endlimit=page * records_per_page;
    }
    else
    {
        endlimit=objJson.length;
        
    }
    for (var i = (page-1) * records_per_page; i <endlimit ; i++) {
    
        output =
        `<div class="block"><div id="innerdiv"><iframe height =300 width=540 src="https://www.youtube.com/embed/${objJson[i].id.videoId}" class = "video"></iframe> </div>
        <div class="content"> <p>${objJson[i].snippet.title}</p><p >${objJson[i].snippet.description}</p></div></div>`;
      listing_table.innerHTML += output ;
     }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

