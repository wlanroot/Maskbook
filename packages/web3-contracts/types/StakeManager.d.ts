/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from 'bn.js'
import { ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import {
    Callback,
    PayableTransactionObject,
    NonPayableTransactionObject,
    BlockType,
    ContractEventLog,
    BaseContract,
} from './types'

interface EventOptions {
    filter?: object
    fromBlock?: BlockType
    topics?: string[]
}

export type Deposited = ContractEventLog<{
    account: string
    totalDeposit: string
    0: string
    1: string
}>
export type StakeLocked = ContractEventLog<{
    account: string
    totalStaked: string
    withdrawTime: string
    0: string
    1: string
    2: string
}>
export type StakeUnlocked = ContractEventLog<{
    account: string
    withdrawTime: string
    0: string
    1: string
}>
export type StakeWithdrawn = ContractEventLog<{
    account: string
    withdrawAddress: string
    amount: string
    0: string
    1: string
    2: string
}>
export type Withdrawn = ContractEventLog<{
    account: string
    withdrawAddress: string
    amount: string
    0: string
    1: string
    2: string
}>

export interface StakeManager extends BaseContract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions): StakeManager
    clone(): StakeManager
    methods: {
        addStake(_unstakeDelaySec: number | string | BN): PayableTransactionObject<void>

        balanceOf(account: string): NonPayableTransactionObject<string>

        depositTo(account: string): PayableTransactionObject<void>

        deposits(arg0: string): NonPayableTransactionObject<{
            deposit: string
            staked: boolean
            stake: string
            unstakeDelaySec: string
            withdrawTime: string
            0: string
            1: boolean
            2: string
            3: string
            4: string
        }>

        getDepositInfo(account: string): NonPayableTransactionObject<[string, boolean, string, string, string]>

        paymasterStake(): NonPayableTransactionObject<string>

        unlockStake(): NonPayableTransactionObject<void>

        unstakeDelaySec(): NonPayableTransactionObject<string>

        withdrawStake(withdrawAddress: string): NonPayableTransactionObject<void>

        withdrawTo(withdrawAddress: string, withdrawAmount: number | string | BN): NonPayableTransactionObject<void>
    }
    events: {
        Deposited(cb?: Callback<Deposited>): EventEmitter
        Deposited(options?: EventOptions, cb?: Callback<Deposited>): EventEmitter

        StakeLocked(cb?: Callback<StakeLocked>): EventEmitter
        StakeLocked(options?: EventOptions, cb?: Callback<StakeLocked>): EventEmitter

        StakeUnlocked(cb?: Callback<StakeUnlocked>): EventEmitter
        StakeUnlocked(options?: EventOptions, cb?: Callback<StakeUnlocked>): EventEmitter

        StakeWithdrawn(cb?: Callback<StakeWithdrawn>): EventEmitter
        StakeWithdrawn(options?: EventOptions, cb?: Callback<StakeWithdrawn>): EventEmitter

        Withdrawn(cb?: Callback<Withdrawn>): EventEmitter
        Withdrawn(options?: EventOptions, cb?: Callback<Withdrawn>): EventEmitter

        allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter
    }

    once(event: 'Deposited', cb: Callback<Deposited>): void
    once(event: 'Deposited', options: EventOptions, cb: Callback<Deposited>): void

    once(event: 'StakeLocked', cb: Callback<StakeLocked>): void
    once(event: 'StakeLocked', options: EventOptions, cb: Callback<StakeLocked>): void

    once(event: 'StakeUnlocked', cb: Callback<StakeUnlocked>): void
    once(event: 'StakeUnlocked', options: EventOptions, cb: Callback<StakeUnlocked>): void

    once(event: 'StakeWithdrawn', cb: Callback<StakeWithdrawn>): void
    once(event: 'StakeWithdrawn', options: EventOptions, cb: Callback<StakeWithdrawn>): void

    once(event: 'Withdrawn', cb: Callback<Withdrawn>): void
    once(event: 'Withdrawn', options: EventOptions, cb: Callback<Withdrawn>): void
}