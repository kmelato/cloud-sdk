/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { SourceFileStructure, StructureKind } from 'ts-morph';
import { VdmEntity, VdmServiceMetadata } from '../vdm-types';
import { entityClass } from './class';
import { importDeclarations, otherEntityImports } from './imports';
import {
  entityTypeForceMandatoryInterface,
  entityTypeInterface
} from './interface';
import { entityNamespace } from './namespace';

export function entitySourceFile(
  entity: VdmEntity,
  service: VdmServiceMetadata
): SourceFileStructure {
  return {
    kind: StructureKind.SourceFile,
    statements: [
      ...importDeclarations(entity, service.oDataVersion),
      entityClass(entity, service),
      ...otherEntityImports(entity, service),
      entityTypeInterface(entity, service),
      entityTypeForceMandatoryInterface(entity, service),
      entityNamespace(entity, service)
    ]
  };
}
