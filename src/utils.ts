function clamp(x: number, min: number, max: number): number {
	return Math.max(min, Math.min(x, max))
}

function radToDeg(r: number) {
	return r * 180 / Math.PI
}

function degToRad(d: number) {
	return d * Math.PI / 180
}

export {
	clamp,
	radToDeg,
	degToRad,
}