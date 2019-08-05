import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";

class LanguageModel extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Alpha true hides canvas background
    var renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild(renderer.domElement);

    // Create the shape
    var geometry = new THREE.CubeGeometry(2, 2, 2);
    var cubeMaterials = [
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          process.env.PUBLIC_URL + "/side1.png"
        ),
        alphaTest: 0.5,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          process.env.PUBLIC_URL + "/side2.png"
        ),
        alphaTest: 0.5,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          process.env.PUBLIC_URL + "/side3.png"
        ),
        alphaTest: 0.5,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          process.env.PUBLIC_URL + "/side4.png"
        ),
        alphaTest: 0.5,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          process.env.PUBLIC_URL + "/side5.png"
        ),
        alphaTest: 0.5,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          process.env.PUBLIC_URL + "/side6.png"
        ),
        alphaTest: 0.5,
        side: THREE.DoubleSide
      })
    ];

    var material = new THREE.MeshFaceMaterial(cubeMaterials);
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.x = -4;
    camera.position.z = 5;

    var animate = function() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }
  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}

export default LanguageModel;
