/**
 * Created by kaitlinmuth on 5/7/15.
 */
var experienceHTML;
var educationHTML;
var resumeData;

function drawIcons(){
    $.get('/assets/data/data.json', function(data){
        for (var i=0; i<data.experience.length; i++){
            if (i%2 == 0) {$(".iconPicker").append("<div class='row'></div>");}
            $(".iconPicker").last().append("<div class='jobIcon col-md-6'><img src='/images/"+data.experience[i].image+"'</div>");
            $(".iconPicker").children('.jobIcon').last().data("index", [i]);
        }
        for (var j=0; j<data.education.length; j++){
            if (j%2 == 0) {$(".schoolIconPicker").append("<div class='row'></div>");}
            $(".schoolIconPicker").last().append("<div class='schoolIcon col-md-6'><img src='/images/"+data.education[j].image+"'</div>");
            $(".schoolIconPicker").children('.schoolIcon').last().data("index", [j]);
        }
    });
}

function writeJobData(data){
    $(".jobShowcase").hide();
    $(".jobShowcase").html(experienceHTML);
    $(".job-icon").attr("src", "/images/"+data.image);
    $(".job-title").text(data.title);
    $(".job-company-dates").text(data.company+", "+data.dates);
    $(".job-description").html(data.description);
    $(".jobShowcase").slideDown();
}

function writeSchoolData(data){
    $(".schoolShowcase").hide();
    $(".schoolShowcase").html(educationHTML);
    $(".school-icon").attr("src", "/images/"+data.image);
    $(".school-name").text(data.name);
    $(".school-degree-dates").text(data.degree+", "+data.date);
    if (data.honors) {$(".school-honors").text(data.honors);}
    if (data.description) {$(".school-description").html(data.description);}
    $(".schoolShowcase").slideDown();
}

$(document).ready(function(){
    $.get('/views/template.html', function(data){
        experienceHTML = data;
        });
    $.get('/views/template2.html', function(data){
        educationHTML = data;
    });
    $.get('/assets/data/data.json', function(data) {
        resumeData = data;
        writeJobData(resumeData.experience[0]);
        writeSchoolData(resumeData.education[0]);
        drawIcons();
    });

    $(".iconPicker").on('click', '.jobIcon', function(){
        var index = $(this).data("index");
        writeJobData(resumeData.experience[index]);
    });

    $(".schoolIconPicker").on('click', ".schoolIcon", function(){
        var index = $(this).data("index");
        writeSchoolData(resumeData.education[index]);
    });
});