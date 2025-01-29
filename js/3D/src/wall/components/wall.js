export default AFRAME.registerComponent('wall', {
    schema: {
        height: {type: "number", default: 2.5},
        width: {type: "number", default: 9},
        depth: {type: "number", default: 2},
        color: {type: "color", default: "#FF0000"}
    },
    init: function() {
        let data = this.data
        let el = this.el 
        
        this.geometry = new THREE.BoxGeometry(data.width, data.height, data.depth)

        this.material = new THREE.MeshStandardMaterial({color: data.color})

        this.mesh = new THREE.Mesh(this.geometry, this.material)

        el.setObject3D('mesh', this.mesh)
    },
    multiple: true
})