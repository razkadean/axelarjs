import { parseUnits } from "viem";

/**
 * Calculates the total cost in wei for a given amount of gas.
 *
 * @param gasLimit - The amount of gas, represented as a bigint.
 * @param gasPrice - The price of gas in ETH, represented as a string.
 *                   It can contain more decimals than the specified precision.
 * @param decimals - The desired precision for the gas price. The gas price
 *                   will be truncated or rounded to this number of decimals.
 *
 * @returns The total cost in wei, represented as a bigint.
 *
 * @example
 * ```
 * const cost = gasToWei(BigInt(21000), "0.0000000001", 9);
 * console.log(cost);  // Expected output: some bigint value
 * ```
 */
export function gasToWei(
  gasLimit: bigint,
  gasPrice: string,
  decimals: number
): bigint {
  // Split the gasPrice into integer and fractional parts
  const fractionalPart = gasPrice.split(".")[1] || "";

  if (fractionalPart.length <= decimals) {
    return gasLimit * BigInt(parseUnits(gasPrice, decimals));
  } else {
    const multiplier = Math.pow(10, decimals);
    const multipliedGasPrice = Number(gasPrice) * multiplier;
    return (
      (gasLimit * parseUnits(multipliedGasPrice.toFixed(decimals), decimals)) /
      BigInt(multiplier)
    );
  }
}
