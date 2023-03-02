import { AssetDB } from '../database/models';
import { AssetInterface } from '../models';
import BaseRepository from './base/base-repository';

export default class AssetRepository extends BaseRepository<AssetInterface> {
  constructor() {
    super(AssetDB);
  }
}
