/*
* Camera service
*/
phonecatControllers.service('camera', [function() {
    function getPhoto(success, fail) {
        navigator.camera.getPicture(success, fail, { quality: 50,
            destinationType: destinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM });
    }
}]);