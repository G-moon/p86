var canvas=new fabric.Canvas('can');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var playerobject="";
var block_image_object="";
function player_update(){
fabric.Image.fromURL("Avengers_Endgame.png",function(Img){
 playerobject=Img;
 playerobject.scaleToWidth (150);
 playerobject.scaleToHeight (150);
 playerobject.set({
top:player_y,
left:player_x
 });
canvas.add(playerobject);
})
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
     block_image_object=Img;
     block_image_object.scaleToWidth (block_image_width);
     block_image_object.scaleToHeight (block_image_height);
     block_image_object.set({
    top:player_y,
    left:player_x
     });
    canvas.add(block_image_object);
    })
    }