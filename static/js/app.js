jQuery(function($){
    // new logo
    $("#new-logo").change(function(){
        let $preview = document.getElementById("new-logo-preview");
        $("#"+$preview.id).empty();
        let $image = document.getElementById("new-logo");
        let $imageFile = $image.files[0];       

        if($imageFile){
            const imageReader = new FileReader();            
            imageReader.readAsDataURL($imageFile);
            imageReader.addEventListener("load", function(){
            $preview.innerHTML = '<img class="logo" src="' + this.result + '"/>';
        });
        }
    });

    // Update logo
    $("#update-logo").change(function(){
        let $preview = document.getElementById("update-logo-preview");
        $("#"+$preview.id).empty();
        let $image = document.getElementById("update-logo");
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