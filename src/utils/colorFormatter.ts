export const hexToHSL = (hex: string) => {
	let r = Number.parseInt(hex.slice(1, 3), 16)
	let g = Number.parseInt(hex.slice(3, 5), 16)
	let b = Number.parseInt(hex.slice(5, 7), 16)
	r /= 255
	g /= 255
	b /= 255
	const max = Math.max(r, g, b)
	const min = Math.min(r, g, b)
	let h = 0
	let s: number
	const l: number = (max + min) / 2
	if (max === min) {
		h = s = 0
	} else {
		const d = max - min
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
		switch (max) {
			case r:
				h = ((g - b) / d + (g < b ? 6 : 0)) / 6
				break
			case g:
				h = ((b - r) / d + 2) / 6
				break
			case b:
				h = ((r - g) / d + 4) / 6
				break
		}
	}
	const newH: number = h
	return [newH, s, l]
}

export const hslToHex = (h: number, s: number, l: number) => {
	let r = 0
	let g = 0
	let b = 0
	if (s === 0) {
		r = g = b = l
	} else {
		const hue2rgb = (p: number, q: number, t: number) => {
			let newT = t
			if (newT < 0) newT += 1
			if (newT > 1) newT -= 1
			if (newT < 1 / 6) return p + (q - p) * 6 * newT
			if (newT < 1 / 2) return q
			if (newT < 2 / 3) return p + (q - p) * (2 / 3 - newT) * 6
			return p
		}
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s
		const p = 2 * l - q
		r = hue2rgb(p, q, h + 1 / 3)
		g = hue2rgb(p, q, h)
		b = hue2rgb(p, q, h - 1 / 3)
	}
	const toHex = (x: number) => {
		const hex = Math.round(x * 255).toString(16)
		return hex.length === 1 ? `0${hex}` : hex
	}
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export const createColorsFromGradient = (
	gradient: string,
	numStops: number,
) => {
	// Extract the colors from the gradient
	const colors: RegExpMatchArray = gradient.match(
		/#[0-9a-fA-F]{6}/g,
	) as RegExpMatchArray

	// Convert the colors to HSL
	const hslColors = colors.map((color) => hexToHSL(color))

	// Generate the gradient stops
	const stops = Array.from({ length: numStops }, (_, i) => {
		// Determine the color for this stop
		const t = i / (numStops - 1)
		if (!hslColors[0]) return
		const interpolatedColor = hslColors[0].map((start, j) => {
			const newStart = start ?? 0
			const colors1 = hslColors[1]
			const end = colors1?.[j] ?? 0
			return newStart + t * (end - newStart)
		})

		// Convert the color back to hex
		const color = hslToHex(...(interpolatedColor as [number, number, number]))
		return color
	})

	return stops
}

export const reorderArrayFromArray = <T>(array: T[], order: number[]) => {
	const newArray = new Array(array.length)
	order.forEach((index, i) => {
		newArray[i] = array[index]
	})
	return newArray
}
