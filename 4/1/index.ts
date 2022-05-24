import {createProgram} from '../../src/webgl2dPainter/createProgram'
import {mat4, vec3} from 'gl-matrix'

document.addEventListener('DOMContentLoaded', main)

async function main() {
	const canvas = document.createElement('canvas')
	document.body.append(canvas)

	const gl = canvas.getContext('webgl2')
	const program = await createProgram(gl, 'vertex.glsl', 'fragment.glsl')

	const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
	const colorAttributeLocation = gl.getAttribLocation(program, 'a_color')

	const matrixLocation = gl.getUniformLocation(program, 'u_matrix')

	const positionBuffer = gl.createBuffer()

	const vao = gl.createVertexArray()
	gl.bindVertexArray(vao)

	gl.enableVertexAttribArray(positionAttributeLocation)
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
	setGeometry(gl)
	gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0)

	const colorBuffer = gl.createBuffer()
	gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
	setColors(gl)
	gl.enableVertexAttribArray(colorAttributeLocation)
	gl.vertexAttribPointer(colorAttributeLocation, 3, gl.UNSIGNED_BYTE, true, 0, 0)

	function radToDeg(r: number) {
		return r * 180 / Math.PI
	}

	function degToRad(d: number) {
		return d * Math.PI / 180
	}

	drawScene()

	function drawScene() {
		gl.canvas.width = gl.canvas.clientWidth
		gl.canvas.height = gl.canvas.clientHeight
		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

		gl.clearColor(0, 0, 0, 0)
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

		gl.enable(gl.DEPTH_TEST)
		gl.enable(gl.CULL_FACE)

		gl.useProgram(program)
		gl.bindVertexArray(vao)

		const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight
		const projectionMatrix = mat4.perspective(mat4.create(), degToRad(90), aspect, 1, 2000)

		const viewMatrix = mat4.lookAt(
			mat4.create(),
			vec3.fromValues(0, 0, 200),
			vec3.fromValues(0, 0, 0),
			vec3.fromValues(0, 1, 0),
		)
		const viewProjectionMatrix = mat4.multiply(mat4.create(), projectionMatrix, viewMatrix)

		gl.uniformMatrix4fv(matrixLocation, false, viewProjectionMatrix)

		gl.drawArrays(gl.TRIANGLES, 0, 3)
	}
}

function setGeometry(gl: WebGL2RenderingContext) {
	const positions = new Float32Array([
		100, 0, 0,
		0, 100, 0,
		-100, 0, 0,
	])

	gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)
}

function setColors(gl: WebGL2RenderingContext) {
	gl.bufferData(
		gl.ARRAY_BUFFER,
		new Uint8Array([
			40, 20, 80,
			40, 20, 80,
			40, 20, 80,
		]),
		gl.STATIC_DRAW)
}

export {}