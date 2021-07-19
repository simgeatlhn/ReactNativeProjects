import axios from "axios";

export default axios.create({

    //yelp api => bussines details
    baseURL: "https://api.yelp.com/v3/businesses",
    //Bearer APIKEY
    //Authorization büyük harfle başlamalı , Bearer ve apikey arasında bir boşluk olmalı UNUTMA
    headers: {
        Authorization: "Bearer 5YVXDjsa4bIFET4yUfOv5d9pkj1TsGvp9KQ-fACZCdioVZg9oBrTPNlP-ZL3wpW6UuTUZIvFokkAVywVNyz2vHe486o5rvsZGD8mgAIqRLJ7gasizlhXcefMCRn0YHYx"
    }

});