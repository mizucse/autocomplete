function links()
{	
		var li="https://www.website.com/folder/";
		//var li="http://localhost/demo/";
		return li;
}
$(document).ready(function () {
    li = links();
    vv = 0;
});


$("#tag")
    .keyup(function () {
        var v = $("#tag").val();
        if (v != '') {
            $('#tag').addClass('ac_loading');
            $("#tag").autocomplete({
                source: function (request, response) {
                    $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        url: li + 'controller_name/autocomplete_view/',
                        data: {id: v},
                        success: function (data) {
                            response(data);
                        }
                    });
                    $("#tag").removeClass('ac_loading');
                }
            });
        }
    });
