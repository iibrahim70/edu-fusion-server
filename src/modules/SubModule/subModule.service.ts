import { SubModule } from './subModule.model';
import { ISubModule } from './submodule.interface';

const createSubModuleIntoDB = async (payload: ISubModule) => {
  const result = await SubModule?.create(payload);
  return result;
};

export const SubModuleServices = {
  createSubModuleIntoDB,
};
