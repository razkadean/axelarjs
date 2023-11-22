import {
  Button,
  Dialog,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  Label,
  TextInput,
} from "@axelarjs/ui";
import { useRef, useState, type FC } from "react";
import { type SubmitHandler } from "react-hook-form";

import { isAddress } from "viem";

import {
  useAddErc20StateContainer,
  type TokenDetailsFormState,
} from "~/features/AddErc20";
import { preventNonNumericInput } from "~/lib/utils/validation";
import { NextButton } from "../shared";

const FormInput = Object.assign({}, TextInput, {
  defaultProps: {
    ...TextInput.defaultProps,
    className: "bg-base-200",
    bordered: true,
  },
}) as typeof TextInput;

const TokenDetails: FC = () => {
  const { state, actions } = useAddErc20StateContainer();

  const [showAdvanced, setShowAdvanced] = useState(false);

  const { register, handleSubmit, formState } = state.tokenDetailsForm;

  // this is only required because the form and actions are sibling elements
  const formSubmitRef = useRef<HTMLButtonElement>(null);

  const submitHandler: SubmitHandler<TokenDetailsFormState> = (data, e) => {
    e?.preventDefault();

    actions.setTokenDetails({
      tokenName: data.tokenName,
      tokenSymbol: data.tokenSymbol,
      tokenDecimals: data.tokenDecimals,
      originTokenSupply: data.originTokenSupply,
      distributor: data.distributor,
      salt: data.salt,
    });

    actions.nextStep();
  };

  const isReadonly = state.isPreExistingToken;

  return (
    <>
      <form
        className="grid grid-cols-1 sm:gap-2"
        onSubmit={handleSubmit(submitHandler)}
      >
        <FormControl>
          <Label>Token Name</Label>
          <FormInput
            placeholder="Enter your token name"
            disabled={isReadonly}
            {...register("tokenName")}
          />
        </FormControl>
        <FormControl>
          <Label>Token Symbol</Label>
          <FormInput
            placeholder="Enter your token symbol"
            maxLength={11}
            disabled={isReadonly}
            {...register("tokenSymbol")}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="tokenDecimals">Token Decimals</Label>
          <FormInput
            id="tokenDecimals"
            type="number"
            placeholder="Enter your token decimals"
            min={1}
            max={18}
            disabled={isReadonly}
            {...register("tokenDecimals")}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="originTokenSupply">Amount to mint</Label>
          <FormInput
            id="originTokenSupply"
            placeholder="Enter amount to mint"
            min={0}
            onKeyDown={preventNonNumericInput}
            {...register("originTokenSupply", {
              disabled: isReadonly,
              validate(value) {
                if (!value || value === "0") {
                  return "Amount must be greater than 0";
                }

                return true;
              },
            })}
          />
        </FormControl>

        <div className="grid place-content-center pt-4 md:place-content-end">
          <Button size="sm" onClick={() => setShowAdvanced(!showAdvanced)}>
            advanced settings
            {showAdvanced ? (
              <EyeOffIcon className="h-[1.25em]" />
            ) : (
              <EyeIcon className="h-[1.25em]" />
            )}
          </Button>
        </div>
        <div>
          {showAdvanced && (
            <>
              <FormControl>
                <Label htmlFor="distributor">Mint tokens to</Label>
                <FormInput
                  id="distributor"
                  placeholder="Enter account address to mint to"
                  min={0}
                  onKeyDown={preventNonNumericInput}
                  {...register("distributor", {
                    disabled: isReadonly,
                    validate(value) {
                      if (!isAddress(String(value))) {
                        return "Invalid address";
                      }

                      return true;
                    },
                  })}
                />
              </FormControl>
              <FormControl>
                <Label htmlFor="salt">Salt</Label>
                <FormInput
                  id="salt"
                  placeholder="Enter your amount to mint"
                  min={0}
                  onKeyDown={preventNonNumericInput}
                  {...register("salt", {
                    disabled: isReadonly,
                    validate(value) {
                      if (!value) {
                        return "Salt is required";
                      }

                      return true;
                    },
                  })}
                />
              </FormControl>
            </>
          )}
        </div>
        <button type="submit" ref={formSubmitRef} />
      </form>

      {formState.errors && (
        <div className="text-sm text-red-500">
          {Object.values(formState.errors).map((error) => (
            <div key={error.message}>{error.message}</div>
          ))}
        </div>
      )}
      <Dialog.Actions>
        <Dialog.CloseAction onClick={actions.reset}>
          Cancel & exit
        </Dialog.CloseAction>
        <NextButton
          disabled={!formState.isValid}
          onClick={() => formSubmitRef.current?.click()}
        >
          Register token
        </NextButton>
      </Dialog.Actions>
    </>
  );
};

export default TokenDetails;
