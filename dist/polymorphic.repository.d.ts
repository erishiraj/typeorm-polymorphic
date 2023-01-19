import 'reflect-metadata';
import { Repository, DeepPartial, SaveOptions, FindManyOptions, FindOneOptions, ObjectID } from 'typeorm';
import { PolymorphicChildType, PolymorphicParentType } from './polymorphic.interface';
export declare abstract class AbstractPolymorphicRepository<E> extends Repository<E> {
    private getPolymorphicMetadata;
    protected isPolymorph(): boolean;
    protected isChildren(options: PolymorphicChildType | PolymorphicParentType): options is PolymorphicChildType;
    protected isParent(options: PolymorphicChildType | PolymorphicParentType): options is PolymorphicParentType;
    hydrateMany(entities: E[]): Promise<E[]>;
    hydrateOne(entity: E): Promise<E>;
    private hydratePolymorphs;
    private hydrateEntities;
    private findPolymorphs;
    private findRepository;
    private resolveRepositoryToken;
    save<T extends DeepPartial<E>>(entities: T[], options: SaveOptions & {
        reload: false;
    }): Promise<T[]>;
    save<T extends DeepPartial<E>>(entities: T[], options?: SaveOptions): Promise<(T & E)[]>;
    save<T extends DeepPartial<E>>(entity: T, options?: SaveOptions & {
        reload: false;
    }): Promise<T>;
    private deletePolymorphs;
    find(options?: FindManyOptions<E>): Promise<E[]>;
    find(conditions?: FindManyOptions<E>): Promise<E[]>;
    findOne(id?: string | number | Date | ObjectID, options?: FindOneOptions<E>): Promise<E | undefined>;
    findOne(options?: FindOneOptions<E>): Promise<E | undefined>;
    create(): E;
    create(entityLikeArray: DeepPartial<E>[]): E[];
    create(entityLike: DeepPartial<E>): E;
}
