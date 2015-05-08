/**
 * Created by kaitlinmuth on 5/7/15.
 */
var experienceHTML;
var experienceData;

function drawIcons (){
    console.log("drawing icons!");
    $.get('/assets/data/data.json', function(data){
        for (var i=0; i<data.experience.length; i++){
            if (i%2 == 0) {$(".iconPicker").append("<div class='row'></div>");}
            $(".iconPicker").last().append("<div class='jobIcon col-md-6'><img src='/images/"+data.experience[i].image+"'</div>");
            $(".iconPicker").children('.jobIcon').last().data("index", [i]);
        }
    });

}

function writeJobData(data){
    console.log("writing job data");
    $(".jobShowcase").hide();
    $(".jobShowcase").html(experienceHTML);
    $(".job-icon").attr("src", "/images/"+data.image);
    $(".job-title").text(data.title);
    $(".job-company-dates").text(data.company+", "+data.dates);
    $(".job-description").html(data.description);
    $(".jobShowcase").slideDown();
}

$(document).ready(function(){
    $.get('/views/template.html', function(data){
        experienceHTML = data;
        });
    $.get('/assets/data/data.json', function(data) {
        experienceData = data;
        writeJobData(experienceData.experience[0]);
    });

    drawIcons();

    $(".iconPicker").on('click', '.jobIcon', function(){
        var index = $(this).data("index");
        writeJobData(experienceData.experience[index]);
    });

});

/* console.log(cityData, cityHtml);

    $.get('data.json', function(data){
        console.log("second request");
        if (cityData === null) {
            cityData = data;
            for (i=0; i<cityData.locations.length; i++) {
                $("#more-stuff").append(cityHtml);
                $("#more-stuff").children().last().prepend("<img src='"+cityData.locations[i].image +"'>");
                $("#more-stuff").find(".location-name").last().append("<strong>Name: </strong>" + cityData.locations[i].name);
                $("#more-stuff").find(".location-population").last().append("<strong>Population: </strong>" + cityData.locations[i].population);
                $("#more-stuff").find(".location-area").last().append("<strong>Area: </strong>" + cityData.locations[i].area);
                $("#more-stuff").find(".location-monsters").last().append("<strong>Monsters: </strong>" + cityData.locations[i].monsters);
            }
            console.log("data is", cityData);
        } else {
            console.log("Data is already set");
        }
    });
});

$("#more-stuff").on('click', '.btn', function(){
    $(this).parent().parent().fadeOut("slow", function(){
        $(this).remove();
    });
});
    */