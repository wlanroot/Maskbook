import type { NameServiceResolver } from '@masknet/web3-shared-base'
import { NameServiceID } from '@masknet/shared-base'
import { lookup, reverse } from '../../apis/index.js'

export class BonfidaResolver implements NameServiceResolver {
    public get id() {
        return NameServiceID.Bonfida
    }
    lookup = lookup
    reverse = reverse
}
