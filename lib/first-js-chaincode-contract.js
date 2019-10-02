/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FirstJsChaincodeContract extends Contract {

    async firstJsChaincodeExists(ctx, firstJsChaincodeId) {
        const buffer = await ctx.stub.getState(firstJsChaincodeId);
        return (!!buffer && buffer.length > 0);
    }

    async createFirstJsChaincode(ctx, firstJsChaincodeId, value) {
        const exists = await this.firstJsChaincodeExists(ctx, firstJsChaincodeId);
        if (exists) {
            throw new Error(`The first js chaincode ${firstJsChaincodeId} already exists`);
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(firstJsChaincodeId, buffer);
    }

    async readFirstJsChaincode(ctx, firstJsChaincodeId) {
        const exists = await this.firstJsChaincodeExists(ctx, firstJsChaincodeId);
        if (!exists) {
            throw new Error(`The first js chaincode ${firstJsChaincodeId} does not exist`);
        }
        const buffer = await ctx.stub.getState(firstJsChaincodeId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updateFirstJsChaincode(ctx, firstJsChaincodeId, newValue) {
        const exists = await this.firstJsChaincodeExists(ctx, firstJsChaincodeId);
        if (!exists) {
            throw new Error(`The first js chaincode ${firstJsChaincodeId} does not exist`);
        }
        const asset = { value: newValue };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(firstJsChaincodeId, buffer);
    }

    async deleteFirstJsChaincode(ctx, firstJsChaincodeId) {
        const exists = await this.firstJsChaincodeExists(ctx, firstJsChaincodeId);
        if (!exists) {
            throw new Error(`The first js chaincode ${firstJsChaincodeId} does not exist`);
        }
        await ctx.stub.deleteState(firstJsChaincodeId);
    }

}

module.exports = FirstJsChaincodeContract;
