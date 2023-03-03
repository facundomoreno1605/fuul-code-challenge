import mongoose, { Model } from 'mongoose';
import { ReadInterface, WriteInterface } from '../interfaces';

export default class BaseRepository<ModelInterface>
  implements ReadInterface<ModelInterface>, WriteInterface<ModelInterface>
{
  private _dbModel: mongoose.Model<ModelInterface>;

  constructor(dbModel: mongoose.Model<ModelInterface>) {
    this._dbModel = dbModel;
  }

  private idParser(id: string) {
    return new mongoose.Types.ObjectId(id);
  }

  private idValidator(id: string) {
    return mongoose.Types.ObjectId.isValid(id);
  }

  async findById(id: string) {
    return await this._dbModel.findById(this.idParser(id));
  }

  async findOne(searchParams: object) {
    return await this._dbModel.findOne({ ...searchParams }).exec();
  }

  async findAll() {
    return await this._dbModel.find({});
  }

  async create(item: ModelInterface) {
    const createdItem = new this._dbModel(item);
    await createdItem.save();

    return createdItem;
  }

  async update(id: string, item: Partial<ModelInterface>) {
    return await this._dbModel.findByIdAndUpdate(this.idParser(id), item);
  }
}
