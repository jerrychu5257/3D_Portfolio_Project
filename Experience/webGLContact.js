import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default class WebGLContact
{
    constructor()
    {
        
    // Canvas
    const canvas = document.querySelector('canvas.webglContact')

    // Scene
    const scene = new THREE.Scene()

    // loader
    const gltfLoader = new GLTFLoader()
    const textureLoader = new THREE.TextureLoader()

    /**
     * Textures
     */
    const groundColor = textureLoader.load('./src/model/Ground/Ground_Color.jpg')
    const groundAO = textureLoader.load('./src/model/Ground/Ground_AmbientOcclusion.jpg')
    const groundHeight = textureLoader.load('./src/model/Ground/Ground_Displacement.jpg')
    const groundNormal = textureLoader.load('./src/model/Ground/Ground_Normal.jpg')
    const groundRoughness = textureLoader.load('./src/model/Ground/Ground_Roughness.jpg')

    groundColor.colorSpace = THREE.SRGBColorSpace

    // Texture Size
    groundColor.repeat.set(4,4)
    groundAO.repeat.set(4,4)
    groundHeight.repeat.set(4,4)
    groundNormal.repeat.set(4,4)
    groundRoughness.repeat.set(4,4)

    groundColor.wrapS = THREE.RepeatWrapping
    groundAO.wrapS = THREE.RepeatWrapping
    groundHeight.wrapS = THREE.RepeatWrapping
    groundNormal.wrapS = THREE.RepeatWrapping
    groundRoughness.wrapS = THREE.RepeatWrapping

    groundColor.wrapT = THREE.RepeatWrapping
    groundAO.wrapT = THREE.RepeatWrapping
    groundHeight.wrapT = THREE.RepeatWrapping
    groundNormal.wrapT = THREE.RepeatWrapping
    groundRoughness.wrapT = THREE.RepeatWrapping

    /**
     * Plane
     */
    // Base
    const geometry = new THREE.CircleGeometry(2, 64)
    const material = new THREE.MeshStandardMaterial({
        map: groundColor,
        aoMap: groundAO,
        displacementMap: groundHeight,
        displacementScale: 0.01,
        normalMap: groundNormal,
        roughness: groundRoughness
    })
    const plane = new THREE.Mesh(geometry, material)
    plane.receiveShadow = true
    scene.add(plane)
    // console.log(plane)

    plane.rotation.x = - Math.PI * 0.5
    plane.position.z = -0.35

    /**
    * Model
    */
   // Charactors
   let mixerBlue = null
   let mixerGreen = null
   let mixerRed = null
   let mixerYellow = null
   
   // Blue
   gltfLoader.load(
    "./src/model/Charactors_blue.glb",
    (gltf) => {
        // console.log(gltf)
        gltf.scene.scale.set(0.2, 0.2, 0.2)
        scene.add(gltf.scene)

        // Shadow
        gltf.scene.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
        
        // // Animation
        mixerBlue = new THREE.AnimationMixer(gltf.scene)
        const action = mixerBlue.clipAction(gltf.animations[4])
        action.play()
    }
   )
   
   // Green
   gltfLoader.load(
    './src/model/Charactors_green.glb',
       (gltf) => {
           // console.log(gltf)
           gltf.scene.scale.set(0.2, 0.2, 0.2)
           scene.add(gltf.scene)
   
           // Shadow
           gltf.scene.traverse((child) =>
           {
               if(child instanceof THREE.Mesh)
               {
                   child.castShadow = true
               }
           })
           
           // Animation
           mixerGreen = new THREE.AnimationMixer(gltf.scene)
           const action = mixerGreen.clipAction(gltf.animations[5])
           action.play()
       }
   )
   
   // Red
   gltfLoader.load(
    './src/model/Charactors_red3.glb',
       (gltf) => {
           // console.log(gltf)
           gltf.scene.scale.set(0.2, 0.2, 0.2)
           scene.add(gltf.scene)
           
           // Shadow
           gltf.scene.traverse((child) =>
           {
               if(child instanceof THREE.Mesh)
               {
                   child.castShadow = true
                   
               }
           })
           
           // Animation
           mixerRed = new THREE.AnimationMixer(gltf.scene)
           const action = mixerRed.clipAction(gltf.animations[6])
           action.play()
       }
   )
   
   // Yellow
   gltfLoader.load(
    './src/model/Charactors_yellow.glb',
       (gltf) => {
           // console.log(gltf)
           gltf.scene.scale.set(0.2, 0.2, 0.2)
           scene.add(gltf.scene)
           
           // Shadow
           gltf.scene.traverse((child) =>
           {
               if(child instanceof THREE.Mesh)
               {
                   child.castShadow = true
               }
           })
           
           // Animation
           mixerYellow = new THREE.AnimationMixer(gltf.scene)
           const action = mixerYellow.clipAction(gltf.animations[7])
           action.play()
       }
   )

   /**
     * Environment
     */
    // Lights
    const directionalLight1 = new THREE.DirectionalLight(0xffffff,3)
    scene.add(directionalLight1)
    directionalLight1.position.x = 5
    directionalLight1.position.z = 1
    directionalLight1.position.y = 2
    directionalLight1.castShadow = true

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Sizes
    const sizes ={
        width: 450,
        height: 450
    }

    window.addEventListener('resize', () =>
    {
        // update sizes
        sizes.width = 450,
        sizes.height =450

        // Update Camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // update renderer
        renderer.setSize(sizes.width,sizes.height)
    })

    //Camera
    const camera = new THREE.PerspectiveCamera(45,sizes.width/sizes.height,1,1000)
    camera.position.z = -5
    camera.position.y = 2
    camera.position.x = 4
    scene.add(camera)

    // controls
    const controls = new OrbitControls(camera, canvas)
    controls.target.y = 0
    controls.target.z = -0.4
    controls.enableDamping = true

    //Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    })
    renderer.setSize(sizes.width,sizes.height)

    //Shadow
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    //Tone Mapping
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1

    const clock = new THREE.Clock()
    let previousTime = 0

    // animation
    function tick()
    {
        const elapsedTime = clock.getElapsedTime()
        const deltaTIme = elapsedTime - previousTime
        previousTime = elapsedTime
        
        requestAnimationFrame(tick)

        // update mixer
        if(mixerBlue != null){
            mixerBlue.update(deltaTIme)
        }
        if(mixerGreen != null){
            mixerGreen.update(deltaTIme)
        }
        if(mixerRed != null){
            mixerRed.update(deltaTIme)
        }
        if(mixerYellow != null){
            mixerYellow.update(deltaTIme)
        }
        

        controls.update()

        renderer.render(scene, camera)
    }
    tick()
    
    }
}