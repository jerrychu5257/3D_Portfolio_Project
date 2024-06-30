import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DirectionalLight, SRGBColorSpace } from "three"
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'


export default class WebGLPlay
{
    constructor()
    {
        
    // Canvas
    const canvas = document.querySelector('canvas.webglPlay')

    // Scene
    const scene = new THREE.Scene()

    // Model
    const gltfLoader = new GLTFLoader()
    const rgbeLoader = new RGBELoader()
    const textureLoader = new THREE.TextureLoader()
    
    const BakedTexture = textureLoader.load("./src/model/Baked_floor.png")
    BakedTexture.flipY = false
    BakedTexture.colorSpace = SRGBColorSpace

    rgbeLoader.load('./src/image/hdri/playground_studio_lighting2.hdr', (map)=>{
        map.mapping = THREE.EquirectangularReflectionMapping

        // scene.background = map
        scene.environment = map
    })

    gltfLoader.load(
        "./src/model/Playground.glb",
        function(gltf)
        {
            scene.add(gltf.scene)
            gltf.scene.children[4].material = new THREE.MeshBasicMaterial({map: BakedTexture})
            // console.log(gltf.scene)
            // gltf.scene.children[8].children[0].material = new THREE.MeshStandardMaterial({

            // })
        }
    )

    // lights
    // const directionalLight = new THREE.DirectionalLight('white', 10)
    // directionalLight.position.set(3,2,10)
    // scene.add(directionalLight)

    // // light shadow
    // directionalLight.castShadow = true

    // // helper
    // const directionalLightHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
    // scene.add(directionalLightHelper)

    // // target
    // directionalLight.target.position.set(5,1,0)
    // directionalLight.target.updateWorldMatrix()

    // Sizes
    const sizes ={
        width: window.innerWidth,
        height: 540
    }

    window.addEventListener('resize', () =>
    {
        // update sizes
        sizes.width = window.innerWidth,
        sizes.height = 540

        // Update Camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // update renderer
        renderer.setSize(sizes.width,sizes.height)
    })

    //Camera
    const camera = new THREE.PerspectiveCamera(37,sizes.width/sizes.height,1,1000)
    camera.position.z = -0.5
    camera.position.y = 1.3
    camera.position.x = 12
    scene.add(camera)

    // controls
    const controls = new OrbitControls(camera, canvas)
    controls.target.x = 5
    controls.target.y = 0.8
    controls.target.z = 0
    controls.enableDamping = true

    //Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    })
    renderer.setSize(sizes.width,sizes.height)

    //Shadows
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

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

