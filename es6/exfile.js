export default class Exfile {
	constructor() {
		this.a = 1;
		console.log('constructor');
	}
	fun1() {
		console.log(this.a, 'fun1')
	}
}