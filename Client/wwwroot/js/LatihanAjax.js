console.log("testingggggggg");

//$("h1").html("berubah");
//$(".test").html("berubah 2");
//$("#test2").html("berubah 3");

//ajax
$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon", //OpenAPI
    //success: function (result) {
    //    // console.log(result.results);
    //    var temp = "";
    //    $.each(result.results, (key, val) => {
    //        temp += "<li>" + val.name + "</li>";
    //    })
    //    console.log(temp);
    //    $("#listPoke").html(temp);
    //}

}).done((result) => {
    var temp = "";

    $.each(result.results, (key, val) => {
        temp += `<tr>
            <td>${key+1}</td>
            <td>${val.name}</td>
            <td><button type="button" class="btn btn-primary" onclick="detail('${val.url}')" data-bs-toggle="modal" data-bs-target="#modalPoke">Detail</button></td>
        </tr>`
    })
    $("#tbodyPoke").html(temp);
}).fail((error) => {
    console.log(error);
})

function detail(stringUrl) {
    $.ajax({
        url: stringUrl
    }).done((res) => {
        console.log(res);
        $(".modal-title").html(res.name)
    })
}