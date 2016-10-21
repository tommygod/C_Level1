/**
 * Created by Administrator on 2016/10/21 0021.
 */
(function () {


    window.onload=function () {
        $.ajax({
            url: "article.txt",
            success:function (data) {
                console.log(data);
            }


        })
    }

    
})();