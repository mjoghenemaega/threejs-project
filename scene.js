const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z=5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial( { color: 0x0fff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 0, 10, 10 );
scene.add( spotLight );
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 0, 10, 0 );
scene.add( spotLight );
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 10, 0, 10 );
scene.add( spotLight );



let animate= function(){
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();