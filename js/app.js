$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
});


function toggleModal(){
    var instance = M.Modal.getInstance($('.modal'));
    instance.open();
}
