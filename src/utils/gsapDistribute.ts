interface Distances {
	[key: number]: number
	b: number
	max: number
	min: number
	v: number
}

interface Vars {
	ease?: string
	from?: "x" | "y" | "center" | "edges" | "end" | "start" | number
	base?: number
	axis?: string
	amount?: number
	each?: number
	distances?: Distances
}

export const distributeByPosition = (vars: Vars, gsap: GSAP) => {
	const ease = vars.ease && gsap.parseEase(vars.ease)
	const from = vars.from ?? 0
	const base = vars.base ?? 0
	const axis = vars.axis
	const ratio =
		{ center: 0.5, end: 1, edges: 0.5, x: 0, y: 0, start: 0 }[from] ?? 0
	let distances = vars.distances

	return (i: number, __: unknown, a: HTMLElement[]) => {
		let l: number = a.length
		let originX: number
		let originY: number
		let x: number
		let y: number
		let d: DOMRect
		let dNum: number
		let j: number
		let minX: number
		let maxX: number
		let minY: number
		let maxY: number
		let positions: { x: number; y: number }[]
		if (!distances) {
			distances = { b: 0, max: 0, min: 0, v: 0 }
			minX = minY = Number.POSITIVE_INFINITY
			maxX = maxY = -minX
			positions = []

			for (j = 0; j < l; j++) {
				const el = a[j]

				if (!el) continue

				d = el?.getBoundingClientRect()
				x = (d.left + d.right) / 2 //based on the center of each element
				y = (d.top + d.bottom) / 2
				if (x < minX) {
					minX = x
				}
				if (x > maxX) {
					maxX = x
				}
				if (y < minY) {
					minY = y
				}
				if (y > maxY) {
					maxY = y
				}
				positions[j] = { x: x, y: y }
			}
			const isNum = typeof from === "string" && !Number.isNaN(Number(from))
			if (!isNum) {
				originX = minX + (maxX - minX) * ratio
				originY = minY + (maxY - minY) * ratio
			} else {
				const key = Number(from)
				originX = positions[key]?.x ?? 0
				originY = positions[key]?.y ?? 0
			}

			maxX = 0
			minX = Number.POSITIVE_INFINITY
			for (j = 0; j < l; j++) {
				const pos = positions[j]

				if (!pos) continue

				x = pos.x - originX
				y = originY - pos.y
				distances[j] = dNum = !axis
					? Math.sqrt(x * x + y * y)
					: Math.abs(axis === "y" ? y : x)
				if (dNum > maxX) {
					maxX = dNum
				}
				if (dNum < minX) {
					minX = dNum
				}
			}
			distances.max = maxX - minX
			distances.min = minX
			distances.v = l =
				(vars.amount || vars.each || 0 * l || 0) * (from === "edges" ? -1 : 1)
			distances.b = l < 0 ? base - l : base
		}

		l = (distances[i] ?? 0 - distances.min) / distances.max
		return distances.b + (ease ? ease(l) : l) * distances.v
	}
}
