jQuery(function($){
    $("#school-logo").change(function(){
        let $preview = document.getElementById("logo-preview");
        $("#"+$preview.id).empty();
        let $image = document.getElementById("school-logo");
        let $imageFile = $image.files[0];       

        if($imageFile){
            const imageReader = new FileReader();            
            imageReader.readAsDataURL($imageFile);
            imageReader.addEventListener("load", function(){
            $preview.innerHTML = '<img class="logo" src="' + this.result + '"/>';
        });
        }
    });
});