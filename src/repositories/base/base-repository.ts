import mongoose from 'mongoose';
import { ReadInterface, WriteInterface } from '../interfaces';

export default class BaseRepository<ModelInterface>
  implements ReadInterface<ModelInterface>, WriteInterface<ModelInterface>
{
  private _dbModel: mongoose.Model<ModelInterface>;

  constructor(dbModel: mongoose.Model<ModelInterface>) {
    this._dbModel = dbModel;
  }

  async findById(id: string) {
    return await this._dbModel.findById(id);
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
}
