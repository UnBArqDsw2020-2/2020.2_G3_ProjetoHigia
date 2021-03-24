export default class Base {
	constructor(collectionType) {
		this.collectionType = collectionType;
	}
	async create(data) {
		const res = await this.collectionType.create(data);
		return res;
	}
	async updateOne(id, update) {
		const res = await this.collectionType.updateOne(id, update);
		return res;
	}
	async findOne(data) {
		const res = await this.collectionType.findOne(data);
		return res;
	}
	async findById(id) {
		const res = await this.collectionType.findById(id);
		return res;
	}
}
