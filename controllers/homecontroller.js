module.exports.home = async function(req,res){

    return res.render('home',{
        title : 'Issue Tracker - Home'
    })
    
}