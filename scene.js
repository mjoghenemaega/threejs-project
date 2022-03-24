
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 85, window.innerWidth / window.innerHeight, 0.01, 1000 );


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
//renderer.setClearColor(0xfffffff)
document.body.appendChild( renderer.domElement );

//var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );


 var spotLight = new THREE.SpotLight( 0xffffff );
 spotLight.position.set( 0, 0, 1000 );
 scene.add( spotLight );
 var spotLight = new THREE.SpotLight( 0xd4af37);
 spotLight.position.set( 0, 710, 0 );
 scene.add( spotLight );
 var spotLight = new THREE.SpotLight( 0xd4af37 );
 spotLight.position.set( 100, 0, 0 );
 scene.add( spotLight );

//controls = new OrbitControls( camera, renderer.domElement );

// // Instantiate a loader
// var loader = new THREE.GLTFLoader();
// loader.load(
//     'model/scene.gltf',
//      function(gltf){
//      scene.add(gltf.scene);
//  });

var loader = new THREE.GLTFLoader();

// Load a glTF resource
loader.load(
	// resource URL
	'model/scene.gltf',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);
scene.background= new THREE.Color(0x74ccf4);
var light = new THREE.HemisphereLight(0x9da29b,5);
scene.add(light);
camera.position.set(-100, 500, 900);

var controls = new THREE.OrbitControls( camera, renderer.domElement );
let animate= function(){
    //scene.rotation.y += 0.01;
    //scene.rotation.z += 0.01;
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();