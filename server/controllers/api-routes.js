var path = require("path");
var Article = require("../models/article");

module.exports = function (app) {
  app.post("/api/article", function (req, res) {
    var title = req.body.title;
		var link = req.body.link;
		console.log(title, link);
		var newArticle = new Article({
			"title" : title,
			"link" : link
		})

		newArticle.save(function(err){
			if(err){
				console.log("--- Posts Failure", err);
				res.json({
					"message" : "Failure to post",
					"err" : err
				});
			}
			else{
				console.log("+++ Posts Success");
					res.json({
						"message" : "Post Successful"
					});
			}
		})
  });

	app.get("/api/article", function(req, res){
		Article.find({})
			.then((response)=>{
				console.log("@@@Request for all articles", response);
				res.json(response);
		})
			.catch((err)=>{
				console.log(err);
				res.json({
					"message" : "---Something went wrong with the db",
					"err" : err
				})
			})
	})

	app.delete("/api/article", function(req, res){
		console.log("******************************** Deleting" + req.body.title);
		console.log("************" + Object.keys(req.body));

		var title = req.body.title;
		
		Article.find({
			title : title
		}).remove().exec()
			.then(()=>{
				res.json({
					title : title,
					message : "Was deleted"
				});
			})
			.catch((err)=>{
				res.json({
					title : title,
					message : "Was not deleted",
					err : err
				});
			});
	})
};