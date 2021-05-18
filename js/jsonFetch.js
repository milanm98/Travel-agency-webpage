fetch("public/imageSlider.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                alert('error: ' + err);
            });

        function appendData(data) {

             $("#summer-img").attr("src", data[0].src);
             $("#winter-img").attr("src", data[1].src);
             $("#autumn-img").attr("src", data[2].src);

             $("#summer-desc").text(data[0].description);
             $("#winter-desc").text(data[1].description);
             $("#autumn-desc").text(data[2].description);
             
            }