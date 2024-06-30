import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"

export default class WebGLScene
{
    constructor()
    {
        
    // Canvas
    const canvas = document.querySelector('canvas.webglScene')

    // Scene
    const scene = new THREE.Scene()

    // Model
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    const textureLoader = new THREE.TextureLoader()
    
    const BakedTexture = textureLoader.load(
        "./src/model/BakedTexture2.png",
        function(texture){
            console.log("texture loaded!")
        }
    )
    BakedTexture.flipY = false
    BakedTexture.colorSpace = THREE.SRGBColorSpace
    // console.log(BakedTexture)

    gltfLoader.load(
        "./src/model/Scene_v3.glb",
        function(gltf)
        {
            console.log("model loaded!")
            scene.add(gltf.scene)
            gltf.scene.children[0].material = new THREE.MeshBasicMaterial({map: BakedTexture})
            console.log("model added texture!")
        },
        function ( xhr ) 
        {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' )
        }
    )

    // Sizes
    const sizes ={
        width: window.innerWidth*0.75,
        height: window.innerHeight*0.9
    }

    window.addEventListener('resize', () =>
    {
        // update sizes
        sizes.width = window.innerWidth*0.75,
        sizes.height = window.innerHeight*0.9

        // Update Camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // update renderer
        renderer.setSize(sizes.width,sizes.height)
    })

    //Camera
    const camera = new THREE.PerspectiveCamera(45,sizes.width/sizes.height,1,1000)
    camera.position.z = -4
    camera.position.y = 2
    camera.position.x = 4
    scene.add(camera)

    // controls
    const controls = new OrbitControls(camera, canvas)
    controls.target.y = 1.2
    controls.enableDamping = true

    //Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    })
    renderer.setSize(sizes.width,sizes.height)

    //Tone Mapping
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1

    // animation
    function tick(){
        requestAnimationFrame(tick)

        controls.update()

        renderer.render(scene, camera)
    }
    tick()
    
    }
    

}

