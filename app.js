//movies를 실행했을때 영화 정보를 담아두고 검색할때 또 사용하기위해 moviedata를 밖에 빼두었다
let moviedata = [];
function movies() {
  fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=1609961e6087bc908a47717d3912b94c&language=ko-KR"
  )
    //Promise 객체로 response.json을 jason형태로 변환하고 두번쨰 .then은 jason을 처리하기 위해 사용한다
    .then((response) => response.json())
    .then((data) => {
      moviedata = data.results;
      console.log(moviedata);
      //htmr_temp를 선언후 큰 틀을 잡고 아래 데이터를 담기위해""를 붙여 상자를 만든다
      let html_temp = "";

      moviedata.forEach(function (a) {
        console.log(a.title);
        //위에 htmr에 넣을 데이터들을 생성한다
        //onclick으로 클릭이벤트가 발생되엇을떄 'show_id' 함수를 부를수 있다
        html_temp =
          html_temp +
          ` <div class="col">
        <div class="card h-100">
          <img
            src="https://image.tmdb.org/t/p/w500/${a.poster_path}"
            class="card-img-top"
            onclick='show_id("${a.id}")'
          />
          <div class="card-body">
            <h5 class="card-title">${a.title}</h5>
            <p class="card-text">${a.overview}</p>
            <p class="mycomment">${a.vote_average}</p>
          </div>
        </div>
      </div>
    </div>`;
      });
      //innerHTML은 마지막 함수만 담아내 1개만 들어가고 최대한 많은 내용을 담아낸다
      document.querySelector("#cards-box").innerHTML = html_temp;
    });
}
movies();

//검색기능
function doAction(param) {
  let reg = new RegExp(param, "g");
  let result = [];
  moviedata.forEach((x) => {
    if (reg.test(x.title)) {
      result.push(x);
    }
  });
  let html_temp = "";
  result.forEach((a) => {
    //위에 포스터 안에서 검색을 해야 되기 때문에 htmr에 같은 데이터를 넣어주고 템플릿 리터럴로 불러내어 준다
    //``안에는 모든 글자가 문장처리가 되어 템플릿 리터럴로 불러낸다
    html_temp =
      html_temp +
      ` <div class="col">
  <div class="card h-100">
    <img
      src="https://image.tmdb.org/t/p/w500/${a.poster_path}"
      class="card-img-top"
      onclick='show_id("${a.id}")'
    />
    <div class="card-body">
      <h5 class="card-title">${a.title}</h5>
      <p class="card-text">${a.overview}</p>
      <p class="mycomment">${a.vote_average}</p>
    </div>
  </div>
</div>
</div>`;
    document.querySelector("#cards-box").innerHTML = html_temp;
  });
}
//alert를 선언 하여 사진을 누르면 해당 id 가 경고창에 뜨도록한다
function show_id(id) {
  alert(`id=${id}`);
}
// const Title = document.querySelector{"#movietitle"}
// const  Img = document.querySelector("movieImage")

//fetch()
//.then(res =>res.json())
//.then ( data =>{
//    rows = data['results']

//  rows.forEach(arr =>{
//     let.title =arr.title
//     let overview =arr.overview
//     let pach = arr.poster_pach
//     let star = arr.vote_vote_average
//     let id =arr.id

//     document
//  })

//  });
