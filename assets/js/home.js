console.log('ss');
var i=1;
var j=1;
var k=1;
var m=1;
$('#ed-add-btn').click(function(e){

    e.preventDefault();
    
    $("#education").append(`<div id="ed-${i}" class="common">
    <button class="remove-btn" id="ed-remove-btn">X</button>
    <div class="info">
        <input type="text" name="degree" placeholder="degree" required>
        <input type="text" name="institute" placeholder="college or university name" required>
        
        <label for="start-date">Start Date</label>
        <input type="date" name="edstart" id="ed-start-date" value="2019-01-01" required>
        
        <label for="end-date">End Date</label>
        <input type="date" name="edend" id="ed-end-date" value="2019-01-01" required>
        <input type="hidden" name="user" value="<%= user._id %>">
    </div>
</div>`);

    i++;
});
$('#exp-add-btn').click(function(e){
    // var div=$('.info');
    // $('.common-sec').append(div);
    //div = document.createElement('div');
    //$(div).addClass("info").html('');
    e.preventDefault();

    $("#exp").append(`<div id="exp-${j}" class="common">
    <button class="remove-btn" id="exp-remove-btn">X</button>
    <div class="info">
        <input type="text" name="organisation" placeholder="company name" required>
        <textarea name="exdescription" placeholder="describe what you have done in the company?" required rows="10"></textarea>
        <input type="text" name="designation" placeholder="deignation"  required>
        
        <label for="start-date">Start Date</label>
        <input type="date" name="exstart" id="ex-start-date" value="2019-01-01" required>
        
        <label for="end-date">End Date</label>
        <input type="date" name="exend" id="ex-end-date" value="2019-01-01" required>
        <input type="hidden" name="user" value="<%= user._id %>">
    </div>
</div>`);
    
    j++;
});
$('#project-add-btn').click(function(e){
    // var div=$('.info');
    // $('.common-sec').append(div);
    //div = document.createElement('div');
    //$(div).addClass("info").html('');
    e.preventDefault();

    $("#project").append(`<div id="project-${k}" class="common">
    <button class="remove-btn" id="project-remove-btn">X</button>
    <div class="info" >
            <input type="text" name="title" placeholder="project's name" required>
            
            <textarea name="projectdescription" placeholder="describe your project" required rows="10"></textarea>
            <input type="url" name="link" placeholder="Ex: http://myprojectlink.com">
            <input type="hidden" name="user" value="<%= user._id %>">
    </div>
</div>`);
    
    k++;

});
$('#social-link-add-btn').click(function(e){
    e.preventDefault();
    $('#social-links').append(`<div id="social-links-${m}" class="common">
    <button class="remove-btn" id="social-link-remove-btn">X</button>
    <div class="info" >
            
            <input type="text" name="linktitle" placeholder="title" required>
            <input type="url" name="userlink" placeholder="Ex: github.com or linkedin.com">
            <input type="hidden" name="user" value="<%= user._id %>">
    </div>
</div>`);
m++;
console.log('social link added');

})

// $('.remove-btn').click(function(){

//     // var child = document.getElementById(k);
//     // var parent = document.getElementById(project);
//     // parent.removeChild(child);

//     // $(`#project-${z}`).remove();


    

// });

$(document).on('click','.remove-btn',function(e){
    //alert('hello');
    e.preventDefault();
    $(this).parent('div').remove();
});