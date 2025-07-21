export function Rupiah(arr: number) {
	let newArr = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0
	}).format(arr)

	return newArr.replace('Rp', '').trim()
}