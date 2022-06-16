$(document).ready(function () {
    //Toggle fullscreen
    $(".button-aufgabe-fullscreen").on('click', function (e) {
        e.preventDefault();
        
        var $this = $(this);
    
        if ($this.children('i').hasClass('fa-expand'))
        {
            $this.children('i').removeClass('fa-expand');
            $this.children('i').addClass('fa-compress');
        }
        else if ($this.children('i').hasClass('fa-compress'))
        {
            $this.children('i').removeClass('fa-compress');
            $this.children('i').addClass('fa-expand');
        }
        $(this).closest('.aufgabe').toggleClass('aufgabe-fullscreen');
    });
    $(".button-projekt-fullscreen").on('click', function (e) {
        e.preventDefault();
        
        var $this = $(this);
    
        if ($this.children('i').hasClass('fa-expand'))
        {
            $this.children('i').removeClass('fa-expand');
            $this.children('i').addClass('fa-compress');
        }
        else if ($this.children('i').hasClass('fa-compress'))
        {
            $this.children('i').removeClass('fa-compress');
            $this.children('i').addClass('fa-expand');
        }
        $(this).closest('.projekt').toggleClass('projekt-fullscreen');
    });
});
