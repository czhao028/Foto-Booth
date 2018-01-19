accessToken = null;
var JSZip = require("jszip");
var Sync = require("sync");

if (typeof window === 'undefined') {
    global.window = {}
}

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1542369645823122',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
    });
  
FB.AppEvents.logPageView();   
checkLoginState();
  
};


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=1542369645823122';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
    FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            document.getElementById("beginPics").style.display = "block";
            document.getElementById("fb-login-button").style.display = "none";
            accessToken = response.authResponse.accessToken;
            console.log('accessToken');
            FB.api('me', {fields:'first_name,last_name'}, function(response){
                var full_name = response.first_name + " " + response.last_name;
                $.get("getName", {name:full_name}).done(function(data){
                    if(data == "N/A"){
                        $.get("storeName", {name:full_name}).done(function(data){console.log("Name Added");})
                    }
                    else{
                        document.getElementById('welcomeBack').innerHTML = 'Welcome Back ' + full_name + ' !';
                    }
                });
            });
          } 
    });
    }


function getAlbums(){
    FB.api('me/albums', {fields:'cover_photo,name'}, function(response){
        if (!response || response.error) {
            alert('Error occured');
        } 
        else {
            console.log("All Albums" + response);
            var all_albums = [];
            var data = response.data;
            var coverphotoid = 0;
            
            try{
                coverphotoid = album.cover_photo.id;
            }
            catch(e){
                coverphotoid = '2011550615801433';
            }
            for(var al_pointer in data){
                album = data[al_pointer];
                all_albums = storePhotos(album.name, album.id, coverphotoid, all_albums);
                console.log("Store Photos Response" + all_albums);
            }
            
        }        
    });
}

function storePhotos(album_name, album_id, coverphotoid, all_albums){
    Sync(function(){
        FB.api(album_id + '/photos', function(response){
            var cover_photo_link = "facebook.com";
            var photo_links = [];
            cover_photo_link = returnPhotoLINK(coverphotoid);
            photo_links = returnPhotoLINKS(response.data);
            
            all_albums.push({
            'name': album_name,
            'cover_photo': container_object[1],
            'photos': container_object[0]
            });
        
        });
    })
    
}

function returnPhotoLINKS(json_array){
    var exports = [];
    Sync(function(){
        for(var node in json_array){
            exports.push(returnPhotoLINK(node.id));
        }
    });
    return exports;
}

function returnPhotoLINK(photo_id){
    link = "facebook.com";
    FB.api(photo_id, {fields:'images'}, function(response){
        console.log(response.images);
        return response.images[0].source;
    });

}

function downloadPhotos(urls){ 
    //MOVE TO SERVER AS GET REQUEST; make page dynamic
    var zip = new JSZip();
    var count = 0;
    var zipFilename = String(Date.now());
    
    urls.forEach(function(url){
      var filename = String(count);
      JSZipUtils.getBinaryContent(url, function (err, data) {
         if(err) {
            throw err;
         }
         zip.file(filename, data, {binary:true});
         count++;
         if (count == urls.length) {
           var zipFile = zip.generate({type: "blob"});
           saveAs(zipFile, zipFilename);
         }
      });
    });
}
