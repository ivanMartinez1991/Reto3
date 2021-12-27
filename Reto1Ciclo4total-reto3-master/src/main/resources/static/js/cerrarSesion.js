$(document).ready(function () {
        $(".log-out-icon").click(()=>{
            localStorage.removeItem("user")
            location.reload(true)



        })
});