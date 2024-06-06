import { IModule } from './module.interface';
import { Module } from './module.model';

const createModuleIntoDB = async (payload: IModule) => {
  const result = await Module?.create(payload);
  return result;
};

export const ModuleServices = {
  createModuleIntoDB,
};
