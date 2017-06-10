import axios from "axios";

const articlesHelper = (function(){
	const getArticles = function(cb){
		axios.get("/api/article")
      .then((res)=>{
        console.log(res);
        // var num = 0;
        // var arrayString = res.data.response.docs.map((data)=>{
        //   console.log(num);
        //   sessionStorage.setItem("resultsTitle" + num, data.headline.main);
        //   sessionStorage.setItem("resultsLink" + num, data.web_url);
        //   num++;
        // });
        // setTimeout(() =>{
        //   window.location = window.location.origin + "/result";
        // }, 1000);
				cb(res);
      })
      .catch((err) =>{
        console.log(err);
				cb(err);
      })
	}
	const postArticle = function(link, title){
		var data = {
			link : link,
			title : title
		}
		axios.post("/api/article", data)
			.then((res) =>{
				console.log(res);
				return res;
			})
			.catch((err) =>{
			console.log(err);
			return err;
		})
	}

	const deleteArticle = function(title){
		var data = {
			title : title
		}
		axios.delete("/api/article", data)
			.then((res) =>{
				console.log(res);
				return res;
			})
			.catch((err) =>{
			console.log(err);
			return err;
		})
	}

	return({
		get : getArticles,
		post : postArticle,
		delete : deleteArticle
	});
})();

export default articlesHelper;