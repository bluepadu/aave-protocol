// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class Borrow extends EthereumEvent {
  get params(): Borrow__Params {
    return new Borrow__Params(this);
  }
}

export class Borrow__Params {
  _event: Borrow;

  constructor(event: Borrow) {
    this._event = event;
  }

  get _reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _borrowRateMode(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _borrowRate(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _originationFee(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _borrowBalanceIncrease(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get _referral(): i32 {
    return this._event.parameters[7].value.toI32();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class Deposit extends EthereumEvent {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get _reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _referral(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class FlashLoan extends EthereumEvent {
  get params(): FlashLoan__Params {
    return new FlashLoan__Params(this);
  }
}

export class FlashLoan__Params {
  _event: FlashLoan;

  constructor(event: FlashLoan) {
    this._event = event;
  }

  get _target(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _reserve(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _totalFee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _protocolFee(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class LiquidationCall extends EthereumEvent {
  get params(): LiquidationCall__Params {
    return new LiquidationCall__Params(this);
  }
}

export class LiquidationCall__Params {
  _event: LiquidationCall;

  constructor(event: LiquidationCall) {
    this._event = event;
  }

  get _collateral(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _reserve(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _user(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _purchaseAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _liquidatedCollateralAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _accruedBorrowInterest(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _liquidator(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get _receiveAToken(): boolean {
    return this._event.parameters[7].value.toBoolean();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class OriginationFeeLiquidated extends EthereumEvent {
  get params(): OriginationFeeLiquidated__Params {
    return new OriginationFeeLiquidated__Params(this);
  }
}

export class OriginationFeeLiquidated__Params {
  _event: OriginationFeeLiquidated;

  constructor(event: OriginationFeeLiquidated) {
    this._event = event;
  }

  get _collateral(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _reserve(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _user(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _feeLiquidated(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _liquidatedCollateralForFee(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class RebalanceStableBorrowRate extends EthereumEvent {
  get params(): RebalanceStableBorrowRate__Params {
    return new RebalanceStableBorrowRate__Params(this);
  }
}

export class RebalanceStableBorrowRate__Params {
  _event: RebalanceStableBorrowRate;

  constructor(event: RebalanceStableBorrowRate) {
    this._event = event;
  }

  get _reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _newStableRate(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _borrowBalanceIncrease(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class RedeemUnderlying extends EthereumEvent {
  get params(): RedeemUnderlying__Params {
    return new RedeemUnderlying__Params(this);
  }
}

export class RedeemUnderlying__Params {
  _event: RedeemUnderlying;

  constructor(event: RedeemUnderlying) {
    this._event = event;
  }

  get _reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Repay extends EthereumEvent {
  get params(): Repay__Params {
    return new Repay__Params(this);
  }
}

export class Repay__Params {
  _event: Repay;

  constructor(event: Repay) {
    this._event = event;
  }

  get _reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _repayer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _amountMinusFees(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _fees(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _borrowBalanceIncrease(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class ReserveUsedAsCollateralDisabled extends EthereumEvent {
  get params(): ReserveUsedAsCollateralDisabled__Params {
    return new ReserveUsedAsCollateralDisabled__Params(this);
  }
}

export class ReserveUsedAsCollateralDisabled__Params {
  _event: ReserveUsedAsCollateralDisabled;

  constructor(event: ReserveUsedAsCollateralDisabled) {
    this._event = event;
  }

  get _reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _user(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ReserveUsedAsCollateralEnabled extends EthereumEvent {
  get params(): ReserveUsedAsCollateralEnabled__Params {
    return new ReserveUsedAsCollateralEnabled__Params(this);
  }
}

export class ReserveUsedAsCollateralEnabled__Params {
  _event: ReserveUsedAsCollateralEnabled;

  constructor(event: ReserveUsedAsCollateralEnabled) {
    this._event = event;
  }

  get _reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _user(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Swap extends EthereumEvent {
  get params(): Swap__Params {
    return new Swap__Params(this);
  }
}

export class Swap__Params {
  _event: Swap;

  constructor(event: Swap) {
    this._event = event;
  }

  get _reserve(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _newRateMode(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _newRate(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _borrowBalanceIncrease(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _timestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class LendingPool__getReserveConfigurationDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: Address;
  value4: boolean;
  value5: boolean;
  value6: boolean;
  value7: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: Address,
    value4: boolean,
    value5: boolean,
    value6: boolean,
    value7: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromAddress(this.value3));
    map.set("value4", EthereumValue.fromBoolean(this.value4));
    map.set("value5", EthereumValue.fromBoolean(this.value5));
    map.set("value6", EthereumValue.fromBoolean(this.value6));
    map.set("value7", EthereumValue.fromBoolean(this.value7));
    return map;
  }
}

export class LendingPool__getReserveDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: BigInt;
  value10: BigInt;
  value11: Address;
  value12: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: BigInt,
    value10: BigInt,
    value11: Address,
    value12: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
    this.value12 = value12;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromUnsignedBigInt(this.value7));
    map.set("value8", EthereumValue.fromUnsignedBigInt(this.value8));
    map.set("value9", EthereumValue.fromUnsignedBigInt(this.value9));
    map.set("value10", EthereumValue.fromUnsignedBigInt(this.value10));
    map.set("value11", EthereumValue.fromAddress(this.value11));
    map.set("value12", EthereumValue.fromUnsignedBigInt(this.value12));
    return map;
  }
}

export class LendingPool__getUserAccountDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromUnsignedBigInt(this.value7));
    return map;
  }
}

export class LendingPool__getUserReserveDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromUnsignedBigInt(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromUnsignedBigInt(this.value6));
    map.set("value7", EthereumValue.fromUnsignedBigInt(this.value7));
    map.set("value8", EthereumValue.fromUnsignedBigInt(this.value8));
    map.set("value9", EthereumValue.fromBoolean(this.value9));
    return map;
  }
}

export class LendingPool extends SmartContract {
  static bind(address: Address): LendingPool {
    return new LendingPool("LendingPool", address);
  }

  LENDINGPOOL_REVISION(): BigInt {
    let result = super.call("LENDINGPOOL_REVISION", []);

    return result[0].toBigInt();
  }

  try_LENDINGPOOL_REVISION(): CallResult<BigInt> {
    let result = super.tryCall("LENDINGPOOL_REVISION", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  UINT_MAX_VALUE(): BigInt {
    let result = super.call("UINT_MAX_VALUE", []);

    return result[0].toBigInt();
  }

  try_UINT_MAX_VALUE(): CallResult<BigInt> {
    let result = super.tryCall("UINT_MAX_VALUE", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  addressesProvider(): Address {
    let result = super.call("addressesProvider", []);

    return result[0].toAddress();
  }

  try_addressesProvider(): CallResult<Address> {
    let result = super.tryCall("addressesProvider", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  core(): Address {
    let result = super.call("core", []);

    return result[0].toAddress();
  }

  try_core(): CallResult<Address> {
    let result = super.tryCall("core", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  dataProvider(): Address {
    let result = super.call("dataProvider", []);

    return result[0].toAddress();
  }

  try_dataProvider(): CallResult<Address> {
    let result = super.tryCall("dataProvider", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  parametersProvider(): Address {
    let result = super.call("parametersProvider", []);

    return result[0].toAddress();
  }

  try_parametersProvider(): CallResult<Address> {
    let result = super.tryCall("parametersProvider", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getReserveConfigurationData(
    _reserve: Address
  ): LendingPool__getReserveConfigurationDataResult {
    let result = super.call("getReserveConfigurationData", [
      EthereumValue.fromAddress(_reserve)
    ]);

    return new LendingPool__getReserveConfigurationDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toBoolean(),
      result[5].toBoolean(),
      result[6].toBoolean(),
      result[7].toBoolean()
    );
  }

  try_getReserveConfigurationData(
    _reserve: Address
  ): CallResult<LendingPool__getReserveConfigurationDataResult> {
    let result = super.tryCall("getReserveConfigurationData", [
      EthereumValue.fromAddress(_reserve)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new LendingPool__getReserveConfigurationDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toBoolean(),
        value[5].toBoolean(),
        value[6].toBoolean(),
        value[7].toBoolean()
      )
    );
  }

  getReserveData(_reserve: Address): LendingPool__getReserveDataResult {
    let result = super.call("getReserveData", [
      EthereumValue.fromAddress(_reserve)
    ]);

    return new LendingPool__getReserveDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBigInt(),
      result[10].toBigInt(),
      result[11].toAddress(),
      result[12].toBigInt()
    );
  }

  try_getReserveData(
    _reserve: Address
  ): CallResult<LendingPool__getReserveDataResult> {
    let result = super.tryCall("getReserveData", [
      EthereumValue.fromAddress(_reserve)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new LendingPool__getReserveDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBigInt(),
        value[10].toBigInt(),
        value[11].toAddress(),
        value[12].toBigInt()
      )
    );
  }

  getUserAccountData(_user: Address): LendingPool__getUserAccountDataResult {
    let result = super.call("getUserAccountData", [
      EthereumValue.fromAddress(_user)
    ]);

    return new LendingPool__getUserAccountDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt()
    );
  }

  try_getUserAccountData(
    _user: Address
  ): CallResult<LendingPool__getUserAccountDataResult> {
    let result = super.tryCall("getUserAccountData", [
      EthereumValue.fromAddress(_user)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new LendingPool__getUserAccountDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt()
      )
    );
  }

  getUserReserveData(
    _reserve: Address,
    _user: Address
  ): LendingPool__getUserReserveDataResult {
    let result = super.call("getUserReserveData", [
      EthereumValue.fromAddress(_reserve),
      EthereumValue.fromAddress(_user)
    ]);

    return new LendingPool__getUserReserveDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBoolean()
    );
  }

  try_getUserReserveData(
    _reserve: Address,
    _user: Address
  ): CallResult<LendingPool__getUserReserveDataResult> {
    let result = super.tryCall("getUserReserveData", [
      EthereumValue.fromAddress(_reserve),
      EthereumValue.fromAddress(_user)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new LendingPool__getUserReserveDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBoolean()
      )
    );
  }

  getReserves(): Array<Address> {
    let result = super.call("getReserves", []);

    return result[0].toAddressArray();
  }

  try_getReserves(): CallResult<Array<Address>> {
    let result = super.tryCall("getReserves", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddressArray());
  }
}

export class InitializeCall extends EthereumCall {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _addressesProvider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class DepositCall extends EthereumCall {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _reserve(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _referralCode(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class RedeemUnderlyingCall extends EthereumCall {
  get inputs(): RedeemUnderlyingCall__Inputs {
    return new RedeemUnderlyingCall__Inputs(this);
  }

  get outputs(): RedeemUnderlyingCall__Outputs {
    return new RedeemUnderlyingCall__Outputs(this);
  }
}

export class RedeemUnderlyingCall__Inputs {
  _call: RedeemUnderlyingCall;

  constructor(call: RedeemUnderlyingCall) {
    this._call = call;
  }

  get _reserve(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _user(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _aTokenBalanceAfterRedeem(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class RedeemUnderlyingCall__Outputs {
  _call: RedeemUnderlyingCall;

  constructor(call: RedeemUnderlyingCall) {
    this._call = call;
  }
}

export class BorrowCall extends EthereumCall {
  get inputs(): BorrowCall__Inputs {
    return new BorrowCall__Inputs(this);
  }

  get outputs(): BorrowCall__Outputs {
    return new BorrowCall__Outputs(this);
  }
}

export class BorrowCall__Inputs {
  _call: BorrowCall;

  constructor(call: BorrowCall) {
    this._call = call;
  }

  get _reserve(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _interestRateMode(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _referralCode(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class BorrowCall__Outputs {
  _call: BorrowCall;

  constructor(call: BorrowCall) {
    this._call = call;
  }
}

export class RepayCall extends EthereumCall {
  get inputs(): RepayCall__Inputs {
    return new RepayCall__Inputs(this);
  }

  get outputs(): RepayCall__Outputs {
    return new RepayCall__Outputs(this);
  }
}

export class RepayCall__Inputs {
  _call: RepayCall;

  constructor(call: RepayCall) {
    this._call = call;
  }

  get _reserve(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _onBehalfOf(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class RepayCall__Outputs {
  _call: RepayCall;

  constructor(call: RepayCall) {
    this._call = call;
  }
}

export class SwapBorrowRateModeCall extends EthereumCall {
  get inputs(): SwapBorrowRateModeCall__Inputs {
    return new SwapBorrowRateModeCall__Inputs(this);
  }

  get outputs(): SwapBorrowRateModeCall__Outputs {
    return new SwapBorrowRateModeCall__Outputs(this);
  }
}

export class SwapBorrowRateModeCall__Inputs {
  _call: SwapBorrowRateModeCall;

  constructor(call: SwapBorrowRateModeCall) {
    this._call = call;
  }

  get _reserve(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SwapBorrowRateModeCall__Outputs {
  _call: SwapBorrowRateModeCall;

  constructor(call: SwapBorrowRateModeCall) {
    this._call = call;
  }
}

export class RebalanceStableBorrowRateCall extends EthereumCall {
  get inputs(): RebalanceStableBorrowRateCall__Inputs {
    return new RebalanceStableBorrowRateCall__Inputs(this);
  }

  get outputs(): RebalanceStableBorrowRateCall__Outputs {
    return new RebalanceStableBorrowRateCall__Outputs(this);
  }
}

export class RebalanceStableBorrowRateCall__Inputs {
  _call: RebalanceStableBorrowRateCall;

  constructor(call: RebalanceStableBorrowRateCall) {
    this._call = call;
  }

  get _reserve(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _user(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RebalanceStableBorrowRateCall__Outputs {
  _call: RebalanceStableBorrowRateCall;

  constructor(call: RebalanceStableBorrowRateCall) {
    this._call = call;
  }
}

export class SetUserUseReserveAsCollateralCall extends EthereumCall {
  get inputs(): SetUserUseReserveAsCollateralCall__Inputs {
    return new SetUserUseReserveAsCollateralCall__Inputs(this);
  }

  get outputs(): SetUserUseReserveAsCollateralCall__Outputs {
    return new SetUserUseReserveAsCollateralCall__Outputs(this);
  }
}

export class SetUserUseReserveAsCollateralCall__Inputs {
  _call: SetUserUseReserveAsCollateralCall;

  constructor(call: SetUserUseReserveAsCollateralCall) {
    this._call = call;
  }

  get _reserve(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _useAsCollateral(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetUserUseReserveAsCollateralCall__Outputs {
  _call: SetUserUseReserveAsCollateralCall;

  constructor(call: SetUserUseReserveAsCollateralCall) {
    this._call = call;
  }
}

export class LiquidationCallCall extends EthereumCall {
  get inputs(): LiquidationCallCall__Inputs {
    return new LiquidationCallCall__Inputs(this);
  }

  get outputs(): LiquidationCallCall__Outputs {
    return new LiquidationCallCall__Outputs(this);
  }
}

export class LiquidationCallCall__Inputs {
  _call: LiquidationCallCall;

  constructor(call: LiquidationCallCall) {
    this._call = call;
  }

  get _collateral(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _reserve(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _user(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _purchaseAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _receiveAToken(): boolean {
    return this._call.inputValues[4].value.toBoolean();
  }
}

export class LiquidationCallCall__Outputs {
  _call: LiquidationCallCall;

  constructor(call: LiquidationCallCall) {
    this._call = call;
  }
}

export class FlashLoanCall extends EthereumCall {
  get inputs(): FlashLoanCall__Inputs {
    return new FlashLoanCall__Inputs(this);
  }

  get outputs(): FlashLoanCall__Outputs {
    return new FlashLoanCall__Outputs(this);
  }
}

export class FlashLoanCall__Inputs {
  _call: FlashLoanCall;

  constructor(call: FlashLoanCall) {
    this._call = call;
  }

  get _receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _reserve(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _params(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class FlashLoanCall__Outputs {
  _call: FlashLoanCall;

  constructor(call: FlashLoanCall) {
    this._call = call;
  }
}
